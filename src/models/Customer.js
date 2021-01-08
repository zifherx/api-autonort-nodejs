import { Schema, model } from 'mongoose'

const customerSchema = new Schema({
    name: { type: String },
    document: { type: String },
    cellphone: { type: String },
    email: { type: String },
    address: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Customer', customerSchema);