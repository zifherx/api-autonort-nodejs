import { Schema, model } from 'mongoose'

const aseguradoraSchema = new Schema({
    name: { type: String },
    status: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default model('ASeguradora', aseguradoraSchema);