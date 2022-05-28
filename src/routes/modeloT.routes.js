import { Router } from "express";
import modeloTCtrl from '../controllers/modeloT.controller'
import { authJwt, verifyDuplicate } from "../middlewares";
import multer from '../middlewares/multer';

const router = Router();

router.get('/activos', modeloTCtrl.getModeloActivos);
router.get('/:modeloId', modeloTCtrl.getModeloById);
router.get('/', modeloTCtrl.getAll);
router.post('/by-marca', modeloTCtrl.getModelosByMarca);
router.post('/by-name', modeloTCtrl.getModelosByName);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateModeloT], multer.single('avatar'), modeloTCtrl.createModelo);
router.patch('/:modeloId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), modeloTCtrl.updateModeloById);
router.delete('/:modeloId', [authJwt.verifyToken, authJwt.isAdmin], modeloTCtrl.deleteModeloById);

export default router;