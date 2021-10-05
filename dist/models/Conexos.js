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
  status: {
    type: String
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