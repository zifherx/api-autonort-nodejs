"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var rolesCtrl = _interopRequireWildcard(require("../controllers/roles.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', rolesCtrl.getRoles);
router.get('/:roleId', rolesCtrl.getRolesById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateRole], rolesCtrl.createRole);
router.patch('/:roleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], rolesCtrl.updateRoleById);
router.delete('/:roleId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], rolesCtrl.deleteRoleById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=roles.routes.js.map