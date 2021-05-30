"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tasacionSchema = new _mongoose.Schema({
  //Cliente
  cliente: {
    ref: "Customer",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  //Vehiculo
  marca: {
    type: String
  },
  modelo: {
    type: String
  },
  version: {
    type: String
  },
  color: {
    type: String
  },
  anio_fabricacion: {
    type: String
  },
  kilometraje: {
    type: Number
  },
  //Operacion
  empresa: {
    type: String,
    default: "Autonort Nor Oriente"
  },
  sucursal: {
    type: String
  },
  origen_operacion: {
    type: String
  },
  metodo: {
    type: String
  },
  fecha_operacion: {
    type: Date
  },
  precio: {
    type: Number
  },
  mes: {
    type: Number
  },
  //Vendedor
  asesor_venta: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  asesor_derivado: {
    type: String
  },
  asesor_servicio: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  //Empleado
  empleado: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Tasacion", tasacionSchema);

exports.default = _default;
//# sourceMappingURL=Tasacion.js.map