"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusFileCtrl = _interopRequireWildcard(require("../controllers/statusFile.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)(); //Obtener Status File

router.get('/', statusFileCtrl.getAll); //Obtener Status File Activos

router.get('/activos', statusFileCtrl.getStatusFileByActivo); //Obtener Status File por ID

router.get('/:statusFileId', statusFileCtrl.getStatusFileById); //Crear Status File

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusFile], statusFileCtrl.createStatusFile); //Actualizar Status File

router.patch('/:statusFileId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusFileCtrl.updateStatusFile); //Eliminar Status File

router.delete('/:statusFileId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusFileCtrl.deleteStatusFile);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusFile.routes.js.map