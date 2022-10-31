import { Schema, model } from 'mongoose';

const estadoSchema = new Schema({
    name: { type: String, unique: true },
    valor: { type: Number },
    estado: { type: Boolean, default: true }
},{
    timestamps: true,
    versionKey: false
});

export default model('EstadoKaizen', estadoSchema);