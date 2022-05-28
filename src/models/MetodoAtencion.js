import { Schema, model } from 'mongoose'

const metodoSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('MetodoAtencion', metodoSchema);