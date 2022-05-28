"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _campania = _interopRequireDefault(require("../controllers/campania.controller"));

var router = (0, _express.Router)();
router.get('/', _campania.default.getAll);
router.get('/activos', _campania.default.getAllActivos);
router.get('/:campaniaId', _campania.default.getOneById);
router.post('/find', _campania.default.findCampaniaByParams);
router.post('/ofertas', _campania.default.getOfertaByCampania);
router.post('/', _campania.default.createOne);
router.patch('/:campaniaId', _campania.default.updateOneById);
router.delete('/:campaniaId', _campania.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=campania.routes.js.map