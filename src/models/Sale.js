import { Schema, model } from 'mongoose'

const saleSchema = new Schema({
    //Vendedor
    vendedor: { ref: 'Seller', type: Schema.Types.ObjectId, allowEmpty: true },
    //Cliente
    cliente: { ref: 'Customer', type: Schema.Types.ObjectId, allowEmpty: true },
    //Vehiculo
    auto: { ref: 'Vehicle', type: Schema.Types.ObjectId },
    serie_tdp: { type: String, allowEmpty: true },
    color: { type: String },
    precio: { type: Number },
    anio_fabricacion: { type: String },
    anio_modelo: { type: String },
    ubicacion_vehiculo: { type: String },
    fecha_entrega: { type: Date },
    estatus_vehiculo: { type: String },
    //Financiamiento
    tipo_financiamiento: { type: String },
    entidad_bancaria: { type: String },
    sustento: { type: String },
    fecha_sustento: { type: Date },
    monto_aprobado: { type: Number },
    oficina: { type: String },
    ejecutivo: { type: String },
    montoAdelanto1: { type: Number },
    fechaAdelanto1: { type: Date },
    montoAdelanto2: { type: Number },
    fechaAdelanto2: { type: Date },
    montoAdelanto3: { type: Number },
    fechaAdelanto3: { type: Date },
    montoAdelanto4: { type: Number },
    fechaAdelanto4: { type: Date },
    montoAdelanto5: { type: Number },
    fechaAdelanto5: { type: Date },
    montoAdelanto6: { type: Number },
    fechaAdelanto6: { type: Date },
    montoAdelanto7: { type: Number },
    fechaAdelanto7: { type: Date },
    montoAdelanto8: { type: Number },
    fechaAdelanto8: { type: Date },
    //Campaña
    campanias: [{ ref: 'Campaign', type: Schema.Types.ObjectId }],
    adicional: [{ ref: 'Adicional', type: Schema.Types.ObjectId }],
    descuento_autonort: { type: Number },
    observacion_adv: { type: String },
    //Accesorio
    accesorios: [{ ref: 'Props', type: Schema.Types.ObjectId }],
    condicion_accesorios: { type: String },
    //Facturacion TDP
    fecha_facturacion_tdp: { type: Date },
    estatus_facturacion: { type: String },
    //Venta
    tipo_operacion: { type: String },
    tipo_comprobante: { type: String },
    nro_comprobante: { type: String },
    fecha_comprobante: { type: String },
    estatus_venta: { type: String },
    sucursal_venta: { type: String },
    fecha_cancelacion: { type: Date },
    //Empleado
    empleado: { ref: 'User', type: Schema.Types.ObjectId },
    //Está en Tramite
    pasoaTramite: {type: Number, default: 0}
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sale', saleSchema);