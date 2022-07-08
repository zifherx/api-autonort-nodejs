"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _files = _interopRequireDefault(require("../controllers/files.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/", _files.default.getAll);
router.get("/:itemId", _files.default.getOneById);
router.post("/by-estado", _files.default.getFilesByEstado);
router.post("/by-sucursal", _files.default.getFilesBySucursalyFecha);
router.post('/by-tvalue', _files.default.getFilesByToyotaValue);
router.post('/by-accesorios', _files.default.getFilesByImporteAccesorios);
router.post("/count/by-estado", _files.default.conteoFilesByEstado);
router.post("/progress", _files.default.groupFilesByEstado);
router.post("/ranking/by-modelo", _files.default.rankingFilesByModelo);
router.post("/ranking/by-seller", _files.default.rankingFilesBySeller);
router.post("/ranking/entregas", _files.default.rankingFilesByUbicacion);
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento], _files.default.createOne);
router.patch("/:itemId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento], _files.default.updateOneById);
router.delete("/:itemId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _files.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=files.routes.js.map