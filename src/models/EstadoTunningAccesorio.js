import { Schema, model } from 'mongoose';
import { connectSCIDB } from '../config/database';

const estadoSchema = new Schema({
    name: { type: String },
    valor: { type: Number, default: 0 },
    estado: { type: Boolean, default: true },
},{
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('EstadoTunningAccesorio', estadoSchema);