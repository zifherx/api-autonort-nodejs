import { Schema, model } from 'mongoose'

const adicionalSchema = new Schema({
    name: { type: String, required: true },
    descripcion: { type: String },
    bono: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
    status: { type: String },
    empleado: { ref: 'User', type: Schema.Types.ObjectId }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Adicional', adicionalSchema);