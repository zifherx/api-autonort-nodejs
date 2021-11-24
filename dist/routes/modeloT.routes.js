"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var modeloTCtrl = _interopRequireWildcard(require("../controllers/modeloT.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/activos', modeloTCtrl.getModeloActivos);
router.get('/count', modeloTCtrl.countAll);
router.get('/:modeloId', modeloTCtrl.getModeloById);
router.get('/', modeloTCtrl.getAll);
router.post('/by-marca', modeloTCtrl.getModelosByMarca);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateModeloT], _multer.default.single('avatar'), modeloTCtrl.createModelo);
router.patch('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), modeloTCtrl.updateModeloById);
router.delete('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], modeloTCtrl.deleteModeloById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=modeloT.routes.js.map