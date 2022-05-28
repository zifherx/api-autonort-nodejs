import { Schema, model } from 'mongoose'

const metaSchema = new Schema({
    name: { type: String },
    sucursal: [{ type: Schema.Types.ObjectId, ref: 'Sucursal' }],
    area: { type: Schema.Types.ObjectId, ref: 'Area' },
    tipo: { type: String },
    fecha: { type: Date },
    mes: { type: Number },
    valor: { type: Number, default: 0 },
    estado: { type: Boolean, default: false },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Meta', metaSchema);