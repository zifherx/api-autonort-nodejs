import { Schema, model } from 'mongoose'

const finanfincSchema = new Schema({
    type: { type: String },
    description: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Financing', finanfincSchema);