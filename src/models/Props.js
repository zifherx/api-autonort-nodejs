import { Schema, model } from 'mongoose'

const propsSchema = new Schema({
    name: { type: String, required: true },
    forCar: { type: String },
    stock: { type: Number },
    precio: { type: Number },
    status: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Props', propsSchema);