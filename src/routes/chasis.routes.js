import { Router } from 'express'
import * as chasisCtrl from '../controllers/chasis.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Chasis
router.get('/', chasisCtrl.getAll);

//Obtener Chasis Activos
router.get('/activos', chasisCtrl.getChasisByActivo);

//Obtener Chasis por ID
router.get('/:chasisId', chasisCtrl.getChasisById);

//Crear Chasis
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateChasis], chasisCtrl.createChasis);

//Actualizar Chasis
router.patch('/:chasisId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], chasisCtrl.updateChasis);

//Eliminar Chasis
router.delete('/:chasisId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], chasisCtrl.deleteChasis);

export default router;