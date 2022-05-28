import { Schema, model } from 'mongoose';

const tipoDocumentoSchema = new Schema({
    cod_interno: {type: String, unique: true},
    name: { type: String, unique: true },
    abreviatura: {type: String},
    longitud: { type: Number },
    estado : { type: Boolean, default: true },
},{
    timestamps: true,
    versionKey: false
})

export default model('TipoDocumento', tipoDocumentoSchema);