"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var submoduloSchema = new _mongoose.Schema({
  moduloG: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModuloG'
  },
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

var _default = (0, _mongoose.model)('SubmoduloG', submoduloSchema);

exports.default = _default;
//# sourceMappingURL=SubmoduloG.js.map