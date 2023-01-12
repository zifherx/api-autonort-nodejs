import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const marcaTSchema = new Schema(
    {
        avatar: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
        name: { type: String },
        status: { type: Boolean, default: true },
        estado: { type: Boolean, default: true },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("MarcaT", marcaTSchema);
