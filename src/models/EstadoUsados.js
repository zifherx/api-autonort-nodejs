import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const estadoUsadosSchema = new Schema({
    name: { type: String },
    value: { type: Number },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('EstadoUsados', estadoUsadosSchema);