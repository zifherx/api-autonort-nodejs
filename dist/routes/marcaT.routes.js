"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var marcaTCtrl = _interopRequireWildcard(require("../controllers/marcaT.controller"));

var _middlewares = require("../middlewares");

var _multer = _interopRequireDefault(require("../middlewares/multer"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get('/activos', marcaTCtrl.getMarcaActiva);
router.get('/count', marcaTCtrl.countAll);
router.get('/:marcaId', marcaTCtrl.getMarcaById);
router.get('/', marcaTCtrl.getAll); // router.post('/', multer.single('avatar'), marcaTCtrl.createMarca);

router.post('/', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, _middlewares.verifyDuplicate.checkDuplicateMarcaT], _multer.default.single('avatar'), marcaTCtrl.createMarca);
router.patch('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _multer.default.single('avatar'), marcaTCtrl.updateMarcaById);
router.delete('/:marcaId', [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], marcaTCtrl.deleteMarcaById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=marcaT.routes.js.map