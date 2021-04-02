import { Router } from "express";
import * as sectoristaCtrl from '../controllers/sectorista.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Sectorista
router.get('/', sectoristaCtrl.getSectoristas);

//Obtener Sectorista Activos
router.get('/activos', sectoristaCtrl.getSectoristaByActivo);

//Obtener Sectorista por ID
router.get('/:sectoristaId', sectoristaCtrl.getSectoristaById);

//Crear Sectorista
router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist, verifyDuplicate.checkDuplicateSectorista], sectoristaCtrl.createSectorista);

//Actualizar Sectorista
router.patch('/:sectoristaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sectoristaCtrl.updateSectorista);

//Eliminar Sectorista
router.delete('/:sectoristaId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], sectoristaCtrl.deleteSectorista);

export default router;