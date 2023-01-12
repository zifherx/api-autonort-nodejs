import { Schema, model } from 'mongoose'
import { connectSCIDB } from '../config/database';

const aseguradoraSchema = new Schema({
    name: { type: String },
    status: { type: Boolean, default: false },
    estado: {type: Boolean, default: true}
}, {
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('Aseguradora', aseguradoraSchema);