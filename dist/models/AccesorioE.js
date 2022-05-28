"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var accSchema = new _mongoose.Schema({
  cod_interno: {
    type: String,
    max: 11,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  model: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModeloT'
  },
  precio: {
    type: Number,
    default: 0
  },
  estado: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('AccesorioE', accSchema);

exports.default = _default;
//# sourceMappingURL=AccesorioE.js.map