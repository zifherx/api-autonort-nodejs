"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', userCtrl.getUsers);
router.get('/:userId', userCtrl.getUserById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], userCtrl.createUser);
router.patch('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], userCtrl.updateUserById);
router.delete('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], userCtrl.deleteUserById); //router.post('/', userCtrl.createUser);
//router.put('/:userId', userCtrl.updateUserById);
//router.delete('/:userId', userCtrl.deleteUserById);

var _default = router;
exports.default = _default;
//# sourceMappingURL=user.routes.js.map