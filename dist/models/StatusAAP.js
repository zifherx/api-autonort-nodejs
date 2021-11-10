"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var statusAAP = new _mongoose.Schema({
  name: {
    type: String
  },
  value: {
    type: Number
  },
  status: {
    type: Boolean
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('StatusAAP', statusAAP);

exports.default = _default;
//# sourceMappingURL=StatusAAP.js.map