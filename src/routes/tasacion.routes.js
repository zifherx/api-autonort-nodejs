import { Router } from "express";
import tasacionCtrl from '../controllers/tasacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/count', tasacionCtrl.countAll);
router.get('/:tasacionId', tasacionCtrl.getOneById);
router.get('/', tasacionCtrl.getAll);
router.post('/by-tasador', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.getAllByTasador);
router.post('/', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.createTasacion);
router.patch('/:tasacionId', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.updatedOneById);
router.delete('/:tasacionId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], tasacionCtrl.deleteOneById);

export default router;