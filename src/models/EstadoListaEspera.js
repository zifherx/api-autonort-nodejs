import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const estadoSchema = new Schema({
    name: { type: String },
    valor: { type: Number },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('EstadoListaEspera', estadoSchema);