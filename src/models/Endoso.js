import { Schema, model } from 'mongoose'

const endosoSchema = new Schema({
    name: { type: String },
    status: { type: String },
    estado: { type: Boolean, default: true},
}, {
    timestamps: true,
    versionKey: false
});

export default model('Endoso', endosoSchema);