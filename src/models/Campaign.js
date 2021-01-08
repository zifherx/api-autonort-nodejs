import { Schema, model } from 'mongoose'

const campaignSchema = new Schema({
    name: { type: String, required: true },
    descripcion: { type: String },
    bono: { type: Number, required: true },
    startDate: { type: Date },
    endDate: { type: Date }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Campaign', campaignSchema);