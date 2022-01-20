import { Schema, model } from 'mongoose'


const roleSchema = new Schema({
    name: { type: String },
    description: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export const ROLES = ["Aministrador", "Usuario", "Vendedor", "Jefe-Ventas", "Jefe-ADV"];
export default model('Role', roleSchema);