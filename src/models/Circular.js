import { Schema, Types, model} from 'mongoose';
import { connectSCIDB } from '../config/database';

const circularSchema = new Schema({
    codigo_interno: { type: String },
    fecha_registro: { type: Date },
    nombre: { type: String },
    anio: { type: String },
    anioE: { type: Types.ObjectId, ref: 'Anio' },
    mes: { type: Number, min: 1, max: 12 },
    categoria: { type: String },
    categoriaE: { type: Types.ObjectId, ref: 'CategoriaCircular' },
    tipo: { type: String },
    tipoE: { type: Types.ObjectId, ref: 'TipoCampania' },
    enlace: { type: String }
},{
    timestamps: true,
    versionKey: false
});

export default connectSCIDB.model('Circular', circularSchema);