import { Router } from 'express'
import * as campaignCtrl from '../controllers/campaign.controller'

const router = Router();

//Crear Campaña
router.post('/', campaignCtrl.createCampaign);

//Obtener Campañas
router.get('/', campaignCtrl.getCampaigns);

//Obtener Campaña por Id
router.get('/:campaignId', campaignCtrl.getCampaignById);

//Obtener Camapaña por código Vehicular
router.post('/find', campaignCtrl.getCampaignByVehicle);

//Actualizar Campaña
router.put('/:campaignId', campaignCtrl.updateCampaignById);

//Remover Campaña
router.delete('/:campaignId', campaignCtrl.deleteCampaignById);

export default router;