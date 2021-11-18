"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var marcaTCtrl = _interopRequireWildcard(require("../controllers/marcaT.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', marcaTCtrl.getMarcaActiva);
router.get('/count', marcaTCtrl.countAll);
router.get('/:marcaId', marcaTCtrl.getMarcaById);
router.get('/', marcaTCtrl.getAll);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMarcaT], marcaTCtrl.createMarca);
router.patch('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], marcaTCtrl.updateMarcaById);
router.delete('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], marcaTCtrl.deleteMarcaById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=marcaT.routes.js.map