import { Schema, model } from 'mongoose'

const tipoComprobanteSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default model('TipoComprobante', tipoComprobanteSchema);