import { Schema, model } from 'mongoose'

const adelantoSchema = new Schema({
    nombre: { type: String },
    monto: { type: Number }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Financing', adelantoSchema);