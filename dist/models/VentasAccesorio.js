"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var stockSchema = new _mongoose.Schema({
  cod_interno: {
    type: String
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  fecha: {
    type: Date
  },
  anio: {
    type: String
  },
  anioE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Anio'
  },
  mes: {
    type: String
  },
  mesE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Mes'
  },
  stock: {
    type: Number,
    default: 0
  },
  ventas: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('VentasAccesorio', stockSchema);

exports.default = _default;
//# sourceMappingURL=VentasAccesorio.js.map