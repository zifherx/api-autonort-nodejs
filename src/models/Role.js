import { Schema, model } from 'mongoose'

export const ROLES = ["admin", "user", "salesman", "chief-sales", "chief-adv"];

const roleSchema = new Schema({
    name: String,
    description: String
}, {
    timestamps: true,
    versionKey: false
});

export default model('Role', roleSchema);