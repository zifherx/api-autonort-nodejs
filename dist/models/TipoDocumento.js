"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tipoDocumentoSchema = new _mongoose.Schema({
  cod_interno: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    unique: true
  },
  abreviatura: {
    type: String
  },
  longitud: {
    type: Number
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('TipoDocumento', tipoDocumentoSchema);

exports.default = _default;
//# sourceMappingURL=TipoDocumento.js.map