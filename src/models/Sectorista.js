import { Schema, model } from 'mongoose'

const sectoristaSchema = new Schema({
    name: { type: String },
    status: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sectorista', sectoristaSchema);