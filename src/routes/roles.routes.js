import { Router } from 'express'
import * as rolesCtrl from '../controllers/roles.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

router.get('/', rolesCtrl.getRoles);

router.get('/:roleId', rolesCtrl.getRolesById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.createRole);

router.put('/:roleId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.updateRoleById);

router.delete('/:roleId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], rolesCtrl.deleteRoleById);

export default router;