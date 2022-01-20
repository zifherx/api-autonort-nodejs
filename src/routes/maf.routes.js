import { Router } from 'express';
import * as mafCtrl from '../controllers/maf.controller';
import multer from '../middlewares/multer';
import { authJwt } from '../middlewares';

const router = Router();

router.get('/:mafId', mafCtrl.getOneById);

router.get('/', mafCtrl.getAll);

router.post('/count/by-sucursal', mafCtrl.getCountAll);

router.post('/count/by-status', mafCtrl.getCountByStatus);

router.post('/by-status', mafCtrl.obtenerRequestbyStatus);

router.post('/by-seller', mafCtrl.getAllByVendedor);

router.post('/by-sucursal', mafCtrl.getAllBySucursal);

router.post('/ranking/status', mafCtrl.getRankingByStatus);
router.post('/test-ranking', mafCtrl.testRanking);

router.post('/ranking/seller', mafCtrl.getRankingByVendedor);

router.post('/ranking/vehicle', mafCtrl.getRankingByVehicle);

router.post('/vehicles-by-seller', mafCtrl.getVehiclesBySeller);

router.post('/status-by-seller', mafCtrl.getSolicitudesBySeller);

router.post('/send-request', [authJwt.verifyToken, authJwt.isVendedor], mafCtrl.enviarCorreoSolicitud);

router.post('/zip', multer.single('fileZip'), mafCtrl.descargaYZip);

router.post('/send-message', mafCtrl.sendMessageWsp);

router.post('/', [authJwt.verifyToken, authJwt.isVendedor], multer.array('files', 50), mafCtrl.createRequest);

router.patch('/evidences/:mafId', [authJwt.verifyToken, authJwt.isVendedor], multer.array('files', 20), mafCtrl.agregarNewDocuments);

router.patch('/hot/:mafId', [authJwt.verifyToken, authJwt.isChiefSales], mafCtrl.requestaHot);

router.patch('/approve/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], multer.single('carta'), mafCtrl.actualizarReqAprobada);

router.patch('/executive/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], mafCtrl.cambioStatusByMaf);

router.patch('/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], mafCtrl.actualizarRequest);

router.delete('/:mafId', [authJwt.verifyToken, authJwt.isAdmin], mafCtrl.deleteRequest);

export default router