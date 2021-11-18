import { Schema, model } from 'mongoose'

const jefaturaSchema = new Schema({
    name: { type: String },
    email: { type: String },
    area: { type: String, uppercase: true },
    marca: { type: String },
    sucursal: { type: String },
    status: { type: Boolean, default: true },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('JefaturaVentas', jefaturaSchema);