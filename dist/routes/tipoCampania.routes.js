"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tipoCampania = _interopRequireDefault(require("../controllers/tipoCampania.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _tipoCampania.default.getAllActivos);
router.get('/:tcampaniaId', _tipoCampania.default.getOneById);
router.get('/', _tipoCampania.default.getAll);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateTipoCampania], _tipoCampania.default.createOne);
router.patch('/:tcampaniaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoCampania.default.updateOneById);
router.delete('/:tcampaniaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoCampania.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tipoCampania.routes.js.map