"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tipoUsoSchema = new _mongoose.Schema({
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

var _default = (0, _mongoose.model)('TipoUso', tipoUsoSchema);

exports.default = _default;
//# sourceMappingURL=TipoUso.js.map