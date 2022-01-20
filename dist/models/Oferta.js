"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var ofertaSchema = new _mongoose.Schema({
  codigo: {
    type: String,
    required: true
  },
  tipo: {
    type: String
  },
  opcion: {
    type: Number
  },
  descripcion: {
    type: String
  },
  moneda: {
    type: Number,
    enum: [1, 2]
  },
  monto: {
    type: Number,
    min: 0
  },
  cantidad: {
    type: Number,
    default: 0
  },
  accesorio: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Accesorio'
  }],
  estado: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Oferta', ofertaSchema);

exports.default = _default;
//# sourceMappingURL=Oferta.js.map