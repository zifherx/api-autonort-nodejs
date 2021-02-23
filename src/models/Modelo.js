import { Schema, model } from 'mongoose'

const modeloSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Modelo', modeloSchema);