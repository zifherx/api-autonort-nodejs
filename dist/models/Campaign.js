"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var campaignSchema = new _mongoose.Schema({
  codigo: {
    type: String,
    max: 11
  },
  name: {
    type: String
  },
  modelo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModeloT'
  },
  version: [{
    type: String
  }],
  type: {
    type: String
  },
  bono: {
    type: Number
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  estado: {
    type: Boolean,
    default: false
  },
  descripcion: {
    type: String
  },
  //No usar
  forCar: {
    type: String
  },
  //No usar
  status: {
    type: String
  },
  //No usar
  createdBy: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Campaign', campaignSchema);

exports.default = _default;
//# sourceMappingURL=Campaign.js.map