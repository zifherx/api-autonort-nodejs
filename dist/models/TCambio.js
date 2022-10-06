"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tCambioSchema = new _mongoose.Schema({
  codigo_interno: {
    type: String,
    unique: true
  },
  fecha_registro: {
    type: Date
  },
  itemsBBVA: [{
    ventaVehiculos: {
      type: Number
    },
    ventaRepuestos: {
      type: Number
    },
    licitaciones: {
      type: Number
    }
  }],
  itemsBCP: [{
    ventaVehiculos: {
      type: Number
    },
    ventaRepuestos: {
      type: Number
    },
    licitaciones: {
      type: Number
    }
  }],
  ventaVehiculosPromedio: {
    type: Number
  },
  ventaRepuestosPromedio: {
    type: Number
  },
  licitacionesPromedio: {
    type: Number
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('TCambio', tCambioSchema);

exports.default = _default;
//# sourceMappingURL=TCambio.js.map