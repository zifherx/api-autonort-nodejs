import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const gpsSchema = new Schema(
    {
        codigo_interno: { type: String, required: true },
        cliente: { type: Types.ObjectId, ref: "Customer" },
        sucursal: { type: String },
        sucursalE: { type: Types.ObjectId, ref: "Sucursal" },
        fecha_registro: { type: Date },
        mes_registro: { type: Number },
        serie_placa: { type: String },
        nro_chasis: { type: String },
        nro_motor: { type: String },
        marca: { type: String },
        marcaE: { type: Types.ObjectId, ref: "MarcaT" },
        modelo: { type: String },
        modeloE: { type: Types.ObjectId, ref: "ModeloT" },
        anio: { type: String },
        anioE: { type: Types.ObjectId, ref: "Anio" },
        vendedor: { type: Types.ObjectId, ref: "Seller", default: null },
        asesorConexos: { type: Types.ObjectId, ref: "Conexos" },
        producto_gps: { type: Types.ObjectId, ref: "ProductoGPS", default: null },
        forma_pago: { type: String },
        instalado: { type: Boolean, default: false },
        estadoGPS: { type: String },
        estadoGPSE: { type: Types.ObjectId, ref: 'EstadoGPS' },
        createdBy: { type: Types.ObjectId, ref: 'User'},
        // LOGS
        isIngresado: { type: Boolean, default: true },
        fechaIngresado: { type: Date },
        isEmitido: { type: Boolean },
        fechaEmitido: { type: Date },
        isReportado: { type: Boolean },
        fechaReportado: { type: Date },
        isCompleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("GPS", gpsSchema);
