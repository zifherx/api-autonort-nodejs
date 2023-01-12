import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const condicionSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Condicion", condicionSchema);
