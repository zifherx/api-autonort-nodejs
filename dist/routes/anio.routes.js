"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var anioCtrl = _interopRequireWildcard(require("../controllers/anio.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Obtener Anio

router.get('/', anioCtrl.getAnios); //Obtener Anio Activos

router.get('/activos', anioCtrl.getAnioByActivo); //Obtener Anio por ID

router.get('/:anioId', anioCtrl.getAnioById); //Crear Anio

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateAnio], anioCtrl.createAnio); //Actualizar Anio

router.patch('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], anioCtrl.updateAnio); //Eliminar Anio

router.delete('/:anioId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], anioCtrl.deleteAnio);
var _default = router;
exports.default = _default;
//# sourceMappingURL=anio.routes.js.map