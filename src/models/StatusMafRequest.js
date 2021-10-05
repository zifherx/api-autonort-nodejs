import { Schema, model } from 'mongoose'

const statusMafRequest = new Schema({
    name: { type: String },
    status: { type: Boolean, default: true }
}, {
    timestamps: true,
    versionKey: false
});

export default model('StatusMafRequest', statusMafRequest);