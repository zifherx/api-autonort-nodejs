import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const permisoSchema = new Schema(
    {
        cod_interno: { type: String, unique: true, required: true },
        submoduloG: { type: Schema.Types.ObjectId, ref: "SubmoduloG" },
        rolesPermitidos: [{ type: Schema.Types.ObjectId, ref: "Role" }],
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Permiso", permisoSchema);
