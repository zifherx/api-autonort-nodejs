import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const tipoProductoSchema = new Schema(
    {
        areaE: { type: Schema.Types.ObjectId, ref: "Area" },
        name: { type: String },
        estado: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TipoProducto", tipoProductoSchema);
