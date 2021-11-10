"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var statusAAPCtrl = _interopRequireWildcard(require("../controllers/statusAAP.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)(); //Obtener Status File

router.get('/', statusAAPCtrl.getAll); //Obtener Status File Activos

router.get('/activos', statusAAPCtrl.getStatusAAPByActivo); //Obtener Status File por ID

router.get('/:statusAAPId', statusAAPCtrl.getStatusAAPById); //Crear Status File

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusAAP], statusAAPCtrl.createStatusAAP); //Actualizar Status File

router.patch('/:statusAAPId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusAAPCtrl.updateStatusAAP); //Eliminar Status File

router.delete('/:statusAAPId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], statusAAPCtrl.deleteStatusAAP);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusAAP.routes.js.map