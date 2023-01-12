import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const estadoSeguroSchema = new Schema({
    name: { type: String },
    value: { type: Number },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('EstadoSeguro', estadoSeguroSchema);