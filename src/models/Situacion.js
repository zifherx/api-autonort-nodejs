import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const situacionSchema = new Schema(
    {
        name: { type: String },
        valor: { type: Number, default: 0 },
        status: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Situacion", situacionSchema);
