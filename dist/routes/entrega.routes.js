"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _entrega = _interopRequireDefault(require("../controllers/entrega.controller"));

var router = (0, _express.Router)();
router.get('/', _entrega.default.getAll);
router.post('/', _entrega.default.createOne);
var _default = router;
exports.default = _default;
//# sourceMappingURL=entrega.routes.js.map