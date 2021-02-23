import { Router } from 'express'
import * as campaignCtrl from '../controllers/campaign.controller'
import { authJwt, verifySignup } from '../middlewares'
const router = Router();

//Obtener Campañas
router.get('/', campaignCtrl.getAll);

//Obtener Campañas Activas de
router.get('/activos', campaignCtrl.getCampaniasActivas)

//Obtener Campaña por Id
router.get('/:campaignId', campaignCtrl.getOne);

//Obtener Camapaña por código Vehicular
//router.post('/find', campaignCtrl.getCampaignByVehicle);

//Crear Campaña
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], campaignCtrl.createCampaign);

//Actualizar Campaña
router.patch('/:campaignId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], campaignCtrl.updateCampaignById);

//Remover Campaña
router.delete('/:campaignId', [authJwt.verifyToken, authJwt.isChiefAdv, verifySignup.checkRolesExist], campaignCtrl.deleteCampaignById);

export default router;