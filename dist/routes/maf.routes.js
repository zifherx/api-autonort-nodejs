"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _maf = _interopRequireDefault(require("../controllers/maf.controller"));

var _multer = _interopRequireDefault(require("../middlewares/multer"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get("/:mafId", _maf.default.getOneById); // Create One

router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], _multer.default.array("evidencias", 50), _maf.default.createOne); //Listas

router.post("/by-estado", _maf.default.getAllByEstado);
router.post("/by-sucursal", _maf.default.getAllBySucursal);
router.post("/by-vendedor", _maf.default.getAllByCreador);
router.post("/by-customer", _maf.default.getAllSolicitudesAprobadas);
router.patch("/agree/:mafId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isExecutiveMaf], _multer.default.array("docuAprobacion", 2), _maf.default.approveRequestStateById);
router.patch("/reenroll/:mafId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isVendedor], _multer.default.array("adicionales", 30), _maf.default.reenrollRequestStateById);
router.patch("/update/:mafId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isExecutiveMaf], _maf.default.updateRequestStateById); // Delete One By Id

router.delete("/:mafId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], _maf.default.deleteOneById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=maf.routes.js.map