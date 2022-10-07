import { Schema, model } from 'mongoose'

const parameterSchema = new Schema({
    codigo_interno: { type: String },
    fecha_registro: { type: Date },
    area: { type: String },
    areaE: { type: Schema.Types.ObjectId, ref: 'Area' },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Parameter', parameterSchema);