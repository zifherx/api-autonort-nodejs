import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const entregaSchema = new Schema(
	{
		//Solicitud
		codigoInterno: { type: String, default: nanoid() },
		observacion_vendedor: { type: String },
		tramite: { type: Schema.Types.ObjectId, ref: "Record", default: null },
		fecha_entrega: { type: Date },
		hora_entrega: { type: String },
		isEquipado: { type: Boolean, default: false },
		archivo_proforma: { type: String },
		isPlacaRotativa: { type: Boolean, default: false },
		createdBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
		//ADV
		estadoRespuestaADV: { type: String },
		num_placa_rotativa: { type: String },
		motivo_rechazo: { type: String },
		observacion_adv: { type: String },
		//Tunning
		estadoRespuestaTunning: { type: String },
		fechaUnidadLista: { type: Date },
		horaUnidadLista: { type: String },
		observacion_tunning: { type: String },
		//PDS
		estadoEntrega: { type: Schema.Types.ObjectId, ref: "StatusEntrega" },
		observacion_pds: { type: String },
		isIngresado: { type: Boolean, default: true },
		isAprobadoxADV: { type: Boolean, default: false },
		isAprobadoxTunning: { type: Boolean, default: false },
		// isEquipandoUnidad: { type: Boolean, default: false },
		isAprobadoxPDS: { type: Boolean, default: false },
		// isReprogramado: { type: Boolean, default: false },
		isEntregado: { type: Boolean, default: false },
		//Fechas
		fechaIngresado: { type: Date },
		fechaAprobadoxADV: { type: Date },
		fechaAprobadoxTunning: { type: Date },
		// fechaEquipandoUnidad: { type: Date },
		fechaAprobadoxPDS: { type: Date },
		// fechaReprogramado: { type: Date },   
		fechaEntregado: { type: Date },
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export default model("Entrega", entregaSchema);
