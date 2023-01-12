import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const sellerSchema = new Schema({
    name: { type: String },
    document: { type: String },
    telefono: { type: String },
    email: { type: String },
    avatar: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' },
    sucursal: { type: String },
    sucursalE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
    marca: { type: String },
    marcaE: { type: Schema.Types.ObjectId, ref: 'MarcaT'},
    estatus: { type: Boolean, default: true },
    estado: { type: Boolean, default: true },
    createdBy: { ref: "User", type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false,
});

export default connectSCIDB.model("Seller", sellerSchema);