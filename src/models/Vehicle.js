import { Schema, model } from 'mongoose';
import { connectSCIDB } from "../config/database";

const vehicleSchema = new Schema({
    codigo_interno: { type: String },
    chasis: { type: Schema.Types.ObjectId, ref: 'Chasis' },
    model: { type: Schema.Types.ObjectId, ref: 'ModeloT' },
    cod_tdp: { type: String, unique: true },
    version: { type: String },
    estado: { type: Boolean, default: true },
    empleado: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('Vehicle', vehicleSchema);