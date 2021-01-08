import { Schema, model } from 'mongoose'

const propsSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String },
    forCar: { type: String },
    cantidad: { type: Number },
    precio: { type: Number }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Props', propsSchema);