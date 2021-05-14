"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var marcaSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Marca', marcaSchema);

exports.default = _default;
//# sourceMappingURL=Marca.js.map