"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var goalSchema = new _mongoose.Schema({
  anio: {
    type: String
  },
  mes: {
    type: Number
  },
  vendedor: {
    ref: 'Seller',
    type: _mongoose.Schema.Types.ObjectId
  },
  criterio: {
    type: String
  },
  meta: {
    type: Number
  },
  avance: {
    type: Number
  },
  status: {
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

var _default = (0, _mongoose.model)('Goals', goalSchema);

exports.default = _default;
//# sourceMappingURL=Goal.js.map