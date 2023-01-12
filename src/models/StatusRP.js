import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const statusRP = new Schema(
    {
        name: { type: String },
        value: { type: Number },
        status: { type: Boolean, default: true },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("StatusRP", statusRP);
