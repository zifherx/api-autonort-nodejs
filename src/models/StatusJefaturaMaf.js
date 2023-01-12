import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const estadoJefaturaMaf = new Schema(
    {
        name: { type: String },
        valor: { type: Number },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("StatusJefaturaMaf", estadoJefaturaMaf);
