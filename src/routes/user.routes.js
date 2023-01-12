import { Router } from 'express'
import controller from '../controllers/user.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
import multer from '../middlewares/multer'

const router = Router();

router.get('/', controller.getAll);

router.get('/activos', controller.getAllActivos);

router.get('/:userId', controller.getOneById);

router.post('/count/by-online', controller.countByOnlineStatus);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateUser],  controller.createOne);

router.patch('/:userId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), controller.updateOneById);

router.patch('/update-profile/:userId', [authJwt.verifyToken], controller.updateProfileById);

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteOneById);

export default router;
