import { Schema, model } from 'mongoose'

const vehicleSchema = new Schema({
    brand: { type: String },
    cod_tdp: { type: String, unique: true },
    serie_tdp: { type: String, unique: true },
    category: { type: String },
    model: { type: String },
    colour: { type: String },
    manufacturing_year: { type: Date },
    model_year: { type: Date },
    branch_office: { type: String },
    location: { type: String },
    price: { type: Number },
    imgURL: { type: String },
    status: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Vehicle', vehicleSchema);