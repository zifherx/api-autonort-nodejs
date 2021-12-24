import { Schema, model } from 'mongoose'

const aserviciosSchema = new Schema({
    name: { type: String },
    document: { type: String },
    cellphone: { type: String },
    email: { type: String },
    avatar: { type: String },
    sucursal: { type: String },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('AServicios', aserviciosSchema);