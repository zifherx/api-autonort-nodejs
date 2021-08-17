import { Schema, model } from 'mongoose'

const tasadorSchema = new Schema({
    name: { type: String },
    document: { type: String },
    sucursal: { type: String },
    status: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Tasador', tasadorSchema);