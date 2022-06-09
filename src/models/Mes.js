import {Schema, model} from 'mongoose';

const meSchema = new Schema({
    name: { type: String, unique: true },
    abreviatura: { type: String },
    numero: { type: Number },
    estado: { type: Boolean, default: true},
},{
    timestamps: true,
    versionKey: false
});

export default model('Mes',meSchema);