"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var saleSchema = new _mongoose.Schema({
  fecha: {
    type: Date
  },
  nroComprobante: {
    type: String,
    unique: true
  },
  seller: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId
  },
  vehicle: {
    ref: "Vehicle",
    type: _mongoose.Schema.Types.ObjectId
  },
  financing: {
    ref: "Financing",
    type: _mongoose.Schema.Types.ObjectId
  },
  entity: {
    type: String
  },
  support: {
    type: String
  },
  office: {
    type: String
  },
  account_executive: {
    type: String
  },
  situacion: {
    type: String
  },
  customer: {
    ref: "Customer",
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Sale', saleSchema);

exports.default = _default;
//# sourceMappingURL=Sale.js.map