import { Schema, model } from 'mongoose'

const recordSchema = new Schema({
    //Inmatriculados
    fecha_recepcion: { type: Date },
    hora_recepcion: { type: String },
    //Expediente
    sales: { ref: "Sale", type: Schema.Types.ObjectId },
    //Regisros Publicos
    fecha_ingreso_file: { type: Date },
    hora_ingreso_file: { type: String },
    num_titulo: { type: String },
    codigo_verificacion: { type: String },
    status_tarjeta: { type: String },
    observaciones: { type: String },
    num_placa: { type: String },
    fecha_entrega_file: { type: Date },
    //AAP
    fecha_tramite_placa: { type: Date },
    status_placa: { type: String },
    fecha_entrega_placa: { type: Date },
    //Cliente
    fecha_entrega_cliente: { type: Date }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Record', recordSchema);