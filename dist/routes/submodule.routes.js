"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _submodule = _interopRequireDefault(require("../controllers/submodule.controller"));

var router = (0, _express.Router)();
router.get('/', _submodule.default.getAll);
router.post('/', _submodule.default.createOne);
var _default = router;
exports.default = _default;
//# sourceMappingURL=submodule.routes.js.map