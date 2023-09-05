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
        tipoMejora: { type: String }, //nuevo.31.03.23
        tipoMejoraE: { type: Schema.Types.ObjectId, ref: "TipoMejora", default: null }, //nuevo.31.03.23
        ubicacionMejora: { type: String }, //nuevo.31.03.23
        ubicacionMejoraE: { type: Schema.Types.ObjectId, ref: "UbicacionMejora", default: null }, //nuevo.31.03.23
        // Problema
        problema: { type: String },
        descripcionProblema: { type: String },
        graficoProblema: { type: String },
        causaRaizProblema: { type: String }, //nuevo.31.03.23
        // Contramedida
        contramedida: { type: String },
        descripcionContramedida: { type: String },
        graficoContramedida: { type: String },
        // Resultados
        resultados: { type: String },
        graficoResultados: { type: String },
        descripcionResultados: { type: String },
        resultado_Antes: { type: String },
        resultado_Ahora: { type: String },
        kpiImpacto: { type: String }, //nuevo.31.03.23
        kpiImpactoE: { type: Schema.Types.ObjectId, ref: "ImpactoKPI", default: null }, //nuevo.31.03.23
        // ANEXOS
        proximas_actividades: { type: String },
        titular: { type: String },
        anexos: [{ type: String }],
        // General
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
        qualifyBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        aprobadoBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        estado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: "EstadoKaizen" },
        observaciones_generales: { type: String },
        sendToEvaluate: { type: Boolean, default: false },
        //Qualify By TDP
        metodologia_tdp: { type: String },
        comentario_1: { type: String },
        impacto_tdp: { type: String },
        comentario_2: { type: String },
        puntaje_tdp: { type: String },
        estadoTDP: { type: String },
        estadoTDP_E: { type: Schema.Types.ObjectId, ref: "EstadoTDPKaizen", default: null },
        fechaAprobacionTDP: { type: Date },
        motivo_tdp: { type: String },
        dispositivoEntrada: {
            appCodeName: { type: String },
            appName: { type: String },
            appVersion: { type: String },
            platform: { type: String },
            userAgent: { type: String },
            userAgentData: [{ brand: { type: String }, version: { type: String } }],
            isAgentMobile: { type: Boolean },
            agentPlatform: { type: String },
            vendor: { type: String },
        },
        //LOGS
        isBorrador: { type: Boolean, default: true },
        fechaBorrador: { type: Date },
        isProceso: { type: Boolean, default: false },
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
