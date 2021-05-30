import { Schema, model } from 'mongoose'

const conexoSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Conexos', conexoSchema);