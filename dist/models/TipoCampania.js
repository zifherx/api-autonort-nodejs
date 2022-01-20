"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tipoCampaniaSchema = new _mongoose.Schema({
  codigo: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    unique: true
  },
  estado: {
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

var _default = (0, _mongoose.model)('TipoCampania', tipoCampaniaSchema);

exports.default = _default;
//# sourceMappingURL=TipoCampania.js.map