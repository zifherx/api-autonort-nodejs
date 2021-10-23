import { Router } from "express";
import tecnicoCtrl from '../controllers/tecnico.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Tasador
router.get('/', tecnicoCtrl.getAll);

//Obtener Tasador Activos
router.get('/activos', tecnicoCtrl.getTecnicoByActivo);

//Obtener Tasador por ID
router.get('/:tasadorId', tecnicoCtrl.getTecnicoById);

//Crear Tasador
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tecnicoCtrl.createTecnico);

//Actualizar Tasador
router.patch('/:tasadorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tecnicoCtrl.updateTecnico);

//Eliminar Tasador
router.delete('/:tasadorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tecnicoCtrl.deleteTecnico);

export default router;