import { Schema, model } from 'mongoose'

const tipoUsoSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default model('TipoUso', tipoUsoSchema);