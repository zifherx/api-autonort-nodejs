import { Schema, model } from 'mongoose'

const vehicleSchema = new Schema({
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

export default model('Vehicle', vehicleSchema);