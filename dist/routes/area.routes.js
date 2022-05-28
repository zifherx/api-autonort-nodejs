"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _area = _interopRequireDefault(require("../controllers/area.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _area.default.getAll);
router.get('/activos', _area.default.getAllActivos);
router.get('/:areaId', _area.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateArea], _area.default.createOne);
router.patch('/:areaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _area.default.updateOneById);
router.delete('/:areaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _area.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=area.routes.js.map