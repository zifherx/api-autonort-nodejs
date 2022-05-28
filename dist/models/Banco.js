"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var bancoSchema = new _mongoose.Schema({
  avatar: {
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  },
  name: {
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Banco', bancoSchema);

exports.default = _default;
//# sourceMappingURL=Banco.js.map