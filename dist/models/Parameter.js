"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var parameterSchema = new _mongoose.Schema({
  codigo_interno: {
    type: String
  },
  fecha_registro: {
    type: Date
  },
  area: {
    type: String
  },
  areaE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Area'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Parameter', parameterSchema);

exports.default = _default;
//# sourceMappingURL=Parameter.js.map