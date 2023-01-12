import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const jefaturaSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        area: { type: String, uppercase: true },
        areaE: { type: Schema.Types.ObjectId, ref: "Area" },
        marca: { type: String },
        marcaE: { type: Schema.Types.ObjectId, ref: "MarcaT" },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        status: { type: Boolean, default: true },
        encargadoDe: [{ type: String }],
        estado: { type: Boolean, default: true },
        createdBy: { ref: "User", type: Schema.Types.ObjectId },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("JefaturaVentas", jefaturaSchema);
