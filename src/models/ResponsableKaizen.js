import { Schema, model } from 'mongoose';

const responsableSchema = new Schema({
    name: { type: String, unique: true },
    avatar: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' },
    areaE: { type: Schema.Types.ObjectId, ref: 'Area' },
    estado: { type: Boolean, default: true }
},{
    timestamps: true,
    versionKey: false
});

export default model('ResponsableKaizen', responsableSchema);