"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/', userCtrl.getUsers);
router.get('/count/all', userCtrl.countAll);
router.get('/:userId', userCtrl.getUserById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist, _middlewares.verifyDuplicate.checkDuplicateUser], userCtrl.createUser);
router.post('/count/online', userCtrl.countByOnline);
router.patch('/upload/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('photo'), userCtrl.uploadPhotoProfile);
router.patch('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifySignup.checkRolesExist], userCtrl.updateUserById);
router.patch('/update/:userId', [_middlewares.authJwt.verifyToken, _middlewares.verifySignup.checkRolesExist], userCtrl.updateProfile);
router.delete('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], userCtrl.deleteUserById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.routes.js.map