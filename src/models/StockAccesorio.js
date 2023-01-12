import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const stockSchema = new Schema(
    {
        cod_interno: { type: String },
        temporada: { type: String },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        fecha: { type: Date },
        anio: { type: String },
        anioE: { type: Schema.Types.ObjectId, ref: "Anio" },
        mes: { type: String },
        mesE: { type: Schema.Types.ObjectId, ref: "Mes" },
        importe: { type: Number },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("StockAccesorio", stockSchema);
