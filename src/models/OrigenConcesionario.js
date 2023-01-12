import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const origenSchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("OrigenConcesionario", origenSchema);
