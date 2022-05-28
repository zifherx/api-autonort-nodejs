import { Schema, model } from 'mongoose'

const ubicacionSchema = new Schema({
    name: { type: String },
    valor: { type: Number},
    status: { type: String },
    estado: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Ubicacion', ubicacionSchema);