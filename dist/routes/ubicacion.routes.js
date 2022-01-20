"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var ubicacionCtrl = _interopRequireWildcard(require("../controllers/ubicacion.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Obtener Ubicacion

router.get('/', ubicacionCtrl.getUbicaciones); //Obtener Ubicacion Activos

router.get('/activos', ubicacionCtrl.getUbicacionByActivo); //Obtener Ubicacion por ID

router.get('/:ubicacionId', ubicacionCtrl.getUbicacionById); //Crear Ubicacion

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateUbicacion], ubicacionCtrl.createUbicacion); //Actualizar Ubicacion

router.patch('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], ubicacionCtrl.updateUbicacion); //Eliminar Ubicacion

router.delete('/:ubicacionId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], ubicacionCtrl.deleteUbicacion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ubicacion.routes.js.map