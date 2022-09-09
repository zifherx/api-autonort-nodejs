"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var nMas2Schema = new _mongoose.Schema({
  name: {
    type: String
  },
  fecha: {
    type: Date
  },
  anio: {
    type: Number
  },
  mes: {
    type: Number,
    min: 1,
    max: 12
  },
  estado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('nMas2', nMas2Schema);

exports.default = _default;
//# sourceMappingURL=nMas2.js.map