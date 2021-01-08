import { Schema, model } from 'mongoose'

const recordSchema = new Schema({
    fecha: { type: Date, default: Date.now },
    estatusContable: { type: String },
    sales: { ref: "Sale", type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Record', recordSchema);