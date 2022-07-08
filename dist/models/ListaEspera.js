"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var listaEsperaSchema = new _mongoose.Schema({
  cod_interno: {
    type: String
  },
  sucursal: {
    type: String
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Sucursal"
  },
  vehiculo: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Vehicle"
  },
  colorE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Colores"
  }],
  cantidad: {
    type: Number
  },
  orden: {
    type: Number
  },
  estado: {
    type: String
  },
  estadoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'EstadoListaEspera'
  },
  cliente: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  anio_primer_abono: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Anio"
  },
  mes_primer_abono: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Mes"
  },
  grupo_abonos: [{
    fecha_abono: {
      type: Date
    },
    monto_abono: {
      type: Number,
      default: 0
    }
  }],
  precio_venta_final: {
    type: Number
  },
  tipo_venta: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Financiamiento"
  },
  financiera: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Banco",
    default: null
  },
  plan_maf: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "PlanMAF",
    default: null
  },
  fecha_carta_aprobacion: {
    type: Date
  },
  inicial: {
    type: Number,
    default: 0
  },
  solicitudMAF: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Maf",
    default: null
  },
  cuenta_epdp: {
    type: Boolean,
    default: false
  },
  avance_pago_contado: {
    type: Number,
    default: 0
  },
  avance_pago_credito: {
    type: Number,
    default: 0
  },
  cumple_politica: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  updatedBy: [{
    who: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    when: {
      type: Date
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("ListaEspera", listaEsperaSchema);

exports.default = _default;
//# sourceMappingURL=ListaEspera.js.map