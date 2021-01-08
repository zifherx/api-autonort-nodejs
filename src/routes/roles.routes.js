import { Router } from 'express'
import * as rolesCtrl from '../controllers/roles.controller'

const router = Router();

router.get('/', rolesCtrl.getRoles);

router.get('/:roleId', rolesCtrl.getRolesById);

router.post('/', rolesCtrl.createRole);

router.put('/:roleId', rolesCtrl.updateRoleById);

router.delete('/:roleId', rolesCtrl.deleteRoleById);

export default router;