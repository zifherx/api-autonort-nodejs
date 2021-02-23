import { Schema, model } from 'mongoose'

const bancoSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Banco', bancoSchema);