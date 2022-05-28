import { Router } from "express";
import usoCtrl from '../controllers/tipoUso.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Anio
router.get('/', usoCtrl.getAll);

//Obtener Anio Activos
router.get('/activos', usoCtrl.getAllByActivo);

//Obtener Anio por ID
router.get('/:usoId', usoCtrl.getOneById);

//Crear Anio
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTipoUso], usoCtrl.createOne);

//Actualizar Anio
router.patch('/:usoId', [authJwt.verifyToken, authJwt.isAdmin], usoCtrl.updateOneById);

//Eliminar Anio
router.delete('/:usoId', [authJwt.verifyToken, authJwt.isAdmin], usoCtrl.deleteOneById);

export default router;