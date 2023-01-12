import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const tCambioSchema = new Schema(
    {
        codigo_interno: { type: String, unique: true },
        fecha_registro: { type: Date },
        itemsBBVA: [
            {
                ventaVehiculos: { type: Number },
                ventaRepuestos: { type: Number },
                licitaciones: { type: Number },
            },
        ],
        itemsBCP: [
            {
                ventaVehiculos: { type: Number },
                ventaRepuestos: { type: Number },
                licitaciones: { type: Number },
            },
        ],
        ventaVehiculosPromedio: { type: Number },
        ventaRepuestosPromedio: { type: Number },
        licitacionesPromedio: { type: Number },
        createdBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TCambio", tCambioSchema);
