import { Schema, model } from 'mongoose'

const conexoSchema = new Schema({
    name: { type: String },
    email: { type: String },
    area: { type: String },
    sucursal: { type: String },
    encargadoDe: [{ type: String }],
    status: { type: Boolean, default: true },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Conexos', conexoSchema);