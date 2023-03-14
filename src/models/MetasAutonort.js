import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const metasSchema = new Schema(
    {
        codigo_interno: { type: String, unique: true, required: true },
        producto_autonort: { type: Schema.Types.ObjectId, ref: 'TipoProducto'},
        fecha_registro: { type: Date },
        anio_registro: { type: Number },
        mes_registro: { type: Number, },
        sede: { type: String },
        sedeE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
        estado: { type: Boolean, default: false },
        valor: { type: Number },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("MetasAutonort", metasSchema);
