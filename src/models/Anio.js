import { Schema, model } from 'mongoose'

const anioSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Anio', anioSchema);