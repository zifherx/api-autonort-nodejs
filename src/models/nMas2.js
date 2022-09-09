import {Schema, model} from 'mongoose';

const nMas2Schema = new Schema({
    name: { type: String },
    fecha: { type: Date },
    anio: { type: Number },
    mes: { type: Number, min: 1, max: 12},
    estado: { type: Boolean, default: false }
},{
    timestamps: true,
    versionKey: false
})

export default model('nMas2', nMas2Schema);