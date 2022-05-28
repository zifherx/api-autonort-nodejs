"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _statusFacturacion = _interopRequireDefault(require("../controllers/statusFacturacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _statusFacturacion.default.getAll);
router.get("/activos", _statusFacturacion.default.getAllActivos);
router.get("/:statusId", _statusFacturacion.default.getOneById);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusFacturacion], _statusFacturacion.default.createOne);
router.patch("/:statusId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusFacturacion.default.updateOneById);
router.delete("/:statusId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusFacturacion.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusFacturacion.routes.js.map