"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var sellerSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  sucursal: {
    type: String
  },
  marca: {
    type: String
  },
  document: {
    type: String
  },
  telefono: {
    type: String
  },
  email: {
    type: String
  },
  avatar: {
    type: String
  },
  estatus: {
    type: Boolean,
    default: true
  },
  createdBy: {
    ref: "User",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Seller", sellerSchema);

exports.default = _default;
//# sourceMappingURL=Seller.js.map