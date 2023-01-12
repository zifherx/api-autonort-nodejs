import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const citySchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("City", citySchema);
