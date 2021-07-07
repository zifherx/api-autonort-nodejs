import { Schema, model } from 'mongoose'

const goalSchema = new Schema({
    anio: { type: String },
    mes: { type: Number },
    vendedor: { ref: 'Seller', type: Schema.Types.ObjectId },
    criterio: { type: String },
    meta: { type: Number },
    avance: { type: Number },
    status: { type: String },
    empleado: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Goals', goalSchema);