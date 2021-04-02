import { Router } from 'express'
import * as adicionalCtrl from '../controllers/adicional.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Adicionales
router.get('/', adicionalCtrl.getAll);

//Obtener Adicional Activas
router.get('/activos', adicionalCtrl.getAdicionalActivos)

//Obtener Adicional por Id
router.get('/:adicionalId', adicionalCtrl.getOne);

//Crear Adicional
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateAdicional], adicionalCtrl.createAdicional);

//Actualizar Adicional
router.patch('/:adicionalId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], adicionalCtrl.updateAdicionalById);

//Remover Adicional
router.delete('/:adicionalId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], adicionalCtrl.deleteAdicionalById);

export default router;