import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const mafSchema = new Schema(
    {
        //Solicitud a Evaluacion
        nro_solicitud: { type: String },
        fecha_ingreso: { type: Date },
        hora_ingreso: { type: String },
        sucursal: { type: String }, // actualizado
        sucursalE: { type: Types.ObjectId, ref: "Sucursal" },
        customer: { ref: "Customer", type: Types.ObjectId },
        fecha_nacimiento_titular: { type: Date },
        estado_civil: { type: String },
        lugar_trabajo: { type: String },
        observaciones_ingreso: { type: String },
        //Conyuge
        conyuge: { type: String },
        document_conyuge: { type: String },
        fecha_nacimiento_conyuge: { type: Date },
        //Sueldo
        ingreso_promedio: { type: Number, min: 0 },
        cuota_inicial: { type: Number, min: 0 },
        seller: { ref: "Seller", type: Types.ObjectId },
        car: { ref: "Vehicle", type: Types.ObjectId },
        anio_fab: { type: Number }, // actualizado
        anioFabE: { type: Types.ObjectId, ref: "Anio" },
        anio_mod: { type: Number }, // actualizado
        anioModE: { type: Types.ObjectId, ref: "Anio" },
        pvp: { type: Number, min: 0 },
        plan: { type: String }, // actualizado
        planMAF: { type: Types.ObjectId, ref: "PlanMAF" },
        tipo_uso: { type: String }, // actualizado
        tipoUsoE: { type: Types.ObjectId, ref: "TipoUso" },
        evidencias: [{ type: String }],
        //Adicionales
        isReingresado: { type: Boolean, default: false },
        files_adicionales: [{ type: String }],
        //Contestacion
        fecha_respuesta: { type: Date },
        fecha_aprobacion: { type: Date },
        carta_aprobacion: { type: Boolean, default: false },
        carta_evidencia: { type: String },
        cronograma_pagos: { type: String }, // actualizado
        observacion: { type: String },
        motivo: { type: String },
        //Estado de Solicitud para el crédito
        primer_status_request: { type: String }, // actualizado
        estadoSolicitud: { type: String },
        estadoSolicitudMAF: { type: Types.ObjectId, ref: "StatusMafRequest" },
        //Logs
        isIngresada: { type: Boolean, default: true },
        fechaIngresoSolicitud: { type: Date },
        isReingresado: { type: Boolean, default: false },
        fechaReingreso: { type: Date },
        isEvaluacion: { type: Boolean, default: false },
        fechaEvaluacion: { type: Date },
        isObservado: { type: Boolean, default: false },
        fechaObservado: { type: Date },
        isRechazado: { type: Boolean, default: false },
        fechaRechazado: { type: Date },
        isAprobado: { type: Boolean, default: false },
        fechaAprobado: { type: Date },
        isRevisorio: { type: Boolean, default: false },
        fechaRevisorio: { type: Date },
        isDesembolsar: { type: Boolean, default: false },
        fechaDesembolsar: { type: Date },
        isActivado: { type: Boolean, default: false },
        fechaActivado: { type: Date },
        //TODO Solitud Aprobada por Jefatura
        pasoaHot: { type: Number, min: 0, max: 3, default: 0 }, //actualizado
        estadoAprobacionJefatura: { type: String },
        estadoAprobacionJefaturaE: { type: Types.ObjectId, ref: "StatusJefaturaMaf", default: null },
        comentarioJefatura: { type: String },
        //TODO
        isHot: { type: Boolean, default: false },
        fechaHot: { type: Date },
        isProxMes: { type: Boolean, default: false },
        fechaProxMes: { type: Date },
        isNoVa: { type: Boolean, default: false },
        fechaNoVa: { type: Date },
        //Estatus que cambia por asesor MAF
        tercer_status_request: { type: String },
        //Aprobadores
        userCreator: { type: Types.ObjectId, ref: "User", default: null },
        userApprove: { type: Types.ObjectId, ref: "User", default: null },

        createdBy: { type: Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Maf", mafSchema);
