"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var campaignCtrl = _interopRequireWildcard(require("../controllers/campaign.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Campañas

router.get('/', campaignCtrl.getAll); //Obtener Campañas Activas de

router.get('/activos', campaignCtrl.getCampaniasActivas); //Obtener Campaña por Id

router.get('/:campaignId', campaignCtrl.getOne); //Obtener Campaña por código Vehicular
//router.post('/find', campaignCtrl.getCampaignByVehicle);
//Crear Campaña

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateCampania], campaignCtrl.createCampaign); //Actualizar Campaña

router.patch('/:campaignId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], campaignCtrl.updateCampaignById); //Remover Campaña

router.delete('/:campaignId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdv, _middlewares.verifySignup.checkRolesExist], campaignCtrl.deleteCampaignById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=campaign.routes.js.map