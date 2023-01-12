import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const accesorioSchema = new Schema(
    {
        codigo: { type: String, required: true },
        categoria: { type: String },
        nombre: { type: String },
        descripcion: { type: String },
        stock: { type: Number },
        status: { type: Boolean, default: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Accesorio", accesorioSchema);
