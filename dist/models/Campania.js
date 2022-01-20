"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var campaniaSchema = new _mongoose.Schema({
  codigo: {
    type: String,
    max: 11,
    required: true,
    unique: true
  },
  descripcion: {
    type: String
  },
  tipo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'TipoCampania'
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  //Modelos
  auto: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  }],
  ofertas: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Oferta '
  }],
  estado: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('CampaniaN', campaniaSchema);

exports.default = _default;
//# sourceMappingURL=Campania.js.map