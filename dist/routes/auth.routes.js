"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post('/signin', authCtrl.signIn);
router.post('/change-password', [_middlewares.authJwt.verifyToken], authCtrl.changePassword);
router.post('/force-logout', [_middlewares.authJwt.verifyToken], authCtrl.forzarCierre);
router.post('/logout', [_middlewares.authJwt.verifyToken], authCtrl.cerrarSesion);
var _default = router;
exports.default = _default;
//# sourceMappingURL=auth.routes.js.map