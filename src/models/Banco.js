import { Schema, model } from 'mongoose'

const bancoSchema = new Schema({
    avatar: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' },
    name: { type: String },
    status: { type: Boolean, default: false },
    estado: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Banco', bancoSchema);