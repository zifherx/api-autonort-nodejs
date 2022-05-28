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
    default: null
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
  auto: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModeloT'
  },
  placa: {
    type: String
  },
  color: {
    type: String
  },
  //actualizado
  colorE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Colores'
  },
  anio_fabricacion: {
    type: String
  },
  anioF: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Anio'
  },
  kilometraje: {
    type: Number
  },
  tipo_transmision: {
    type: String
  },
  num_propietarios: {
    type: Number
  },
  precio: {
    type: Number,
    default: 0
  },
  observacion: {
    type: String
  },
  //Operacion
  empresa: {
    type: String
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  origen_operacion: {
    type: Number,
    min: 0,
    max: 2
  },
  origenTasacion: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'OrigenConcesionario'
  },
  metodo: {
    type: Number,
    min: 0,
    max: 2
  },
  metodoTasacion: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'MetodoAtencion'
  },
  fecha_operacion: {
    type: Date
  },
  mes: {
    type: Number,
    min: 1,
    max: 12
  },
  status_tasacion: {
    type: String
  },
  estadoTasacionE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'StatusTasacion'
  },
  isIngresado: {
    type: Boolean,
    default: true
  },
  fechaIngresado: {
    type: Date
  },
  IsProceso: {
    type: Boolean,
    default: false
  },
  fechaProceso: {
    type: Date
  },
  isHot: {
    type: Boolean,
    default: false
  },
  fechaHot: {
    type: Date
  },
  IsRechazado: {
    type: Boolean,
    default: false
  },
  fechaRechazado: {
    type: Date
  },
  IsCerrado: {
    type: Boolean,
    default: false
  },
  fechaCerrado: {
    type: Date
  },
  comentario: {
    type: String
  },
  motivo: {
    type: String
  },
  nro_serie_nuevo_vehiculo: {
    type: String
  },
  modelo_nuevo_vehiculo: {
    type: String
  },
  //Ingreso
  ingresoPor: {
    type: String
  },
  //Vendedor
  asesor_venta: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  asesor_servicio: {
    ref: "AServicios",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  tecnico_inspector: {
    ref: "Tecnico",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  inspeccion_tecnica: {
    type: Boolean
  },
  //Empleado
  createdBy: {
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