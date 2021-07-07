import { Router } from 'express'
import * as goalCtrl from '../controllers/goals.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

//Obtener Meta
router.get('/', goalCtrl.getMetas);

//Obtener Meta Activos
router.get('/activos', goalCtrl.getMetaByActivo);

//Obtener Meta por ID
router.get('/:metaId', goalCtrl.getMetaById);

//Crear Meta
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], goalCtrl.createMeta);

//Actualizar Meta
router.patch('/:metaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], goalCtrl.updateMeta);

//Eliminar Meta
router.delete('/:metaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], goalCtrl.deleteMeta);


export default router;