import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const menuSchema = new Schema(
    {
        name: { type: String, unique: true },
        icon: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("MenuG", menuSchema);
