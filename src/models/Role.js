import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const roleSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

// export const ROLES = ["Aministrador", "Usuario", "Vendedor", "Jefe-Ventas", "Jefe-ADV"];
export default connectSCIDB.model("Role", roleSchema);
