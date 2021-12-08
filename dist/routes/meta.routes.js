"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _meta = _interopRequireDefault(require("../controllers/meta.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _meta.default.getAll);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _meta.default.createOne);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meta.routes.js.map