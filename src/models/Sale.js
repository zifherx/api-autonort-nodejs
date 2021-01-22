import { Schema, model } from 'mongoose'

const saleSchema = new Schema({
    fecha: { type: Date },
    codVenta: { type: String, unique: true },
    nroComprobante: { type: String },
    fechaComprobante: { type: Date },
    seller: { ref: "Seller", type: Schema.Types.ObjectId },
    vehicle: { ref: "Vehicle", type: Schema.Types.ObjectId },
    serie_tdp: { type: String, unique: true },
    colour: { type: String },
    manufacturing_year: { type: String },
    model_year: { type: String },
    location_vehicle: { type: String },
    status_vehicle: { type: String },
    typeFinancing: { type: String },
    entity: { type: String },
    support: { type: String },
    fechaCartaAprobacion: { type: Date },
    montoAprobado: { type: Number },
    office: { type: String },
    account_executive: { type: String },
    montoAdelanto1: { type: Number },
    fechaAdelanto1: { type: Date },
    montoAdelanto2: { type: Number },
    fechaAdelanto2: { type: Date },
    montoAdelanto3: { type: Number },
    fechaAdelanto3: { type: Date },
    montoAdelanto4: { type: Number },
    fechaAdelanto4: { type: Date },
    montoAdelanto5: { type: Number },
    fechaAdelanto5: { type: Date },
    montoAdelanto6: { type: Number },
    fechaAdelanto6: { type: Date },
    montoAdelanto7: { type: Number },
    fechaAdelanto7: { type: Date },
    montoAdelanto8: { type: Number },
    fechaAdelanto8: { type: Date },
    situacion: { type: String },
    customer: { ref: "Customer", type: Schema.Types.ObjectId },
    sucursal: { type: String },
    campaign: [{ ref: "Campaign", type: Schema.Types.ObjectId }],
    props: [{ ref: "Props", type: Schema.Types.ObjectId }]
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sale', saleSchema);