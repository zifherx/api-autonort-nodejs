import { Schema, model } from 'mongoose'

const aseguradoraSchema = new Schema({
    name: { type: String },
    status: { type: Boolean, default: false },
    estado: {type: Boolean, default: true}
}, {
    timestamps: true,
    versionKey: false
});

export default model('Aseguradora', aseguradoraSchema);