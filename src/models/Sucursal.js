import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const sucursalSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
        estado: { type: Boolean, default: true },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Sucursal", sucursalSchema);
