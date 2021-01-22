import { Schema, model } from 'mongoose'

export const ROLES = ["Aministrador", "Usuario", "Vendedor", "Jefe-Ventas", "Jefe-ADV"];

const roleSchema = new Schema({
    name: String,
    description: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Role', roleSchema);