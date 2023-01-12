import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const bancoSchema = new Schema(
    {
        name: { type: String },
        avatar: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
        status: { type: Boolean, default: false },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Banco", bancoSchema);
