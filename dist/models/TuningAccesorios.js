"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var accSchema = new _mongoose.Schema({
  codigo_interno: {
    type: String
  },
  sede: {
    type: String
  },
  sedeE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  clasificacion: {
    type: String
  },
  producto: {
    type: String
  },
  pCosto: {
    type: Number
  },
  margenGanancia: {
    type: Number
  },
  pVenta: {
    type: Number
  },
  stockInicial: {
    type: Number
  },
  forCar: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModeloT'
  }],
  anio: [{
    type: String
  }],
  anioE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Anio'
  }],
  estado: {
    type: String
  },
  estadoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'EstadoTunningAccesorio'
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('TuningAccesorios', accSchema);

exports.default = _default;
//# sourceMappingURL=TuningAccesorios.js.map