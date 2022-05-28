"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var menuSchema = new _mongoose.Schema({
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

var _default = (0, _mongoose.model)('MenuG', menuSchema);

exports.default = _default;
//# sourceMappingURL=MenuG.js.map