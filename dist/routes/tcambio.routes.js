"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tcambio = _interopRequireDefault(require("../controllers/tcambio.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _tcambio.default.getAll);
router.get('/:itemId', _tcambio.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdminorResponsableFinanzas], _tcambio.default.createOne);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tcambio.routes.js.map