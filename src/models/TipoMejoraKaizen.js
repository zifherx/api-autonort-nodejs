import {Schema} from 'mongoose';
import { connectSCIDB } from '../config/database';

const tipoMejoraSchema = new Schema({
    cod_interno: { type: String },
    name: { type: String },
    abreviatura: { type: String },
    description: { type: String } ,
    estado: { type: Boolean, default: true },
},{
    timestamps: true,
    versionKey: false
})

export default connectSCIDB.model('TipoMejora', tipoMejoraSchema);
