"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var vehicleSchema = new _mongoose.Schema({
  brand: {
    type: String
  },
  cod_tdp: {
    type: String,
    unique: true
  },
  serie_tdp: {
    type: String,
    unique: true
  },
  category: {
    type: String
  },
  model: {
    type: String
  },
  colour: {
    type: String
  },
  manufacturing_year: {
    type: Date
  },
  model_year: {
    type: Date
  },
  branch_office: {
    type: String
  },
  location: {
    type: String
  },
  price: {
    type: Number
  },
  imgURL: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Vehicle', vehicleSchema);

exports.default = _default;
//# sourceMappingURL=Vehicle.js.map