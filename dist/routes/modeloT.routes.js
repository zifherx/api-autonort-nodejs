"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _modeloT = _interopRequireDefault(require("../controllers/modeloT.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/activos', _modeloT.default.getModeloActivos);
router.get('/:modeloId', _modeloT.default.getModeloById);
router.get('/', _modeloT.default.getAll);
router.post('/by-marca', _modeloT.default.getModelosByMarca);
router.post('/by-name', _modeloT.default.getModelosByName);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateModeloT], _multer.default.single('avatar'), _modeloT.default.createModelo);
router.patch('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), _modeloT.default.updateModeloById);
router.delete('/:modeloId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _modeloT.default.deleteModeloById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=modeloT.routes.js.map