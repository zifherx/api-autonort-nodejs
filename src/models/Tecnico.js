import { Schema, model } from 'mongoose'

const tecnicoSchema = new Schema({
    name: { type: String },
    document: { type: String },
    cellphone: { type: String },
    email: { type: String },
    sucursal: { type: String },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Tecnico', tecnicoSchema);