"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var customerSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  document: {
    type: String
  },
  cellphone: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Customer', customerSchema);

exports.default = _default;
//# sourceMappingURL=Customer.js.map