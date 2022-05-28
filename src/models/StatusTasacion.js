import { Schema, model } from 'mongoose'

const statusTasacion = new Schema({
    name: { type: String },
    value: { type: Number },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusTasacion', statusTasacion);