import { Schema, Types, model} from 'mongoose';

const circularSchema = new Schema({
    codigo_interno: { type: String },
    fecha_registro: { type: Date },
    nombre: { type: String },
    anio: { type: String },
    anioE: { type: Types.ObjectId, ref: 'Anio' },
    mes: { type: Number, min: 1, max: 12 },
    categoria: { type: String },
    categoriaE: { type: Types.ObjectId, ref: 'CategoriaCircular' },
    representa: { type: String },
    enlace: { type: String }
},{
    timestamps: true,
    versionKey: false
});

export default model('Circular', circularSchema);