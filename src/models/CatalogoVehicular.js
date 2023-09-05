import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const catalogoSchema = new Schema(
    {
        // GENERAL
        codigo_interno: { type: String, unique: true },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        fechaIngreso: { type: Date },
        // VEHICULO
        unidad: { type: Schema.Types.ObjectId, ref: "Vehicle", default: null },
        anioModelo: { type: String },
        anioModeloE: { type: Schema.Types.ObjectId, ref: "Anio" },
        precioLista: { type: Number, default: 0 },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("CatalogoVehicular", catalogoSchema);
