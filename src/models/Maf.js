import { Schema, model, Types } from 'mongoose'

const mafSchema = new Schema({
    //Solicitud a Evaluacion
    nro_solicitud: { type: String },
    fecha_ingreso: { type: Date },
    hora_ingreso: { type: String },
    sucursal: { type: String },
    customer: { ref: 'Customer', type: Types.ObjectId },
    estado_civil: { type: String },
    lugar_trabajo: { type: String },
    observaciones_ingreso: { type: String },
    //Conyuge
    conyuge: { type: String },
    document_conyuge: { type: String },
    fecha_nacimiento_conyuge: { type: Date },
    //Sueldo
    ingreso_promedio: { type: Number, min: 0 },
    cuota_inicial: { type: Number, min: 0 },
    seller: { ref: 'Seller', type: Types.ObjectId },
    car: { ref: 'Vehicle', type: Types.ObjectId },
    anio_fab: { type: Number },
    anio_mod: { type: Number },
    pvp: { type: Number, min: 0 },
    plan: { type: String },
    tipo_uso: { type: String },
    evidencias: [{ type: String }],
    //Adicionales
    isReingresado: { type: Boolean, default: false },
    files_adicionales: [{ type: String }],
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
    //Aprobadores
    userCreator: { type: Types.ObjectId, ref: 'User' },
    userApprove: { type: Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
    versionKey: false
})

export default model('Maf', mafSchema)