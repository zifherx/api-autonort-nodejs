"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _portada = _interopRequireDefault(require("../controllers/portada.controller"));

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var router = (0, _express.Router)();
router.get('/activos', _portada.default.getAllActivos);
router.get('/:portadaId', _portada.default.getOneById);
router.get('/', _portada.default.getAll);
router.post('/', _multer.default.single('avatar'), _portada.default.createOne);
router.patch('/:portadaId', _multer.default.single('avatar'), _portada.default.updateOneById);
router.delete('/:portadaId', _portada.default.deleteOneByID);
var _default = router;
exports.default = _default;
//# sourceMappingURL=portada.routes.js.map