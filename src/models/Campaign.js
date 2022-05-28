import { Schema, model } from 'mongoose'

const campaignSchema = new Schema({
    codigo: { type: String, max: 11 },
    name: { type: String },
    modelo: { type: Schema.Types.ObjectId, ref: 'ModeloT' },
    version: [{ type: String }],
    type: { type: String },
    bono: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
    estado: { type: Boolean, default: false },
    descripcion: { type: String }, //No usar
    forCar: { type: String }, //No usar
    status: { type: String }, //No usar
    createdBy: { ref: 'User', type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Campaign', campaignSchema);