import { Schema, model } from 'mongoose'

const propsSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String },
    cantidad: { type: Number },
    precio: { type: Number },
    auto: { type: Schema.Types.ObjectId, ref: "Vehicle" }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Props', propsSchema);