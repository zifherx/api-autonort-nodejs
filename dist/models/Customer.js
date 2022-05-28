"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var customerSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  typeDocument: {
    type: Number,
    min: 0,
    max: 2
  },
  tipoDocumento: {
    ref: 'TipoDocumento',
    type: _mongoose.Schema.Types.ObjectId
  },
  //Actualizado
  document: {
    type: String
  },
  representanteLegal: {
    type: String
  },
  documentoRepresentante: {
    type: String
  },
  cellphone: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  empleado: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Customer', customerSchema);

exports.default = _default;
//# sourceMappingURL=Customer.js.map