import { Router } from "express";
import tecnicoCtrl from '../controllers/tecnico.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Conteo Tecnicos
router.get('/count', tecnicoCtrl.countAll);

//Obtener Tecnico Activos
router.get('/activos', tecnicoCtrl.getTecnicoByActivo);

//Obtener Tecnico por ID
router.get('/:tecnicoId', tecnicoCtrl.getTecnicoById);

//Obtener Tecnico
router.get('/', tecnicoCtrl.getAll);

//Obtener Tecnico por ID
router.post('/count/status', tecnicoCtrl.countByStatus);

//Obtener Tecnico por Scuursal
router.post('/sucursal', tecnicoCtrl.getBySucursal);

//Crear Tecnico
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTecnico], tecnicoCtrl.createTecnico);

//Actualizar Tecnico
router.patch('/:tecnicoId', [authJwt.verifyToken, authJwt.isAdmin], tecnicoCtrl.updateTecnico);

//Eliminar Tecnico
router.delete('/:tecnicoId', [authJwt.verifyToken, authJwt.isAdmin], tecnicoCtrl.deleteTecnico);

export default router;