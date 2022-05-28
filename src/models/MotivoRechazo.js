import {Schema, model} from 'mongoose';

const rechazoSchema = new Schema({
    name: { type: String },
    area: { type: Schema.Types.ObjectId, ref: 'Area', default: null },
    estado: { type: Boolean, default: false }
},{
    timestamps: true,
    versionKey: false
})

export default model('MotivoRechazo', rechazoSchema);