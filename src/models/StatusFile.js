import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const statusFileSchema = new Schema(
    {
        name: { type: String },
        value: { type: Number },
        status: { type: Boolean },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("StatusFile", statusFileSchema);
