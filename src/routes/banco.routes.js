import { Router } from "express";
import * as bancoCtrl from '../controllers/banco.controller';
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";
import multer from '../middlewares/multer'

const router = Router();

//Obtener Banco
router.get('/', bancoCtrl.getBancos);

//Obtener Banco Activos
router.get('/activos', bancoCtrl.getBancoByActivo);

//Obtener Banco por ID
router.get('/:itemId', bancoCtrl.getBancoById);

//Crear Banco
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateBanco], multer.single('avatar'), bancoCtrl.createBanco);

//Actualizar Banco
router.patch('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], multer.single('avatar'), bancoCtrl.updateBanco);

//Eliminar Banco
router.delete('/:itemId', [authJwt.verifyToken, authJwt.isAdmin], bancoCtrl.deleteBanco);

export default router;
