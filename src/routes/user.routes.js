import { Router } from 'express'
import * as userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

router.get('/', userCtrl.getUsers);

router.get('/:userId', userCtrl.getUserById);

//router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], userCtrl.createUser);

router.patch('/:userId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], userCtrl.updateUserById);

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], userCtrl.deleteUserById);

router.post('/', userCtrl.createUser);

//router.put('/:userId', userCtrl.updateUserById);

//router.delete('/:userId', userCtrl.deleteUserById);

export default router;