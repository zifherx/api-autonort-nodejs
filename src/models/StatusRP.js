import { Schema, model } from 'mongoose'

const statusRP = new Schema({
    name: { type: String },
    value: { type: Number },
    status: { type: Boolean, default: true },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusRP', statusRP);