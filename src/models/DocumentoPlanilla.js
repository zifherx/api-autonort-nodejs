import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const itemSchema = new Schema(
    {
        PERIODO: { type: String },
        mes: { type: String },
        tipoDocumento: { type: String },
        user: { type: String },
        userBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        estado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: "EstadoPlanilla" },
        motivoObservado: { type: String },
        isVisto: { type: Boolean, default: false },
        isAprobado: { type: Boolean, default: false },
        isObservado: { type: Boolean, default: false },
        fechaRegistro: { type: Date },
        fechaVisto: { type: Date },
        fechaAprobado: { type: Date },
        fechaObservado: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("DocumentoPlanilla", itemSchema);
