import { Router } from 'express';
import * as mafCtrl from '../controllers/maf.controller';
import multer from '../middlewares/multer';
import { authJwt } from '../middlewares';

const router = Router();

router.get('/', mafCtrl.getAll)

router.get('/:mafId', mafCtrl.getOneById)

router.post('/by-status', mafCtrl.obtenerRequestbyStatus)

router.post('/by-seller', mafCtrl.getAllByVendedor);

router.post('/by-sucursal', mafCtrl.getAllBySucursal);

router.post('/send-request', [authJwt.verifyToken, authJwt.isVendedor], mafCtrl.enviarCorreoSolicitud)

router.post('/', [authJwt.verifyToken, authJwt.isVendedor], multer.array('files', 50), mafCtrl.createRequest)

router.patch('/evidences/:mafId', [authJwt.verifyToken, authJwt.isVendedor], multer.array('files', 20), mafCtrl.agregarNewDocuments)

router.patch('/hot/:mafId', [authJwt.verifyToken, authJwt.isChiefSales], mafCtrl.requestaHot)

router.patch('/approve/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], multer.single('carta'), mafCtrl.actualizarReqAprobada)

router.patch('/executive/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], mafCtrl.cambioStatusByMaf)

router.patch('/:mafId', [authJwt.verifyToken, authJwt.isExecutiveMaf], mafCtrl.actualizarRequest)

router.delete('/:mafId', [authJwt.verifyToken, authJwt.isAdmin], mafCtrl.deleteRequest)

export default router