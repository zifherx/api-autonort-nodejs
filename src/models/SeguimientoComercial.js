import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const seguimientoSchema = new Schema(
    {
        codigo_interno: { type: String, unique: true, required: true },
        fecha_registro: { type: Date },
        mes: { type: String},
        anio: { type: String },
        sede: { type: String },
        sedeE: { type: Schema.Types.ObjectId, ref: 'Sucursal' },
        seller: { type: String },
        sellerE: { type: Schema.Types.ObjectId, ref: 'Seller' },
        cadena_valor: [
            {
                producto: { type: String },
                prodocutoE: { type: Schema.Types.ObjectId, ref: 'TipoProducto', default: null},
                meta: { type: Number },
                metaE: { type: Schema.Types.ObjectId, ref: 'MetasAutonort', default: null},
                avance: { type: Number },
                percent: { type: Number , min: 0, max: 1 },
            }
        ],
        avanceGlobal: { type: Number },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User'},
        // NVS
        // TOYOTA LIFE
        // SOLICITUDES MAF
        // ACCESORIOS TOYOTA
        // ACCESORIOS ALTERNATIVOS
        // TOYOTA VALUE
        // SEGUROS TOYOTA
        // TASACIONES
        // EPDP
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("SeguimientoComercial", seguimientoSchema);
