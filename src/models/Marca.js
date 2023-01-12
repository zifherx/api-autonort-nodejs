import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const marcaSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Marca", marcaSchema);
