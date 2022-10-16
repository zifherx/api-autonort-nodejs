"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tunningAccesorios = _interopRequireDefault(require("../controllers/tunningAccesorios.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _tunningAccesorios.default.getAll);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdministradorOrAsistantComercial], _tunningAccesorios.default.createOne);
router.patch("/:itemId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdministradorOrAsistantComercial], _tunningAccesorios.default.updateOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tunningAccesorios.routes.js.map