"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var mafSchema = new _mongoose.Schema({
  //Solicitud a Evaluacion
  nro_solicitud: {
    type: String
  },
  fecha_ingreso: {
    type: Date
  },
  sucursal: {
    type: String
  },
  customer: {
    ref: 'Customer',
    type: _mongoose.Types.ObjectId
  },
  estado_civil: {
    type: String
  },
  lugar_trabajo: {
    type: String
  },
  //Conyuge
  conyuge: {
    type: String
  },
  document_conyuge: {
    type: String
  },
  fecha_nacimiento_conyuge: {
    type: Date
  },
  //Sueldo
  ingreso_promedio: {
    type: Number,
    min: 0
  },
  cuota_inicial: {
    type: Number,
    min: 0
  },
  seller: {
    ref: 'Seller',
    type: _mongoose.Types.ObjectId
  },
  car: {
    ref: 'Vehicle',
    type: _mongoose.Types.ObjectId
  },
  anio_fab: {
    type: Number
  },
  anio_mod: {
    type: Number
  },
  pvp: {
    type: Number,
    min: 0
  },
  plan: {
    type: String
  },
  tipo_uso: {
    type: String
  },
  evidencias: [{
    type: String
  }],
  //Contestacion
  fecha_respuesta: {
    type: Date
  },
  fecha_aprobacion: {
    type: Date
  },
  carta_aprobacion: {
    type: Boolean,
    default: false
  },
  carta_evidencia: {
    type: String
  },
  observacion: {
    type: String
  },
  motivo: {
    type: String
  },
  //Estado de Solicitud para el crédito
  primer_status_request: {
    type: String
  },
  //Solitud Aprobada por Jefatura
  pasoaHot: {
    type: Number,
    min: 0,
    max: 3,
    default: 0
  },
  //Estatus que cambia por asesor MAF
  tercer_status_request: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Maf', mafSchema);

exports.default = _default;
//# sourceMappingURL=Maf.js.map