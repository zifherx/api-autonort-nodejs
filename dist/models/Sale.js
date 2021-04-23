"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var saleSchema = new _mongoose.Schema({
  //Vendedor
  vendedor: {
    ref: 'Seller',
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  //Cliente
  cliente: {
    ref: 'Customer',
    type: _mongoose.Schema.Types.ObjectId,
    allowEmpty: true
  },
  //Vehiculo
  auto: {
    ref: 'Vehicle',
    type: _mongoose.Schema.Types.ObjectId
  },
  serie_tdp: {
    type: String,
    allowEmpty: true
  },
  color: {
    type: String
  },
  precio: {
    type: Number
  },
  anio_fabricacion: {
    type: String
  },
  anio_modelo: {
    type: String
  },
  ubicacion_vehiculo: {
    type: String
  },
  fecha_entrega: {
    type: Date
  },
  estatus_vehiculo: {
    type: String
  },
  //Financiamiento
  tipo_financiamiento: {
    type: String
  },
  entidad_bancaria: {
    type: String
  },
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
    ref: 'Campaign',
    type: _mongoose.Schema.Types.ObjectId
  }],
  adicional: [{
    ref: 'Adicional',
    type: _mongoose.Schema.Types.ObjectId
  }],
  descuento_autonort: {
    type: Number
  },
  observacion_adv: {
    type: String
  },
  //Accesorio
  accesorios: [{
    ref: 'Props',
    type: _mongoose.Schema.Types.ObjectId
  }],
  condicion_accesorios: {
    type: String
  },
  //Facturacion TDP
  fecha_facturacion_tdp: {
    type: Date
  },
  estatus_facturacion: {
    type: String
  },
  //Venta
  tipo_operacion: {
    type: String
  },
  tipo_comprobante: {
    type: String
  },
  nro_comprobante: {
    type: String
  },
  fecha_comprobante: {
    type: String
  },
  estatus_venta: {
    type: String
  },
  sucursal_venta: {
    type: String
  },
  fecha_cancelacion: {
    type: Date
  },
  //Empleado
  empleado: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Sale', saleSchema);

exports.default = _default;
//# sourceMappingURL=Sale.js.map