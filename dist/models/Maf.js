"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var _Schema;

var mafSchema = new _mongoose.Schema((_Schema = {
  //Solicitud a Evaluacion
  nro_solicitud: {
    type: String
  },
  fecha_ingreso: {
    type: Date
  },
  hora_ingreso: {
    type: String
  },
  sucursal: {
    type: String
  },
  // actualizado
  sucursalE: {
    type: _mongoose.Types.ObjectId,
    ref: 'Sucursal'
  },
  customer: {
    ref: 'Customer',
    type: _mongoose.Types.ObjectId
  },
  fecha_nacimiento_titular: {
    type: Date
  },
  estado_civil: {
    type: String
  },
  lugar_trabajo: {
    type: String
  },
  observaciones_ingreso: {
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
  // actualizado
  anioFabE: {
    type: _mongoose.Types.ObjectId,
    ref: 'Anio'
  },
  anio_mod: {
    type: Number
  },
  // actualizado
  anioModE: {
    type: _mongoose.Types.ObjectId,
    ref: 'Anio'
  },
  pvp: {
    type: Number,
    min: 0
  },
  plan: {
    type: String
  },
  // actualizado
  planMAF: {
    type: _mongoose.Types.ObjectId,
    ref: 'PlanMAF'
  },
  tipo_uso: {
    type: String
  },
  // actualizado
  tipoUsoE: {
    type: _mongoose.Types.ObjectId,
    ref: 'TipoUso'
  },
  evidencias: [{
    type: String
  }],
  //Adicionales
  isReingresado: {
    type: Boolean,
    default: false
  },
  files_adicionales: [{
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
  cronograma_pagos: {
    type: String
  },
  // actualizado
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
  // actualizado
  estadoSolicitudMAF: {
    type: _mongoose.Types.ObjectId,
    ref: 'StatusMafRequest'
  },
  //Logs
  isIngresada: {
    type: Boolean,
    default: true
  },
  fechaIngresoSolicitud: {
    type: Date
  }
}, (0, _defineProperty2.default)(_Schema, "isReingresado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaReingreso", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isEvaluacion", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaEvaluacion", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isObservado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaObservado", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isRechazado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaRechazado", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isAprobado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaAprobado", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isRevisorio", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaRevisorio", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isDesembolsar", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaDesembolsar", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isActivado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaActivado", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "pasoaHot", {
  type: Number,
  min: 0,
  max: 3,
  default: 0
}), (0, _defineProperty2.default)(_Schema, "estadoAprobacionJefatura", {
  type: _mongoose.Types.ObjectId,
  ref: 'StatusJefaturaMaf',
  default: null
}), (0, _defineProperty2.default)(_Schema, "isHot", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaHot", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isProxMes", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaProxMes", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isNoVa", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaNoVa", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "tercer_status_request", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "userCreator", {
  type: _mongoose.Types.ObjectId,
  ref: 'User',
  default: null
}), (0, _defineProperty2.default)(_Schema, "userApprove", {
  type: _mongoose.Types.ObjectId,
  ref: 'User',
  default: null
}), (0, _defineProperty2.default)(_Schema, "createdBy", {
  type: _mongoose.Types.ObjectId,
  ref: 'User'
}), _Schema), {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Maf', mafSchema);

exports.default = _default;
//# sourceMappingURL=Maf.js.map