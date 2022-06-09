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
    type: _mongoose.Schema.Types.ObjectId,
    ref: ''
  },
  fecha: {
    type: Date
  },
  anio: {
    type: Number
  },
  mes: {
    type: Number
  },
  sucursalE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  }],
  meta: {
    type: Number,
    default: 0
  },
  valor: {
    type: Number,
    default: 0
  },
  createdBy: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Resultado', resultadoSchema);

exports.default = _default;
//# sourceMappingURL=Resultado.js.map