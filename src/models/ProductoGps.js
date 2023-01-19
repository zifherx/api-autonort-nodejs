import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const productoGPSSchema = new Schema(
    {
            codigo_interno: { type: String, required: true },
            name: { type: String },
            precio: { type: Number, min: 0 },
            descuento: { type: Number, min: 0, max: 1 },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("ProductoGPS", productoGPSSchema);
