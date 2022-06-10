"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var resultadoSchema = new _mongoose.Schema({
  cod_interno: {
    type: String
  },
  tipoProducto: {
    type: String
  },
  tipoProductoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'TipoProducto'
  },
  fecha: {
    type: Date
  },
  anio: {
    type: String
  },
  mes: {
    type: String
  },
  anioE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Anio'
  },
  mesE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Mes'
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  meta: {
    type: Number,
    default: 0
  },
  valor: {
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

var _default = (0, _mongoose.model)('Resultado', resultadoSchema);

exports.default = _default;
//# sourceMappingURL=Resultado.js.map