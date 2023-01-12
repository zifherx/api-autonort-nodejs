import { Schema, model } from 'mongoose';
import { connectSCIDB } from "../config/database";

const colorSchema = new Schema({
    name: { type: String },
    codigo_toyota: { type: String },
    hex: { type: String },
    estado: { type: Boolean, default: false }
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('Colores', colorSchema);