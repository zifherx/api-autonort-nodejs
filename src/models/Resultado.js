import { Schema, model } from 'mongoose'

const resultadoSchema = new Schema({
    cod_interno: { type: String },
    tipoProducto: { type: Schema.Types.ObjectId, ref: '' },
    fecha: { type: Date },
    anio: { type: Number },
    mes: { type: Number },
    sucursalE: [{ type: Schema.Types.ObjectId, ref: 'Sucursal' }],
    meta: { type: Number, default: 0 },
    valor: { type: Number, default: 0 },
    createdBy: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Resultado', resultadoSchema);