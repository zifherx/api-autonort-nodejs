import { Schema, model } from 'mongoose'

const customerSchema = new Schema({
    name: { type: String },
    typeDocument: { type: Number, min: 0, max: 2 },
    tipoDocumento: { ref: 'TipoDocumento' ,type: Schema.Types.ObjectId}, //Actualizado
    document: { type: String },
    representanteLegal: { type: String },
    documentoRepresentante: { type: String },
    cellphone: { type: String },
    email: { type: String },
    address: { type: String },
    empleado: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Customer', customerSchema);