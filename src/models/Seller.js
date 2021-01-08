import { Schema, model } from 'mongoose'

const sellerSchema = new Schema({
    name: { type: String, unique: true },
    type: { type: String },
    document: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Seller', sellerSchema);