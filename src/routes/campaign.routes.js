import { Router } from 'express'
import * as campaignCtrl from '../controllers/campaign.controller'
import { authJwt, verifySignup, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Campañas
router.get('/', campaignCtrl.getAll);

//Obtener Campañas Activas de
router.get('/activos', campaignCtrl.getCampaniasActivas)

//Obtener Campaña por Id
router.get('/:campaignId', campaignCtrl.getOne);

//Obtener Campaña por modelo Vehicular 
router.post('/find', campaignCtrl.getCampaignByVehicle);

//Obtener Campaña por modelo Vehicular 
router.post('/group', campaignCtrl.getCampaignByGrupo);

//Crear Campaña
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin, verifyDuplicate.checkDuplicateCampania], campaignCtrl.createCampaign);

//Actualizar Campaña
router.patch('/:campaignId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], campaignCtrl.updateCampaignById);

//Remover Campaña
router.delete('/:campaignId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], campaignCtrl.deleteCampaignById);

export default router;