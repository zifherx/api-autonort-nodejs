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
  temporada: {
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
  importe: {
    type: Number
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('StockAccesorio', stockSchema);

exports.default = _default;
//# sourceMappingURL=StockAccesorio.js.map