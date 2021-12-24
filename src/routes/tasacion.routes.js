import { Router } from "express";
import tasacionCtrl from '../controllers/tasacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/:tasacionId', tasacionCtrl.getOneById);
router.get('/', tasacionCtrl.getAll);

router.post('/count', tasacionCtrl.countBySucursalFecha);
router.post('/ranking/status', tasacionCtrl.getRankingByStatus);
router.post('/ranking/metodo', tasacionCtrl.getCountByMetodo);
router.post('/ranking/origin', tasacionCtrl.getCountByOrigen);
router.post('/ranking/ingreso', tasacionCtrl.getRankingByIngreso);
router.post('/ranking/seller', tasacionCtrl.getRankingByVendedor);

router.post('/status-by-seller', tasacionCtrl.getTasacionesBySeller);

router.post('/by-tasador', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.getAllByTasador);
router.post('/', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.createTasacion);
router.patch('/:tasacionId', [authJwt.verifyToken, authJwt.isTasadororChiefEPDP], tasacionCtrl.updatedOneById);
router.delete('/:tasacionId', [authJwt.verifyToken, authJwt.isChiefEPDPorAdmin], tasacionCtrl.deleteOneById);

export default router;