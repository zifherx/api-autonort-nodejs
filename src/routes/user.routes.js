import { Router } from 'express'
import * as userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/', userCtrl.getUsers);

router.get('/count/all', userCtrl.countAll);

router.get('/:userId', userCtrl.getUserById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateUser], userCtrl.createUser);

router.post('/count/online', userCtrl.countByOnline);

router.patch('/:userId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], userCtrl.updateUserById);

router.patch('/update/:userId', [authJwt.verifyToken, verifySignup.checkRolesExist], userCtrl.updateProfile);

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteUserById);

export default router;