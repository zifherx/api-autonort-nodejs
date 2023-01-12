import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const logFileSchema = new Schema(
    {
        cod_interno: { type: Number, unique: true },
        file_id: { type: Schema.Types.ObjectId, ref: "Sale", default: null },
        modifiedBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        action: { type: String },
        timeAt: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("LogFile", logFileSchema);
