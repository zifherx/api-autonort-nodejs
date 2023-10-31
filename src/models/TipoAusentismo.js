import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const tipoAusentismoSchema = new Schema(
    {
        name: { type: String },
        estado: { type: Boolean, default: true },
        createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TipoAusentismo", tipoAusentismoSchema);
