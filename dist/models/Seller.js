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
    type: String,
    default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Sucursal'
  },
  marca: {
    type: String
  },
  marcaE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'MarcaT'
  },
  estatus: {
    type: Boolean,
    default: true
  },
  estado: {
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