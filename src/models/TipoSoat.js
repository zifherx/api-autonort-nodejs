import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const tipoSoatSchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: false },
        link: { type: String }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TipoSoat", tipoSoatSchema);
