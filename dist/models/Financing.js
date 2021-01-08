"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var finanfincSchema = new _mongoose.Schema({
  type: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Financing', finanfincSchema);

exports.default = _default;
//# sourceMappingURL=Financing.js.map