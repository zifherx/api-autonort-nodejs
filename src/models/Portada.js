import {Schema,model} from 'mongoose';

const portadaSchema = new Schema({
    name: { type: String },
    nombreAvatar: {type: String},
    avatar: {type: String },
    estado: {type: Boolean, default: true},
},{
    timestamps: true,
    versionKey: false
});

export default model('Portada', portadaSchema);