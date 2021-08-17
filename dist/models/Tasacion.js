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
  chasis: {
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
  placa: {
    type: String
  },
  precio: {
    type: Number
  },
  observacion: {
    type: String
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
  mes: {
    type: Number
  },
  status_tasacion: {
    type: String
  },
  nro_serie_nuevo_vehiculo: {
    type: String,
    allowEmpty: true
  },
  modelo_nuevo_vehiculo: {
    type: String,
    allowEmpty: true
  },
  //Vendedor
  asesor_venta: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  asesor_servicio: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  asesor_tasador: {
    ref: "Tasador",
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  inspeccion_tecnica: {
    type: Boolean
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