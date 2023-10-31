import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const typeSchema = new Schema(
    {
        name: {type: String },
        hex: {type: String, default: '#000000' },
        icon: {type: String, default: 'mdi-alien' },
        estado: { type: Boolean, default: true },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("TypePermission", typeSchema);
