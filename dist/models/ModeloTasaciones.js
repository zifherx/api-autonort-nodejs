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
  avatar: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  },
  name: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  estado: {
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