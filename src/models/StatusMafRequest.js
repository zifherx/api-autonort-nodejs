import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const statusMafRequest = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: true },
        value: { type: Number, min: 0, max: 100 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("StatusMafRequest", statusMafRequest);
