"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tipoProductoSchema = new _mongoose.Schema({
  areaE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Area'
  },
  name: {
    type: String
  },
  estado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('TipoProducto', tipoProductoSchema);

exports.default = _default;
//# sourceMappingURL=TipoProducto.js.map