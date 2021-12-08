"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var metaSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  sucursal: {
    type: String
  },
  area: {
    type: String
  },
  tipo: {
    type: String
  },
  fecha: {
    type: Date,
    default: new Date()
  },
  mes: {
    type: Number
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

var _default = (0, _mongoose.model)('Meta', metaSchema);

exports.default = _default;
//# sourceMappingURL=Meta.js.map