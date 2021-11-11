import { Schema, model } from 'mongoose'

const operacionSchema = new Schema({
    name: { type: String },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Operacion', operacionSchema);