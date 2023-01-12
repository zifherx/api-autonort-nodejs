import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const modeloSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Modelo", modeloSchema);
