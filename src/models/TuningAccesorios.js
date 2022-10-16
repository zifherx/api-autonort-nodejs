import { Schema, model } from 'mongoose';

const accSchema = new Schema({
    codigo_interno: { type: String },
    sede: { type: String },
    sedeE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
    clasificacion: { type: String },
    producto: { type: String },
    pCosto: { type: Number },
    margenGanancia: { type: Number },
    pVenta: { type: Number },
    stockInicial: { type: Number },
    forCar: [{ type: Schema.Types.ObjectId, ref: 'ModeloT' }],
    anio: [{ type: String }],
    anioE: [{ type: Schema.Types.ObjectId, ref: 'Anio' }],
    estado: { type: String },
    estadoE: { type: Schema.Types.ObjectId, ref: 'EstadoTunningAccesorio' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamps: true,
    versionKey: false,
});

export default model('TuningAccesorios', accSchema);