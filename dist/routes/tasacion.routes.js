"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tasacion = _interopRequireDefault(require("../controllers/tasacion.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _tasacion.default.getAll);
var _default = router;
exports.default = _default;
//# sourceMappingURL=tasacion.routes.js.map