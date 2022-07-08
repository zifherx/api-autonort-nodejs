import { Router } from "express";
import listaEsperaCtrl from "../controllers/listaEspera.controller";
import  { authJwt, verifyDuplicate } from '../middlewares'

const router = Router();

router.get('/', listaEsperaCtrl.getAll);
router.get('/:itemId', listaEsperaCtrl.getOneById);
router.post('/by-estado',listaEsperaCtrl.getCountByEstado);
router.post('/', [ authJwt.verifyToken, authJwt.isChiefADVOrChiefPlaneamientoOrAdministrador] ,listaEsperaCtrl.createOne);
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isChiefADVOrChiefPlaneamientoOrAdministrador] ,listaEsperaCtrl.updateOneById);
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin] ,listaEsperaCtrl.deleteOneById);

export default router;
