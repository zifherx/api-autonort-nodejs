"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var logFileSchema = new _mongoose.Schema({
  cod_interno: {
    type: Number,
    unique: true
  },
  file_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sale',
    default: null
  },
  modifiedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  action: {
    type: String
  },
  timeAt: {
    type: Date
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('LogFile', logFileSchema);

exports.default = _default;
//# sourceMappingURL=LogFile.js.map