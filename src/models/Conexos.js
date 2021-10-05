import { Schema, model } from 'mongoose'

const conexoSchema = new Schema({
    name: { type: String },
    email: { type: String },
    area: { type: String },
    sucursal: { type: String },
    status: { type: String },
    createdBy: {
        ref: 'User',
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Conexos', conexoSchema);