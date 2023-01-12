import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const metodoSchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("MetodoAtencion", metodoSchema);
