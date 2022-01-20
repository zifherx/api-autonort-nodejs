"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _oferta = _interopRequireDefault(require("../controllers/oferta.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/activos', _oferta.default.getOneActivos);
router.get('/:ofertaId', _oferta.default.getOneById);
router.get('/', _oferta.default.getAll);
router.post('/', _oferta.default.createOne);
router.patch('/:ofertaId', _oferta.default.updateOneById);
router.delete('/:ofertaId', _oferta.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=oferta.routes.js.map