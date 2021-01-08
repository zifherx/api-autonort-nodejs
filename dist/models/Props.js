"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var propsSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  forCar: {
    type: String
  },
  cantidad: {
    type: Number
  },
  precio: {
    type: Number
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Props', propsSchema);

exports.default = _default;
//# sourceMappingURL=Props.js.map