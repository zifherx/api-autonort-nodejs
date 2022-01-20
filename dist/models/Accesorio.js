"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var accesorioSchema = new _mongoose.Schema({
  codigo: {
    type: String,
    required: true
  },
  categoria: {
    type: String
  },
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  stock: {
    type: Number
  },
  status: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Accesorio', accesorioSchema);

exports.default = _default;
//# sourceMappingURL=Accesorio.js.map