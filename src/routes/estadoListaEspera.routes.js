import { Router } from "express";
import estadoCtrl from '../controllers/estadoListaEspera.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', estadoCtrl.getAll);

router.get('/activos', estadoCtrl.getAllActivos);

router.get('/:itemId', estadoCtrl.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoListaEspera], estadoCtrl.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.deleteOneById);

export default router;