import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const rechazoSchema = new Schema(
    {
        name: { type: String },
        area: { type: Schema.Types.ObjectId, ref: "Area", default: null },
        estado: { type: Boolean, default: false },
        status: { type: Boolean, default: false },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User'}
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("MotivoRechazo", rechazoSchema);
