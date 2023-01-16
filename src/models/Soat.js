import { Schema, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const soatSchema = new Schema(
    {
        codigo_interno: { type: String, required: true },
        cliente: { type: Types.ObjectId, ref: "Customer" },
        fecha_emision: { type: Date },
        anio_emision: { type: String },
        mes_emision: { type: Number },
        nro_formulario: { type: String },
        sucursal: { type: String },
        sucursalE: { type: Types.ObjectId, ref: "Sucursal" },
        placa: { type: String },
        marca: { type: String },
        marcaE: { type: Types.ObjectId, ref: "MarcaT" },
        modelo: { type: String },
        modeloE: { type: Types.ObjectId, ref: "ModeloT" },
        anioE: { type: Types.ObjectId, ref: "Anio" },
        uso: { type: String },
        usoE: { type: Types.ObjectId, ref: "TipoUso" },
        tipoSoat: { type: String },
        tipoSoatE: { type: Types.ObjectId, ref: "TipoSoat", default: null },
        asesorConexos: { type: Types.ObjectId, ref: "Conexos" },
        inicio_vigencia: { type: Date },
        fin_vigencia: { type: Date },
        precio: { type: Number },
        estadoSoat: { type: String },
        estadoSoatE: { type: Types.ObjectId, ref: "EstadoSoat" },
        createdBy: { type: Types.ObjectId, ref: "User" },
        //LOGS
        isIngresado: { type: Boolean, default: true },
        fechaIngresado: { type: Date },
        isEmitido: { type: Boolean },
        fechaEmitido: { type: Date },
        isCompleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Soat", soatSchema);
