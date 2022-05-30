"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var portadaSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  nombreAvatar: {
    type: String
  },
  avatar: {
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

var _default = (0, _mongoose.model)('Portada', portadaSchema);

exports.default = _default;
//# sourceMappingURL=Portada.js.map