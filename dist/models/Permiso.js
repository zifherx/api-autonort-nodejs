"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var permisoSchema = new _mongoose.Schema({
  cod_interno: {
    type: String,
    unique: true,
    required: true
  },
  submoduloG: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'SubmoduloG'
  },
  rolesPermitidos: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }],
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Permiso', permisoSchema);

exports.default = _default;
//# sourceMappingURL=Permiso.js.map