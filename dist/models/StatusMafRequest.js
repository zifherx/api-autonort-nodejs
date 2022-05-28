"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var statusMafRequest = new _mongoose.Schema({
  name: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  },
  value: {
    type: Number,
    min: 0,
    max: 100
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('StatusMafRequest', statusMafRequest);

exports.default = _default;
//# sourceMappingURL=StatusMafRequest.js.map