import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const conexoSchema = new Schema({
    name: { type: String },
    email: { type: String },
    area: { type: String },
    sucursal: { type: String },
    areaE: { type: Schema.Types.ObjectId, ref: 'Area'},
    sucursalE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
    encargadoDe: [{ type: String }],
    estado: { type: Boolean, default: true },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('Conexos', conexoSchema);