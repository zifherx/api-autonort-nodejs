import { Schema, model } from 'mongoose';
import { connectSCIDB } from "../config/database";

const tipoComprobanteSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('TipoComprobante', tipoComprobanteSchema);