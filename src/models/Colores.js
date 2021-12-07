import { Schema, model } from 'mongoose'

const colorSchema = new Schema({
    name: { type: String },
    status: { type: String },
    estado: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Colores', colorSchema);