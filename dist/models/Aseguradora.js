"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var aseguradoraSchema = new _mongoose.Schema({
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

var _default = (0, _mongoose.model)('Aseguradora', aseguradoraSchema);

exports.default = _default;
//# sourceMappingURL=Aseguradora.js.map