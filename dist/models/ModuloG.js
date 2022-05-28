"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var moduloSchema = new _mongoose.Schema({
  menuG: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'MenuG'
  },
  name: {
    type: String,
    unique: true
  },
  icon: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('ModuloG', moduloSchema);

exports.default = _default;
//# sourceMappingURL=ModuloG.js.map