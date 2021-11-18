"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var marcaTSchema = new _mongoose.Schema({
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

var _default = (0, _mongoose.model)('MarcaT', marcaTSchema);

exports.default = _default;
//# sourceMappingURL=MarcaTasaciones.js.map