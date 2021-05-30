import { Router } from "express";
import * as tasacionCtrl from '../controllers/tasacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Tasacion
router.get('/', tasacionCtrl.getAll);

//Obtener Tasacion Activos
router.get('/activos', tasacionCtrl.getTasacionByActivo);

//Obtener Tasacion por ID
router.get('/:tasacionId', tasacionCtrl.getTasacionById);

//Crear Tasacion
router.post('/', [authJwt.verifyToken, authJwt.isConexosOrADV, verifySignup.checkRolesExist], tasacionCtrl.createTasacion);

//Actualizar Tasacion
router.patch('/:tasacionId', [authJwt.verifyToken, authJwt.isConexosOrADV, verifySignup.checkRolesExist], tasacionCtrl.updateTasacion);

//Eliminar Tasacion
router.delete('/:tasacionId', [authJwt.verifyToken, authJwt.isConexosOrADV, verifySignup.checkRolesExist], tasacionCtrl.deleteTasacion);

export default router;