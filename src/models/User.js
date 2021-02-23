import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: { type: String, unique: true },
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    sucursal: { type: String, required: true },
    direccion: { type: String },
    pais: { type: String },
    codigo_postal: { type: String },
    about: { type: String },
    roles: { ref: "Role", type: Schema.Types.ObjectId },
    activo: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async(clave) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(clave, salt)
}

userSchema.statics.comparePassword = async(clave, claveRecibida) => {
    return await bcrypt.compare(clave, claveRecibida);
}

export default model('User', userSchema);