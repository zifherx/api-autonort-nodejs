import { Schema, model } from 'mongoose';

const campaniaSchema = new Schema({
    //Campania
    cod_interno: { type: String, max: 11, required: true, unique: true },
    descripcion: { type: String },
    tipo: { type: Schema.Types.ObjectId, ref: 'TipoCampania' },
    startDate: { type: Date },
    endDate: { type: Date },
    //Vehículo
    model : { type: Schema.Types.ObjectId, ref: 'ModeloT'},
    versiones: [{ type: String }],
    //Oferta
    oferta: [{
        tipo: { type: String, uppercase: true, trim: true },
        bono: {type: Number, default: 0 },
        descripcion: { type: String }
    }],
    estado: { type: Boolean, default: false},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
},{
    timestamps: true,
    versionKey: false
})

export default model('Campania', campaniaSchema);