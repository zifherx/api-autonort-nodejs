import { Schema, model } from 'mongoose';

const campaniaSchema = new Schema({
    codigo: { type: String, max: 11, required: true, unique: true },
    descripcion: { type: String },
    tipo: { type: Schema.Types.ObjectId, ref: 'TipoCampania' },
    startDate: { type: Date },
    endDate: { type: Date },
    //Modelos
    auto : [ { type: Schema.Types.ObjectId, ref: 'Vehicle' }],
    ofertas: [{ type: Schema.Types.ObjectId, ref: 'Oferta '}],
    estado: { type: Boolean, default: true},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true,
    versionKey: false
})

export default model('CampaniaN', campaniaSchema);