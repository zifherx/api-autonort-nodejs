"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var jefaturaSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  area: {
    type: String,
    uppercase: true
  },
  marca: {
    type: String
  },
  sucursal: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  createdBy: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('JefaturaVentas', jefaturaSchema);

exports.default = _default;
//# sourceMappingURL=JefaturaVentas.js.map