import { Router } from 'express'
import * as campaignCtrl from '../controllers/campaign.controller'

const router = Router();

//Crear Vendedor
router.post('/', campaignCtrl.createCampaign);

//Obtener Vendedores
router.get('/', campaignCtrl.getCampaigns);

//Obtener Vendedor por Id
router.get('/:campaignId', campaignCtrl.getCampaignById);

//Actualizar Vendedor
router.put('/:campaignId', campaignCtrl.updateCampaignById);

//Remover Vendedor
router.delete('/:campaignId', campaignCtrl.deleteCampaignById);

export default router;