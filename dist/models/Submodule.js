"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var submoduleSchema = new _mongoose.Schema({
  submodule: {
    type: String
  },
  description: {
    type: String
  },
  icon: {
    type: String
  },
  route: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Submodule', submoduleSchema);

exports.default = _default;
//# sourceMappingURL=Submodule.js.map