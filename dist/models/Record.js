"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var recordSchema = new _mongoose.Schema({
  //Inmatriculados
  fecha_recepcion: {
    type: Date
  },
  hora_recepcion: {
    type: String
  },
  statusFile: {
    type: String
  },
  fecha_devolucion_vendedor: {
    type: Date
  },
  hora_devolucion_vendedor: {
    type: String
  },
  observaciones_file: {
    type: String
  },
  //Expediente
  sales: {
    ref: "Sale",
    type: _mongoose.Schema.Types.ObjectId
  },
  //Regisros Publicos
  fecha_ingreso_file: {
    type: Date
  },
  hora_ingreso_file: {
    type: String
  },
  num_titulo: {
    type: String
  },
  codigo_verificacion: {
    type: String
  },
  status_tarjeta: {
    type: String
  },
  observaciones_registros: {
    type: String
  },
  num_placa: {
    type: String
  },
  fecha_entrega_file_recepcion: {
    type: Date
  },
  //AAP
  fecha_tramite_placa: {
    type: Date
  },
  status_placa: {
    type: String
  },
  fecha_entrega_placa_recepcion: {
    type: Date
  },
  //Cliente
  fecha_entrega_cliente: {
    type: Date
  },
  //Empleado
  empleado: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  },
  //Entrega
  pasoaEntrega: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Record', recordSchema);

exports.default = _default;
//# sourceMappingURL=Record.js.map