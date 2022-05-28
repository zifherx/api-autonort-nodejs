"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var statusFileSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  value: {
    type: Number
  },
  status: {
    type: Boolean
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('StatusFile', statusFileSchema);

exports.default = _default;
//# sourceMappingURL=StatusFile.js.map