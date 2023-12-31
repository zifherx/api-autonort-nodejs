import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const submoduleSchema = new Schema(
    {
        submodule: { type: String },
        description: { type: String },
        icon: { type: String },
        route: { type: String },
        status: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Submodule", submoduleSchema);
