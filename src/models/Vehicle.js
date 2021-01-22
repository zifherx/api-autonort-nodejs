import { Schema, model } from 'mongoose'

const vehicleSchema = new Schema({
    brand: { type: String },
    cod_tdp: { type: String, unique: true },
    category: { type: String },
    model: { type: String },
    branch_office: { type: String },
    price: { type: Number },
    campaign: [{ type: Schema.Types.ObjectId, ref: "Campaign" }],
}, {
    timestamps: true,
    versionKey: false
});

export default model('Vehicle', vehicleSchema);