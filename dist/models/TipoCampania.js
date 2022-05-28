"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tipoCampaniaSchema = new _mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('TipoCampania', tipoCampaniaSchema);

exports.default = _default;
//# sourceMappingURL=TipoCampania.js.map