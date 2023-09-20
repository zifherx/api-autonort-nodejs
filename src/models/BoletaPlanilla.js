import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const itemSchema = new Schema(
    {
        periodo: { type: String },
        mes: { type: String },
        estado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: "EstadoPlanilla" },
        motivoRechazo: { type: String },
        isVisto: { type: Boolean, default: false },
        isAprobado: { type: Boolean, default: false },
        isRechazado: { type: Boolean, default: false },
        fechaVisto: { type: Date },
        fechaAprobado: { type: Date },
        fechaRechazado: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("BoletaPlanilla", itemSchema);
