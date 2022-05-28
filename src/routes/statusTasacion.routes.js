import { Router } from "express";
import statusTasacionController from '../controllers/statusTasacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Status File
router.get('/', statusTasacionController.getAll);

//Obtener Status File Activos
router.get('/activos', statusTasacionController.getAllActivos);

//Obtener Status File por ID
router.get('/:statusId', statusTasacionController.getOneById);

//Crear Status File
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusTasacion], statusTasacionController.createOne);

//Actualizar Status File
router.patch('/:statusId', [authJwt.verifyToken, authJwt.isAdmin], statusTasacionController.updateOneById);

//Eliminar Status File
router.delete('/:statusId', [authJwt.verifyToken, authJwt.isAdmin], statusTasacionController.deleteOneById);

export default router;