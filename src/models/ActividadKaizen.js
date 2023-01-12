import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const actividadSchema = new Schema(
    {
        concesionario: { type: String },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal", default: null },
        fechaIngreso: { type: Date },
        responsable: { type: String },
        // responsable: { type: Schema.Types.ObjectId, ref: 'User', default: null},
        // Actividad
        cod_interno: { type: String },
        titulo_actividad: { type: String },
        area: { type: Schema.Types.ObjectId, ref: "Area", default: null },
        // Problema
        problema: { type: String },
        tituloFotoProblema: { type: String },
        evidenciaProblema: { type: String },
        descripcionProblema: { type: String },
        flujogramaProblema: { type: String },
        graficoProblema: { type: String },
        // Contramedida
        contramedida: { type: String },
        tituloFotoContramedida: { type: String },
        avatarContramedida: { type: String },
        descripcionContramedida: { type: String },
        flujogramaContramedida: { type: String },
        // Resultados
        resultados: { type: String },
        indicadores_cualitativos: { type: String },
        titulo_indicadores_cuantitativos: { type: String },
        indicadores_cuantitativos: { type: String },
        descripcionResultados: { type: String },
        proximas_actividades: { type: String },
        titular: { type: String },
        anexos: [{ type: String }],
        // General
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
        aprobadoBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        estado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: "EstadoKaizen" },
        observaciones_generales: { type: String },
        //LOGS
        isProceso: { type: Boolean, default: true },
        fechaProceso: { type: Date },
        isRevision: { type: Boolean, default: false },
        fechaRevision: { type: Date },
        isObservado: { type: Boolean, default: false },
        fechaObservado: { type: Date },
        isAprobado: { type: Boolean, default: false },
        fechaAprobado: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("ActividadKaizen", actividadSchema);
