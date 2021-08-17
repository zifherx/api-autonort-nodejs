import { Router } from "express";
import * as tasadorCtrl from '../controllers/tasador.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Tasador
router.get('/', tasadorCtrl.getTasadores);

//Obtener Tasador Activos
router.get('/activos', tasadorCtrl.getTasadorByActivo);

//Obtener Tasador por ID
router.get('/:tasadorId', tasadorCtrl.getTasadorById);

//Crear Tasador
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tasadorCtrl.createTasador);

//Actualizar Tasador
router.patch('/:tasadorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tasadorCtrl.updateTasador);

//Eliminar Tasador
router.delete('/:tasadorId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], tasadorCtrl.deleteTasador);

export default router;