import { Router } from 'express';
import * as authCtrl from '../controllers/auth.controller'
import { authJwt, verifySignup } from '../middlewares'

const router = Router();

router.post('/login', authCtrl.signIn);

router.post('/change-password', [authJwt.verifyToken], authCtrl.changePassword);

router.post('/force-logout', [authJwt.verifyToken], authCtrl.forzarCierre);

router.post('/logout', [authJwt.verifyToken], authCtrl.cerrarSesion);

export default router;
