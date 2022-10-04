"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var usadoSchema = new _mongoose.Schema({
  codigo_interno: {
    type: String
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Sucursal"
  },
  mes: {
    type: Number,
    min: 0,
    max: 12
  },
  fechaRegistro: {
    type: Date
  },
  tasacionId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Tasacion",
    default: null
  },
  precio_tasacion: {
    type: Number,
    min: 0
  },
  precio_venta: {
    type: Number,
    min: 0
  },
  estado_usado: {
    type: String
  },
  estadoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'EstadoUsados'
  },
  ubicacion: {
    type: String
  },
  ubicacionE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  observacion: {
    type: String
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  // LOGS
  isDisponible: {
    type: Boolean,
    default: true
  },
  fechaDisponible: {
    type: Date
  },
  isEvaluacion: {
    type: Boolean,
    default: false
  },
  fechaEvaluacion: {
    type: Date
  },
  isVendido: {
    type: Boolean,
    default: false
  },
  fechaVendido: {
    type: Date
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Usados", usadoSchema);

exports.default = _default;
//# sourceMappingURL=Usados.js.map