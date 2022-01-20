import { Schema, model } from 'mongoose';

const accesorioSchema = new Schema({
    codigo: { type: String, required: true},
    categoria: { type: String },
    nombre: { type: String},
    descripcion: { type: String},
    stock: { type: Number},
    status: { type: Boolean, default: true},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true,
    versionKey: false
})

export default model('Accesorio', accesorioSchema);