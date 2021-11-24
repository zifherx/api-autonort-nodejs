"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var marcaTCtrl = _interopRequireWildcard(require("../controllers/marcaT.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/activos', marcaTCtrl.getMarcaActiva);
router.get('/count', marcaTCtrl.countAll);
router.get('/:marcaId', marcaTCtrl.getMarcaById);
router.get('/', marcaTCtrl.getAll); // router.post('/', multer.single('avatar'), marcaTCtrl.createMarca);

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMarcaT], _multer.default.single('avatar'), marcaTCtrl.createMarca);
router.patch('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), marcaTCtrl.updateMarcaById);
router.delete('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], marcaTCtrl.deleteMarcaById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=marcaT.routes.js.map