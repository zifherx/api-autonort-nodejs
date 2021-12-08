import { Schema, model } from 'mongoose'

const metaSchema = new Schema({
    name: { type: String },
    sucursal: { type: String },
    area: { type: String },
    tipo: { type: String },
    fecha: { type: Date, default: new Date },
    mes: { type: Number },
    valor: { type: Number, default: 0 },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Meta', metaSchema);