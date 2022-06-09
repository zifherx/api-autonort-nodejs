import { Router } from "express";
import menuCtrl from '../controllers/menuG.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', menuCtrl.getAll);

router.get('/activos', menuCtrl.getAllByActivos);

router.get('/:itemId', menuCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMenuG], menuCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], menuCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], menuCtrl.deleteOneById);

export default router;