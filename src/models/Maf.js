import { Schema, model, Types } from 'mongoose'

const mafSchema = new Schema({
    //Solicitud a Evaluacion
    nro_solicitud: { type: String },
    fecha_ingreso: { type: Date },
    sucursal: { type: String },
    customer: { ref: 'Customer', type: Types.ObjectId },
    seller: { ref: 'Seller', type: Types.ObjectId },
    car: { ref: 'Vehicle', type: Types.ObjectId },
    plan: { type: String },
    tipo_uso: { type: String },
    evidencias: [{ type: String }],
    //Contestacion
    fecha_respuesta: { type: Date },
    fecha_aprobacion: { type: Date },
    carta_aprobacion: { type: Boolean, default: false },
    carta_evidencia: { type: String },
    observacion: { type: String },
    motivo: { type: String },
    //Estado de Solicitud para el crédito
    primer_status_request: { type: String },
    //Solitud Aprobada por Jefatura
    pasoaHot: { type: Number, min: 0, max: 3, default: 0 },
    //Estatus que cambia por asesor MAF
    tercer_status_request: { type: String },
}, {
    timestamps: true,
    versionKey: false
})

export default model('Maf', mafSchema)