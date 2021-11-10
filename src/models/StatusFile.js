import { Schema, model } from 'mongoose'

const statusFileSchema = new Schema({
    name: { type: String },
    value: { type: Number },
    status: { type: Boolean },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusFile', statusFileSchema);