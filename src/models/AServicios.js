import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const aserviciosSchema = new Schema({
    name: { type: String },
    document: { type: String },
    cellphone: { type: String },
    email: { type: String },
    avatar: { type: String },
    sucursal: { type: String },
    sucursalE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
    status: { type: Boolean, default: true },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,   
    versionKey: false
});

export default connectSCIDB.model('AServicios', aserviciosSchema);