import { Schema, model } from "mongoose";

const sellerSchema = new Schema({
    name: { type: String },
    sucursal: { type: String },
    marca: { type: String },
    document: { type: String },
    telefono: { type: String },
    email: { type: String },
    avatar: { type: String },
    estatus: { type: Boolean, default: true },
    empleado: { ref: "User", type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false,
});

export default model("Seller", sellerSchema);