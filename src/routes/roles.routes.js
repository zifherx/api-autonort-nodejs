import { Router } from 'express'
import * as rolesCtrl from '../controllers/roles.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/', rolesCtrl.getRoles);

router.get('/count/all', rolesCtrl.getCountAll);

router.get('/:roleId', rolesCtrl.getRolesById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateRole], rolesCtrl.createRole);

router.patch('/:roleId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.updateRoleById);

router.delete('/:roleId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.deleteRoleById);

export default router;