import { Schema, model } from 'mongoose'

const sustentoSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sustento', sustentoSchema);