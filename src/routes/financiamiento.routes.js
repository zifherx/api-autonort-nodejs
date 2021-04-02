import { Router } from "express";
import * as financiamientoCtrl from '../controllers/financiamiento.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Financiamiento
router.get('/', financiamientoCtrl.getFinanciamientos);

//Obtener Financiamiento Activos
router.get('/activos', financiamientoCtrl.getFinanciamientoByActivo);

//Obtener Financiamiento por ID
router.get('/:financiamientoId', financiamientoCtrl.getFinanciamientoById);

//Crear Financiamiento
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateFinanciamiento], financiamientoCtrl.createFinanciamiento);

//Actualizar Financiamiento
router.patch('/:financiamientoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], financiamientoCtrl.updateFinanciamiento);

//Eliminar Financiamiento
router.delete('/:financiamientoId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], financiamientoCtrl.deleteFinanciamiento);

export default router;