"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var modeloTSchema = new _mongoose.Schema({
  marca: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'MarcaT'
  },
  name: {
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

var _default = (0, _mongoose.model)('ModeloT', modeloTSchema);

exports.default = _default;
//# sourceMappingURL=ModeloTasaciones.js.map