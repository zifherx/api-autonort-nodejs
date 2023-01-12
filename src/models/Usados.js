import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const usadoSchema = new Schema(
    {
        codigo_interno: { type: String },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        mes: { type: Number, min: 0, max: 12 },
        fechaRegistro: { type: Date },
        tasacionId: { type: Schema.Types.ObjectId, ref: "Tasacion", default: null },
        precio_tasacion: { type: Number, min: 0 },
        precio_venta: { type: Number, min: 0 },
        estado_usado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: "EstadoUsados" },
        ubicacion: { type: String },
        ubicacionE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        observacion: { type: String },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
        // LOGS
        isDisponible: { type: Boolean, default: true },
        fechaDisponible: { type: Date },
        isEvaluacion: { type: Boolean, default: false },
        fechaEvaluacion: { type: Date },
        isVendido: { type: Boolean, default: false },
        fechaVendido: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Usados", usadoSchema);
