import { Schema, model } from 'mongoose'

const statusAAP = new Schema({
    name: { type: String },
    value: { type: Number },
    status: { type: Boolean },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusAAP', statusAAP);