"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _files = _interopRequireDefault(require("../controllers/files.controller"));

var router = (0, _express.Router)();
router.get('/', _files.default.getAll);
router.get('/:filesId', _files.default.getOneById);
router.post('/by-estado', _files.default.getFilesByEstado);
router.post('/by-sucursal', _files.default.getFilesBySucursalyFecha);
router.post('/count/by-estado', _files.default.conteoFilesByEstado);
router.post('/progress', _files.default.groupFilesByEstado);
router.post('/ranking/by-modelo', _files.default.rankingFilesByModelo);
router.post('/ranking/by-seller', _files.default.rankingFilesBySeller);
router.post('/ranking/entregas', _files.default.rankingFilesByUbicacion);
router.post('/', _files.default.createOne);
router.patch('/:filesId', _files.default.updateOneById);
router.delete('/:filesId', _files.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=files.routes.js.map