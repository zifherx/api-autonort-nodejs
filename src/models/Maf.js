import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const mafSchema = new Schema(
    {
        //Solicitud a Evaluacion
        nro_solicitud: { type: String },
        fecha_ingreso: { type: Date },
        hora_ingreso: { type: String },
        fecha_envio_evaluacion: { type: Date },
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
        car: { ref: "Vehicle", type: Types.ObjectId, default: null },
        anio_fab: { type: Number }, // actualizado
        anioFabE: { type: Types.ObjectId, ref: "Anio" },
        anio_mod: { type: Number }, // actualizado
        anioModE: { type: Types.ObjectId, ref: "Anio" },
        pvp: { type: Number, min: 0 },
        // NUEVOS
        precio_a_financiar: { type: Number }, //actualizado 25.07.23
        // TDP
        isBonoTDP: { type: Boolean, default: false }, //actualizado 25.07.23
        circularTDP: { type: Types.ObjectId, ref: "Campania", default: null },
        ofertaTDP: [{ type: String }], //actualizado 25.07.23
        // MAF
        isBonoMAF: { type: Boolean, default: false }, //actualizado 25.07.23
        circularMAF: { type: Types.ObjectId, ref: "Campania", default: null }, //actualizado 25.07.23
        ofertaMAF: [{ type: String }], //actualizado 25.07.23
        // DESCUENTOS
        herramientas_tdp: { type: Number, default: 0 },
        herramientas_maf: { type: Number, default: 0 },
        descuento_autonort: { type: Number, default: 0 },
        acuerdotdp_gerencia: { type: Number, default: 0 },
        importe_accesorios: { type: Number, default: 0 },
        // NUEVOS
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
        isParaRevisor: { type: Boolean, default: false },
        fechaParaRevisor: { type: Date },
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
        isDeleted: { type: Boolean, default: false },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Maf", mafSchema);
