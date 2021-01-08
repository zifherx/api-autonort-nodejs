import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    roles: { ref: "Role", type: Schema.Types.ObjectId }
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