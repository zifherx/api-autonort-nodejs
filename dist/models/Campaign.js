"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var campaignSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  descripcion: {
    type: String
  },
  forCar: {
    type: String
  },
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
  status: {
    type: String
  },
  empleado: {
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