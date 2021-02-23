"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var recordSchema = new _mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now
  },
  estatusContable: {
    type: String
  },
  sales: {
    ref: "Sale",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Record', recordSchema);

exports.default = _default;
//# sourceMappingURL=Record.js.map