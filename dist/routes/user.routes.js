"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var userCtrl = _interopRequireWildcard(require("../controllers/user.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get('/', userCtrl.getUsers);
router.get('/count/all', userCtrl.countAll);
router.get('/:userId', userCtrl.getUserById);
router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateUser], userCtrl.createUser);
router.post('/count/online', userCtrl.countByOnline);
router.patch('/upload/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('photo'), userCtrl.uploadPhotoProfile);
router.patch('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], userCtrl.updateUserById);
router.patch('/update/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], userCtrl.updateProfile);
router.delete('/:userId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], userCtrl.deleteUserById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.routes.js.map