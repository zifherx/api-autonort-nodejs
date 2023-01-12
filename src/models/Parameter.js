import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const parameterSchema = new Schema(
    {
        codigo_interno: { type: String },
        fecha_registro: { type: Date },
        area: { type: String },
        areaE: { type: Schema.Types.ObjectId, ref: "Area" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Parameter", parameterSchema);
