import { Router } from "express";
import * as modeloTCtrl from '../controllers/modeloT.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/activos', modeloTCtrl.getModeloActivos);
router.get('/count', modeloTCtrl.countAll);
router.get('/:modeloId', modeloTCtrl.getModeloById);
router.get('/', modeloTCtrl.getAll);
router.post('/by-marca', modeloTCtrl.getModelosByMarca);
router.post('/', [verifyDuplicate.checkDuplicateModeloT], modeloTCtrl.createModelo);
router.patch('/:modeloId', modeloTCtrl.updateModeloById);
router.delete('/:modeloId', modeloTCtrl.deleteModeloById);

export default router;