"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var aserviciosSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  document: {
    type: String
  },
  cellphone: {
    type: String
  },
  email: {
    type: String
  },
  avatar: {
    type: String
  },
  sucursal: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('AServicios', aserviciosSchema);

exports.default = _default;
//# sourceMappingURL=AServicios.js.map