import { Schema, model } from 'mongoose'

const aseguradoraSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('ASeguradora', aseguradoraSchema);