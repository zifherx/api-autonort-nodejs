import { Router } from "express";
import controller from '../controllers/EstadoTunningAccesorios.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', controller.getAll);

router.get('/activos', controller.getAllActivos);

router.get('/:itemId', controller.getOneById);

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoTunningAccesorios], controller.createOne);

router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], controller.updateOneById);

router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], controller.deleteOneById);

export default router;