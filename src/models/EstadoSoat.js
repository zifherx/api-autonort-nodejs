import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const estadoSoatSchema = new Schema(
    {
        name: { type: String },
        valor: { type: Number },
        hex: { type: String },
        icon: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("EstadoSoat", estadoSoatSchema);
