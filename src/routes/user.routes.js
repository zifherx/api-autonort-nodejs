import { Router } from 'express'
import userCtrl from '../controllers/user.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
import multer from '../middlewares/multer'

const router = Router();

router.get('/', userCtrl.getAll);

router.get('/activos', userCtrl.getAllActivos);

router.get('/:userId', userCtrl.getOneById);

router.post('/count/by-online', userCtrl.countByOnlineStatus);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateUser],  userCtrl.createOne);

router.patch('/:userId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), userCtrl.updateOneById);

router.patch('/update-profile/:userId', [authJwt.verifyToken], userCtrl.updateProfileById);

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], userCtrl.deleteOneById);

export default router;