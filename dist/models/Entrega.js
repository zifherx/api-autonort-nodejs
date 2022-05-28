"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _nanoid = require("nanoid");

var entregaSchema = new _mongoose.Schema({
  //Solicitud
  codigoInterno: {
    type: String,
    default: (0, _nanoid.nanoid)()
  },
  observacion_vendedor: {
    type: String
  },
  tramite: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Record",
    default: null
  },
  fecha_entrega: {
    type: Date
  },
  hora_entrega: {
    type: String
  },
  isEquipado: {
    type: Boolean,
    default: false
  },
  archivo_proforma: {
    type: String
  },
  isPlacaRotativa: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null
  },
  //ADV
  estadoRespuestaADV: {
    type: String
  },
  num_placa_rotativa: {
    type: String
  },
  motivo_rechazo: {
    type: String
  },
  observacion_adv: {
    type: String
  },
  //Tunning
  estadoRespuestaTunning: {
    type: String
  },
  fechaUnidadLista: {
    type: Date
  },
  horaUnidadLista: {
    type: String
  },
  observacion_tunning: {
    type: String
  },
  //PDS
  estadoEntrega: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "StatusEntrega"
  },
  observacion_pds: {
    type: String
  },
  isIngresado: {
    type: Boolean,
    default: true
  },
  isAprobadoxADV: {
    type: Boolean,
    default: false
  },
  isAprobadoxTunning: {
    type: Boolean,
    default: false
  },
  // isEquipandoUnidad: { type: Boolean, default: false },
  isAprobadoxPDS: {
    type: Boolean,
    default: false
  },
  // isReprogramado: { type: Boolean, default: false },
  isEntregado: {
    type: Boolean,
    default: false
  },
  //Fechas
  fechaIngresado: {
    type: Date
  },
  fechaAprobadoxADV: {
    type: Date
  },
  fechaAprobadoxTunning: {
    type: Date
  },
  // fechaEquipandoUnidad: { type: Date },
  fechaAprobadoxPDS: {
    type: Date
  },
  // fechaReprogramado: { type: Date },   
  fechaEntregado: {
    type: Date
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Entrega", entregaSchema);

exports.default = _default;
//# sourceMappingURL=Entrega.js.map