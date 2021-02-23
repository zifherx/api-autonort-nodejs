import { Schema, model } from 'mongoose'

const ubicacionSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Ubicacion', ubicacionSchema);