import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const responsableSchema = new Schema(
    {
        name: { type: String, unique: true },
        avatar: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
        areaE: { type: Schema.Types.ObjectId, ref: "Area" },
        estado: { type: Boolean, default: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("ResponsableKaizen", responsableSchema);
