import { Schema, model } from 'mongoose'

const financiamientoSchema = new Schema({
    name: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Financiamiento', financiamientoSchema);