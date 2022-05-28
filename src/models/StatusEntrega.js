import { Schema, model } from 'mongoose'

const estadoEntregaSchema = new Schema({
    name: { type: String },
    value: { type: Number, default: 0},
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusEntrega', estadoEntregaSchema);