import { Schema, model } from 'mongoose'

const resultadoSchema = new Schema({
    cod_interno: { type: String },
    tipoProducto: { type: String },
    tipoProductoE: { type: Schema.Types.ObjectId, ref: 'TipoProducto' },
    fecha: { type: Date },
    anio: { type: String },
    mes: { type: String },
    anioE: { type: Schema.Types.ObjectId, ref: 'Anio' },
    mesE: { type: Schema.Types.ObjectId, ref: 'Mes' },
    sucursal: { type: String },
    sucursalE: { type: Schema.Types.ObjectId, ref: 'Sucursal' },
    meta: { type: Number, default: 0 },
    valor: { type: Number, default: 0 },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Resultado', resultadoSchema);