import { Schema, model } from 'mongoose'

const jefaturaSchema = new Schema({
    name: { type: String },
    email: { type: String },
    area: { type: String, uppercase: true },
    sucursal: { type: String, uppercase: true },
    status: { type: Boolean, default: true },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('JefaturaVentas', jefaturaSchema);