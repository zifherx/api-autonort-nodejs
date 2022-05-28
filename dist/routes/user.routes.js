"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/', _user.default.getAll);
router.get('/activos', _user.default.getAllActivos);
router.get('/:userId', _user.default.getOneById);
router.post('/count/by-online', _user.default.countByOnlineStatus);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateUser], _user.default.createOne);
router.patch('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), _user.default.updateOneById);
router.patch('/update-profile/:userId', [_middlewares.authJwt.verifyToken], _user.default.updateProfileById);
router.delete('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _user.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.routes.js.map