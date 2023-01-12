import { Router } from 'express'
import rolesCtrl from '../controllers/roles.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/', rolesCtrl.getAll);

router.get('/activos', rolesCtrl.getAllActivos);

router.get('/:itemId', rolesCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateRole], rolesCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.deleteOneById);

export default router;
