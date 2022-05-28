"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ROLES = void 0;

var _mongoose = require("mongoose");

var roleSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var ROLES = ["Aministrador", "Usuario", "Vendedor", "Jefe-Ventas", "Jefe-ADV"];
exports.ROLES = ROLES;

var _default = (0, _mongoose.model)('Role', roleSchema);

exports.default = _default;
//# sourceMappingURL=Role.js.map