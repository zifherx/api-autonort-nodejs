import { Schema, model } from 'mongoose'

const seguroSchema = new Schema({
    //Cliente
    cliente: { ref: 'Customer', type: Schema.Types.ObjectId, default: null },
    //Venta
    company: { type: String },
    sucursal: { type: String },
    fecha_registro: { type: Date },
    mes: { type: Number },
    status: { type: String },
    isIngresado: { type: Boolean, default: true },
    fechaRegistro: { type: Date, default: new Date() },
    isProceso: { type: Boolean, default: false },
    fechaProceso: { type: Date },
    isEmitido: { type: Boolean, default: false },
    fechaEmision: { type: Date },
    forma_pago: { type: String },
    cuotas: { type: Number, min: 1, max: 12 },
    fecha_emision: { type: Date },
    tipo_venta: { type: String },
    area_venta: { type: String },
    poliza: { type: String },
    vendedor: { ref: 'Seller', type: Schema.Types.ObjectId },
    //Vehículo
    placa: { type: String },
    chasis: { type: String },
    motor: { type: String },
    marca: { type: String },
    modelo: { type: String },
    version: { type: String },
    anio: { type: String },
    uso: { type: String },
    //Aseguradora
    asesor: { type: String },
    endoso: { type: String },
    entidad: { type: String },
    inicio_vigencia: { type: Date },
    fin_vigencia: { type: Date },
    suma_asegurada: { type: Number },
    aseguradora: { type: String },
    comision_seguro: { type: Number },
    comision_asesor: { type: Number },
    //Empleado
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Seguro', seguroSchema);