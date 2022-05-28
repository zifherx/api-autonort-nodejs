import { Schema, model } from 'mongoose'

const planSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: false },
}, {
    timestamps: true,
    versionKey: false
});

export default model('PlanMAF', planSchema);