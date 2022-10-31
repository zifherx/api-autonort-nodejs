import { Schema, model } from 'mongoose'

const categoriaSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('CategoriaCircular', categoriaSchema);