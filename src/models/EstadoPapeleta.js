import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const estadoPapeletaSchema = new Schema(
    {
        name: { type: String },
        valor: { type: Number },
        estado: { type: Boolean, default: true },
        hex: { type: String },
        createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("EstadoPapeleta", estadoPapeletaSchema);
