import { Schema, model } from 'mongoose'

const marcaSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Marca', marcaSchema);