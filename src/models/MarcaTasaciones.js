import { Schema, model } from 'mongoose'

const marcaTSchema = new Schema({
    avatar: { type: String, default: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg' },
    name: { type: String },
    status: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false
});

export default model('MarcaT', marcaTSchema);