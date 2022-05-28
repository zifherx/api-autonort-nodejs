"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tipoComprobante = _interopRequireDefault(require("../controllers/tipoComprobante.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _tipoComprobante.default.getAll);
router.get("/activos", _tipoComprobante.default.getAllActivos);
router.get("/:comprobanteId", _tipoComprobante.default.getOneById);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateComprobante], _tipoComprobante.default.createOne);
router.patch("/:comprobanteId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoComprobante.default.updateOneById);
router.delete("/:comprobanteId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _tipoComprobante.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tipoComprobante.routes.js.map