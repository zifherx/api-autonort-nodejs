import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const submoduloSchema = new Schema(
    {
        moduloG: { type: Schema.Types.ObjectId, ref: "ModuloG" },
        name: { type: String, unique: true },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("SubmoduloG", submoduloSchema);
