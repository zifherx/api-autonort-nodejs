import { Router } from "express";
import * as sectoristaCtrl from '../controllers/sectorista.controller'
import { authJwt, verifySignup } from "../middlewares";

const router = Router();

//Obtener Sectorista
router.get('/', sectoristaCtrl.getSectoristas);

//Obtener Sectorista Activos
router.get('/activos', sectoristaCtrl.getSectoristaByActivo);

//Obtener Sectorista por ID
router.get('/:sectoristaId', sectoristaCtrl.getSectoristaById);

//Crear Modelo
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sectoristaCtrl.createSectorista);

//Actualizar Modelo
router.patch('/:sectoristaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sectoristaCtrl.updateSectorista);

//Eliminar Modelo
router.delete('/:sectoristaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sectoristaCtrl.deleteSectorista);

export default router;