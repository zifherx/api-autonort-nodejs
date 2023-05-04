import { Schema, model } from 'mongoose';
import { connectSCIDB } from '../config/database';

const estadoSchema = new Schema({
    name: { type: String, unique: true },
    description: { type: String },
    valor: { type: Number },
    estado: { type: Boolean, default: true }
},{
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('EstadoKaizen', estadoSchema);
