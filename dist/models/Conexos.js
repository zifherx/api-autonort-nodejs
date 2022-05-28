"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var conexoSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  area: {
    type: String
  },
  sucursal: {
    type: String
  },
  areaE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Area'
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  encargadoDe: [{
    type: String
  }],
  estado: {
    type: Boolean,
    default: true
  },
  createdBy: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Conexos', conexoSchema);

exports.default = _default;
//# sourceMappingURL=Conexos.js.map