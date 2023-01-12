import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const tipoCampaniaSchema = new Schema(
    {
        name: { type: String, unique: true },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TipoCampania", tipoCampaniaSchema);
