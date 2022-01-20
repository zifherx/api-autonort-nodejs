import { Schema, model } from 'mongoose';

const tipoCampaniaSchema = new Schema({
    codigo: { type: String, required: true },
    nombre: { type: String, unique: true },
    estado : { type: Boolean, default: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true,
    versionKey: false
})

export default model('TipoCampania', tipoCampaniaSchema);