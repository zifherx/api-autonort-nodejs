import { Schema, model } from 'mongoose'

const saleSchema = new Schema({
    fecha: { type: Date },
    nroComprobante: { type: String, unique: true },
    seller: { ref: "Seller", type: Schema.Types.ObjectId },
    vehicle: { ref: "Vehicle", type: Schema.Types.ObjectId },
    financing: { ref: "Financing", type: Schema.Types.ObjectId },
    entity: { type: String },
    support: { type: String },
    office: { type: String },
    account_executive: { type: String },
    situacion: { type: String },
    customer: { ref: "Customer", type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Sale', saleSchema);