import {Schema,model} from 'mongoose';

const portadaSchema = new Schema({
    rutaImage: {type: String },
    status: {type: Boolean, default: true}
},{
    timestamps: true,
    versionKey: false
});

export default model('Portada', portadaSchema);