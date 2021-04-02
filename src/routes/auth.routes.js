import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExist], authCtrl.signUp);

router.post('/signin', authCtrl.signIn);

router.post('/change-password', [authJwt.verifyToken], authCtrl.changePassword);

export default router;