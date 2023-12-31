import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const propsSchema = new Schema(
    {
        name: { type: String, required: true },
        forCar: { type: String },
        stock: { type: Number },
        precio: { type: Number },
        status: { type: String },
        empleado: { ref: "User", type: Schema.Types.ObjectId },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Props", propsSchema);
