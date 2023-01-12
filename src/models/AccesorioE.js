import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const accSchema = new Schema(
    {
        cod_interno: { type: String, max: 11, required: true, unique: true },
        name: { type: String, required: true },
        model: { type: Schema.Types.ObjectId, ref: "ModeloT" },
        precio: { type: Number, default: 0 },
        estado: { type: Boolean, default: false },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("AccesorioE", accSchema);
