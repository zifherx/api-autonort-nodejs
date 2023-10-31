import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const viewSchema = new Schema(
    {
        cod_interno: { type: String, unique: true, required: true },
        typePermission: {type: String },
        typePermissionE: {type: Schema.Types.ObjectId, ref: 'TypePermission' },
        submoduloG: { type: Schema.Types.ObjectId, ref: "SubmoduloG", default: null },
        rolesPermitidos: [{ type: Schema.Types.ObjectId, ref: "Role" }],
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("ViewAuthorization", viewSchema);
