"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var rechazoSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  area: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Area',
    default: null
  },
  estado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('MotivoRechazo', rechazoSchema);

exports.default = _default;
//# sourceMappingURL=MotivoRechazo.js.map