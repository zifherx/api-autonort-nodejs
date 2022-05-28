"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var campaniaSchema = new _mongoose.Schema({
  //Campania
  cod_interno: {
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
  //Vehículo
  model: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'ModeloT'
  },
  versiones: [{
    type: String
  }],
  //Oferta
  oferta: [{
    tipo: {
      type: String,
      uppercase: true,
      trim: true
    },
    bono: {
      type: Number,
      default: 0
    },
    descripcion: {
      type: String
    }
  }],
  estado: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Campania', campaniaSchema);

exports.default = _default;
//# sourceMappingURL=Campania.js.map