import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const sectoristaSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
        estado: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Sectorista", sectoristaSchema);
