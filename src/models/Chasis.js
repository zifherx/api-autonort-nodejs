import { Schema, model } from 'mongoose'

const chasisSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Chasis', chasisSchema);