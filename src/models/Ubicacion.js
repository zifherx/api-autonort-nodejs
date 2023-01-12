import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const ubicacionSchema = new Schema(
    {
        name: { type: String },
        valor: { type: Number },
        status: { type: String },
        estado: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Ubicacion", ubicacionSchema);
