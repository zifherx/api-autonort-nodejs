import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const tipoUsoSchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TipoUso", tipoUsoSchema);
