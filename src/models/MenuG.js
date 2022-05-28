import {Schema, model} from 'mongoose';

const menuSchema = new Schema({
    name: { type: String, unique: true },
    icon: { type: String },
    estado: { type: Boolean, default: true},
},{
    timestamps: true,
    versionKey: false
});

export default model('MenuG',menuSchema);