"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var tasadorSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  document: {
    type: String
  },
  sucursal: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Tasador', tasadorSchema);

exports.default = _default;
//# sourceMappingURL=Tasador.js.map