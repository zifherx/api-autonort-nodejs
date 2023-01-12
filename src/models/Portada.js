import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const portadaSchema = new Schema(
    {
        name: { type: String },
        nombreAvatar: { type: String },
        avatar: { type: String },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Portada", portadaSchema);
// export default portadaSchema;
