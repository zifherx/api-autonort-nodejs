"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _helper = _interopRequireDefault(require("../controllers/helper.controller"));

var router = (0, _express.Router)();
router.post('/send-email', _helper.default.enviarCorreo);
var _default = router;
exports.default = _default;
//# sourceMappingURL=helper.routes.js.map