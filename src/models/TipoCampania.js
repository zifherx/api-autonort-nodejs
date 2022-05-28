import { Schema, model } from 'mongoose';

const tipoCampaniaSchema = new Schema({
    name: { type: String, unique: true },
    estado : { type: Boolean, default: true },
},{
    timestamps: true,
    versionKey: false
})

export default model('TipoCampania', tipoCampaniaSchema);