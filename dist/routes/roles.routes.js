"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _roles = _interopRequireDefault(require("../controllers/roles.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _roles.default.getAll);
router.get('/activos', _roles.default.getAllActivos);
router.get('/:roleId', _roles.default.getOneById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateRole], _roles.default.createOne);
router.patch('/:roleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _roles.default.updateOneById);
router.delete('/:roleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], _roles.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=roles.routes.js.map