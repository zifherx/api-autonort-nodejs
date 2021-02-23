import { Schema, model } from 'mongoose'

const condicionSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Condicion', condicionSchema);