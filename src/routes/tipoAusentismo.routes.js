import { Router } from "express";
import controller from '../controllers/tipoAusentismo.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', controller.getAll);

router.get('/activos', controller.getAllActivos);

router.get('/:itemId', controller.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateTipoAusentismo], controller.newOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], controller.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteOneById);

export default router;