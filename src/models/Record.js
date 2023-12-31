import { Schema, model } from "mongoose";
import { connectSCIDB } from "../config/database";

const recordSchema = new Schema(
    {
        codigoInterno: { type: String },
        //Inmatriculados
        sucursal_tramite: { type: String },
        // Campos Actualizados----------------------------------------
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        estadoFileE: { type: Schema.Types.ObjectId, ref: "StatusFile", default: null },
        estadoRPE: { type: Schema.Types.ObjectId, ref: "StatusRP", default: null },
        estadoAAPE: { type: Schema.Types.ObjectId, ref: "StatusAAP", default: null },
        // ------------------------------------------------------------
        fecha_recepcion: { type: Date },
        hora_recepcion: { type: String },
        statusFile: { type: String },
        isIngresado: { type: Boolean, default: true },
        isPendienteFirma: { type: Boolean, default: false },
        fechaPendienteFirma: { type: Date },
        isFirmado: { type: Boolean, default: false },
        fechaFirmado: { type: Date },
        isLegalizado: { type: Boolean, default: false },
        fechaLegalizado: { type: Date },
        isFinalizado: { type: Boolean, default: false },
        fechaFinalizado: { type: Date },
        observaciones_file: { type: String },
        //Expediente
        sales: { ref: "Sale", type: Schema.Types.ObjectId },
        //Regisros Publicos
        fecha_ingreso_file: { type: Date },
        hora_ingreso_file: { type: String },
        num_titulo: { type: String },
        codigo_verificacion: { type: String },
        status_tarjeta: { type: String },
        observaciones_registros: { type: String },
        motivo_observacion: { type: String },
        num_placa: { type: String },
        fecha_entrega_tarjeta_recepcion: { type: Date },
        fecha_entrega_tarjeta_cliente: { type: Date },
        estadoPlacaRotativa: { type: String },
        //AAP
        fecha_tramite_placa: { type: Date },
        status_placa: { type: String },
        fecha_entrega_placa_recepcion: { type: Date },
        fecha_entrega_placa_cliente: { type: Date },
        observaciones_aap: { type: String },
        //Empleado
        empleado: { ref: "User", type: Schema.Types.ObjectId },
        //Entrega
        pasoaEntrega: { type: Number, default: 0 },
        isEntregado: { type: Boolean, default: false },
        fechaProgramacionPDS: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Record", recordSchema);
