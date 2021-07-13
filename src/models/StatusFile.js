import { Schema, model } from 'mongoose'

const statusFileSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusFile', statusFileSchema);