import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { connectSCIDB } from "../config/database";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        username: { type: String, unique: true },
        email: { type: String },
        phone: { type: String },
        password: { type: String, required: true },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        sedeAcargo: [{ type: Schema.Types.ObjectId, ref: "Sucursal" }],
        direccion: { type: String },
        pais: { type: String },
        codigo_postal: { type: String },
        about: { type: String },
        roles: [{ ref: "Role", type: Schema.Types.ObjectId }],
        status: { type: Boolean, default: true },
        estado: { type: Boolean, default: true },
        online: { type: Boolean, default: false },
        avatar: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.statics.encryptPassword = async (clave) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(clave, salt);
};

userSchema.statics.comparePassword = async (clave, claveRecibida) => {
    return await bcrypt.compare(clave, claveRecibida);
};

export default connectSCIDB.model("User", userSchema);
