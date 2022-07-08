import { Schema, model } from 'mongoose'

const estadoSchema = new Schema({
    name: { type: String },
    valor: { type: Number },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default model('EstadoListaEspera', estadoSchema);