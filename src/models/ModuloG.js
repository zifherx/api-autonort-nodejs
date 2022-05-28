import {Schema, model} from 'mongoose';

const moduloSchema = new Schema({
    menuG: { type: Schema.Types.ObjectId, ref: 'MenuG' },
    name: { type: String, unique: true },
    icon: { type: String },
    estado: { type: Boolean, default: true},
},{
    timestamps: true,
    versionKey: false
});

export default model('ModuloG',moduloSchema);