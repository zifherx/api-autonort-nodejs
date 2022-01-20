import { Schema, model} from 'mongoose';

const ofertaSchema = new Schema({
    codigo: { type: String, required: true },
    tipo: { type: String },
    opcion: { type: Number },
    descripcion: { type: String },
    moneda: { type: Number, enum: [1,2] },
    monto: { type: Number, min: 0 },
    cantidad: {type: Number, default: 0 },
    accesorio: [{ type: Schema.Types.ObjectId, ref: 'Accesorio'}],
    estado: { type: Boolean, default: true }
},{
    timestamps: true,
    versionKey: false
});

export default model('Oferta', ofertaSchema);