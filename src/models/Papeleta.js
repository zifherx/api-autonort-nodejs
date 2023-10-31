import { Schema } from "mongoose";
import { connectSCIDB } from "../config/database";

const papeletaSchema = new Schema(
    {
        sede: { type: String },
        sedeE: { type: Schema.Types.ObjectId, ref: 'Sucursal' },
        area: { type: String },
        areaE: { type: Schema.Types.ObjectId, ref: 'Area' },
        tipoAusentismo: { type: String },
        tipoAusentismoE: { type: Schema.Types.ObjectId, ref: 'TipoAusentismo' },
        motivo: { type: String },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
        fecha_inicio: { type: Date },
        fecha_fin: { type: Date },
        hora_inicio: { type: String },
        hora_fin: { type: String },
        duracion_dias: { type: Number },
        duracion_horas: { type: Number },
        observaciones: { type: String },
        bossApprove: { type: Boolean, default: false},
        rrhhApprove: { type: Boolean, default: false},
        approverChief: { type: Schema.Types.ObjectId, ref: 'User', default: null },
        approverRRHH: { type: Schema.Types.ObjectId, ref: 'User', default: null },
        estadoPapeleta: { type: String },
        estadoPapeletaE: { type: Schema.Types.ObjectId, ref: 'EstadoPapeleta'},
        fechaRegistro: { type: Date },
        // LOGS
        isIngresado: { type: Boolean, default: true },
        isPendiente: { type: Boolean, default: false },
        isAprobado: { type: Boolean, default: false },
        isVBRRHH: { type: Boolean, default: false },
        isRechazado: { type: Boolean, default: false },
        fechaIngresado: { type: Date, default: new Date() },
        fechaPendiente: { type: Date },
        fechaAprobado: { type: Date },
        fechaVBRRHH: { type: Date },
        fechaRechazado: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Papeleta", papeletaSchema);
