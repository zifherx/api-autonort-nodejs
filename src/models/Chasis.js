import { Schema, model } from 'mongoose'

const chasisSchema = new Schema({
    name: { type: String },
    status: { type: Boolean, default: true },
    estado: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Chasis', chasisSchema);