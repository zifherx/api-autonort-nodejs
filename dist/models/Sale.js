"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var _Schema;

var saleSchema = new _mongoose.Schema((_Schema = {
  //Vendedor
  vendedor: {
    ref: "Seller",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  //Cliente
  cliente: {
    ref: "Customer",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  //Vehiculo
  auto: {
    ref: "Vehicle",
    type: _mongoose.Schema.Types.ObjectId,
    default: null
  },
  serie_tdp: {
    type: String,
    default: ""
  },
  color: {
    type: String
  },
  //actualizado
  precio: {
    type: Number,
    default: 0
  },
  anio_fabricacion: {
    type: String
  },
  //actualizado
  anio_modelo: {
    type: String
  },
  //actualizado
  ubicacion_vehiculo: {
    type: String
  },
  //actualizado
  fecha_ciguena: {
    type: Date
  },
  fecha_entrega: {
    type: Date
  },
  estatus_vehiculo: {
    type: String
  },
  //actualizado
  //Nuevos Campos ----------------------------------------------------------------------
  colorE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Colores",
    default: null
  },
  anioFabricacionE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Anio",
    default: null
  },
  anioModeloE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Anio",
    default: null
  },
  ubicacionVehiculoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Ubicacion",
    default: null
  },
  estadoVehiculoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Condicion",
    default: null
  },
  financiamientoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Financiamiento",
    default: null
  },
  bancoE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Banco",
    default: null
  },
  solicitudMAF: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Maf",
    default: null
  },
  adelantosE: [{
    fechaAdelanto: {
      type: Date
    },
    importeAdelanto: {
      type: Number
    }
  }],
  campaniasTDPE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Campania'
  }],
  ofertaTDPE: [{
    type: String
  }],
  campaniasMafE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Campania'
  }],
  ofertaMafE: [{
    type: String
  }],
  isToyotaValue: {
    type: Boolean,
    default: false
  },
  arrayToyotaValues: [{
    type: String
  }],
  tipoOperacionE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Operacion',
    default: null
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  tipoComprobanteE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'TipoComprobante',
    default: null
  },
  sucursalE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Sucursal",
    default: null
  },
  estadoVentaE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Situacion',
    default: null
  },
  estadoFacturacionE: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'StatusFacturacion',
    default: null
  },
  accesoriosE: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'AccesorioE'
  }],
  pasoTramiteE: {
    type: Boolean,
    default: false
  },
  //------------------------------------------------------------------------------------
  //Financiamiento
  tipo_financiamiento: {
    type: String
  },
  //actualizado
  entidad_bancaria: {
    type: String
  },
  //actualizado
  sustento: {
    type: String
  },
  fecha_sustento: {
    type: Date
  },
  monto_aprobado: {
    type: Number
  },
  oficina: {
    type: String
  },
  ejecutivo: {
    type: String
  },
  montoAdelanto1: {
    type: Number
  },
  fechaAdelanto1: {
    type: Date
  },
  montoAdelanto2: {
    type: Number
  },
  fechaAdelanto2: {
    type: Date
  },
  montoAdelanto3: {
    type: Number
  },
  fechaAdelanto3: {
    type: Date
  },
  montoAdelanto4: {
    type: Number
  },
  fechaAdelanto4: {
    type: Date
  },
  montoAdelanto5: {
    type: Number
  },
  fechaAdelanto5: {
    type: Date
  },
  montoAdelanto6: {
    type: Number
  },
  fechaAdelanto6: {
    type: Date
  },
  montoAdelanto7: {
    type: Number
  },
  fechaAdelanto7: {
    type: Date
  },
  montoAdelanto8: {
    type: Number
  },
  fechaAdelanto8: {
    type: Date
  },
  //Campaña
  campanias: [{
    ref: "Campaign",
    type: _mongoose.Schema.Types.ObjectId
  }],
  //actualizado
  adicional: [{
    ref: "Adicional",
    type: _mongoose.Schema.Types.ObjectId
  }],
  //actualizado
  descuento_autonort: {
    type: Number,
    default: 0
  },
  acuerdoTDP: {
    type: Number,
    default: 0
  },
  observacion_adv: {
    type: String
  },
  //Accesorio
  accesorios: [{
    ref: "Props",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, (0, _defineProperty2.default)(_Schema, "accesoriosE", [{
  ref: 'AccesorioE',
  type: _mongoose.Schema.Types.ObjectId
}]), (0, _defineProperty2.default)(_Schema, "condicion_accesorios", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "condicionAccesorioE", {
  ref: 'CondicionAccesorio',
  type: _mongoose.Schema.Types.ObjectId
}), (0, _defineProperty2.default)(_Schema, "fecha_facturacion_tdp", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "estatus_facturacion", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "monto_facturado", {
  type: Number
}), (0, _defineProperty2.default)(_Schema, "tipo_operacion", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "tipo_comprobante", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "nro_comprobante", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "fecha_comprobante", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "estatus_venta", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "sucursal_venta", {
  type: String
}), (0, _defineProperty2.default)(_Schema, "fecha_cancelacion", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "empleado", {
  ref: "User",
  type: _mongoose.Schema.Types.ObjectId
}), (0, _defineProperty2.default)(_Schema, "pasoaTramite", {
  type: Number,
  default: 0
}), (0, _defineProperty2.default)(_Schema, "isReportado", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaReporte", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "mesReportado", {
  type: Number
}), (0, _defineProperty2.default)(_Schema, "isCreadoS", {
  type: Boolean,
  default: true
}), (0, _defineProperty2.default)(_Schema, "fechaCreacionS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isLibreS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaLibreS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isDevolucionS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaDevolucionS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isCreditoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaCreditoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isTestDrive", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaTestDriveS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isBloqueadoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaBloqueadoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isStandByS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaStandByS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isReservadoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaReservadoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isReservadoCS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaReservadoCS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isReservadoLS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaReservadoLS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isEsperaS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaEsperaS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isFacturadoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaFacturadoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isAnticipoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaAnticipoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isDesembolsarS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaDesembolsarS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isExhibicionS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaExhibicionS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isCanceladoS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaCanceladoS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isCanceladoPTS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaCanceladoPTS", {
  type: Date
}), (0, _defineProperty2.default)(_Schema, "isEPDPS", {
  type: Boolean,
  default: false
}), (0, _defineProperty2.default)(_Schema, "fechaEPDPS", {
  type: Date
}), _Schema), {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Sale", saleSchema);

exports.default = _default;
//# sourceMappingURL=Sale.js.map