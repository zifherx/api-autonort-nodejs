import { Router } from "express";
import tecnicoCtrl from '../controllers/tecnico.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Tecnico Activos
router.get('/activos', tecnicoCtrl.getAllActivos);

//Obtener Tecnico por ID
router.get('/:tecnicoId', tecnicoCtrl.getOneById);

//Obtener Tecnico
router.get('/', tecnicoCtrl.getAll);

//Crear Tecnico
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTecnico], tecnicoCtrl.createOne);

//Actualizar Tecnico
router.patch('/:tecnicoId', [authJwt.verifyToken, authJwt.isAdmin], tecnicoCtrl.updateOneById);

//Eliminar Tecnico
router.delete('/:tecnicoId', [authJwt.verifyToken, authJwt.isAdmin], tecnicoCtrl.deleteOneById);

export default router;