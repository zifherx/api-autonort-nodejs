"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var recordCtrl = _interopRequireWildcard(require("../controllers/record.controller"));

var router = (0, _express.Router)(); //Crear Venta

router.post('/', recordCtrl.createRecord); //Obtener Venta

router.get('/', recordCtrl.getRecords); //Obtener Venta por Id

router.get('/:recordId', recordCtrl.getRecordById); //Actualizar Venta

router.put('/:recordId', recordCtrl.updateRecordById); //Remover Venta

router.delete('/:recordId', recordCtrl.deleteRecordById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=record.routes.js.map