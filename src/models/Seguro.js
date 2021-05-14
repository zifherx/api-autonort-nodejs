import { Schema, model } from 'mongoose'

const seguroSchema = new Schema({
    //Cliente
    name: { type: String, required: true },
    document: { type: String, required: true },
    telefono: { type: String },
    //Venta
    company: { type: String, default: 'Autonort Nor' },
    sucursal: { type: String },
    fecha_registro: {type: Date },
    mes: { type: String },
    status: { type: String },
    forma_pago: { type: String },
    cuotas: { type: Number, min: 1, max: 12 },
    fecha_emision: { type: Date },
    tipo_venta: { type: String },
    area_venta: { type: String, default: 'Vehículo' },
    poliza: { type: String },
    vendedor: { type: String },
    //Vehículo
    placa: { type: String },
    chasis: { type: String },
    motor: { type: String },
    marca: { type: String },
    modelo: { type: String },
    anio: { type: String },
    uso: { type: String },
    //Aseguradora
    asesor: { type: String },
    endoso: { type: String },
    inicio_vigencia: { type: Date },
    fin_vigencia: { type: Date },
    suma_asegurada: { type: Number },
    aseguradora: { type: String },
    comision_seguro: { type: Number },
    comision_asesor: { type: Number },  
    //Empleado
    empleado: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Seguro', seguroSchema);