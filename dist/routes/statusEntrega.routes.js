"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _statusEntrega = _interopRequireDefault(require("../controllers/statusEntrega.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _statusEntrega.default.getAll);
router.get("/activos", _statusEntrega.default.getAllActivos);
router.get("/:statusId", _statusEntrega.default.getOneById);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateStatusEntrega], _statusEntrega.default.createOne);
router.patch("/:statusId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusEntrega.default.updateOneById);
router.delete("/:statusId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _statusEntrega.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=statusEntrega.routes.js.map