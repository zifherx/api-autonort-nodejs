import { Schema, model } from 'mongoose'

const estadoUsadosSchema = new Schema({
    name: { type: String },
    value: { type: Number },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('EstadoUsados', estadoUsadosSchema);