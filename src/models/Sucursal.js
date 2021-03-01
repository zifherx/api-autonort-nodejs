import { Schema, model } from 'mongoose'

const sucursalSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sucursal', sucursalSchema);