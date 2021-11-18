"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var modeloTCtrl = _interopRequireWildcard(require("../controllers/modeloT.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', modeloTCtrl.getModeloActivos);
router.get('/count', modeloTCtrl.countAll);
router.get('/:modeloId', modeloTCtrl.getModeloById);
router.get('/', modeloTCtrl.getAll);
router.post('/by-marca', modeloTCtrl.getModelosByMarca);
router.post('/', [_middlewares.verifyDuplicate.checkDuplicateModeloT], modeloTCtrl.createModelo);
router.patch('/:modeloId', modeloTCtrl.updateModeloById);
router.delete('/:modeloId', modeloTCtrl.deleteModeloById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=modeloT.routes.js.map