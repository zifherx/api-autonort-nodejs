import { Schema, model } from 'mongoose';

const estadoSchema = new Schema({
    name: { type: String },
    valor: { type: Number, default: 0 },
    estado: { type: Boolean, default: true },
},{
    timestamps: true,
    versionKey: false
});

export default model('EstadoTunningAccesorio', estadoSchema);