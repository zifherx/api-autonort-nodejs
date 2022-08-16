"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _record = _interopRequireDefault(require("../controllers/record.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _record.default.getAll);
router.get('/:recordId', _record.default.getOneById);
router.post('/by-seller', _record.default.getAllBySeller);
router.post('/count/by-estado', _record.default.countAllByStatus);
router.post('/by-sucursal', _record.default.getAllBySucursal);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistantyAdministrador, _middlewares.verifyDuplicate.checkDuplicateTramite], _record.default.createOne);
router.patch('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isInmatriculadosAsistantyAdministrador], _record.default.updateOneById);
router.delete('/:recordId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _record.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=record.routes.js.map