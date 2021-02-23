import { Schema, model } from 'mongoose'

const situacionSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Situacion', situacionSchema);