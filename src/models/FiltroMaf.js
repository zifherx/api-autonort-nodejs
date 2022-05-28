import { Schema, model } from 'mongoose'

const statusSchema = new Schema({
    name: { type: String },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusJefaturaMaf', statusSchema);