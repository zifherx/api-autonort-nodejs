import { Schema, model } from 'mongoose'

const modeloTSchema = new Schema({
    marca: { type: Schema.Types.ObjectId, ref: 'MarcaT' },
    name: { type: String },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('ModeloT', modeloTSchema);