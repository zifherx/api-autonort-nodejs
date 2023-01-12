import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const operacionSchema = new Schema(
    {
        name: { type: String },
        status: { type: Boolean, default: true },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Operacion", operacionSchema);
