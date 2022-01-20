"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusMafRequestCtrl = _interopRequireWildcard(require("../controllers/statusMafRequest.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Obtener Estado Maf

router.get('/', statusMafRequestCtrl.getAll); //Obtener Estado Maf Activos

router.get('/activos', statusMafRequestCtrl.getStatusMafRequestByActivo); //Obtener Estado Maf por ID

router.get('/:statusMafRequestId', statusMafRequestCtrl.getStatusMafRequestById); //Crear Estado Maf

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateStatusMafRequest], statusMafRequestCtrl.createStatusMafRequest); //Actualizar Estado Maf

router.patch('/:statusMafRequestId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusMafRequestCtrl.updateStatusMafRequest); //Eliminar Estado Maf

router.delete('/:statusMafRequestId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], statusMafRequestCtrl.deleteStatusMafRequest);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusMafRequest.routes.js.map