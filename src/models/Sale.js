import { Schema, model } from "mongoose";

const saleSchema = new Schema(
	{
		//Vendedor
		vendedor: { ref: "Seller", type: Schema.Types.ObjectId, default: null },
		//Cliente
		cliente: { ref: "Customer", type: Schema.Types.ObjectId, default: null },
		//Vehiculo
		auto: { ref: "Vehicle", type: Schema.Types.ObjectId, default: null },
		serie_tdp: { type: String, default: "" },
		color: { type: String }, //actualizado
		precio: { type: Number, default: 0 },
		anio_fabricacion: { type: String }, //actualizado
		anio_modelo: { type: String }, //actualizado
		ubicacion_vehiculo: { type: String }, //actualizado
		fecha_ciguena: { type: Date },
		fecha_entrega: { type: Date },
		estatus_vehiculo: { type: String }, //actualizado
		//Nuevos Campos ----------------------------------------------------------------------
		colorE: { type: Schema.Types.ObjectId, ref: "Colores", default: null },
		anioFabricacionE: { type: Schema.Types.ObjectId, ref: "Anio", default: null },
		anioModeloE: { type: Schema.Types.ObjectId, ref: "Anio", default: null },
		ubicacionVehiculoE: { type: Schema.Types.ObjectId, ref: "Ubicacion", default: null },
		estadoVehiculoE: { type: Schema.Types.ObjectId, ref: "Condicion", default: null },
		financiamientoE: { type: Schema.Types.ObjectId, ref: "Financiamiento", default: null },
		bancoE: { type: Schema.Types.ObjectId, ref: "Banco", default: null },
		solicitudMAF: { type: Schema.Types.ObjectId, ref: "Maf", default: null },
		adelantosE: [{ fechaAdelanto: { type: Date }, importeAdelanto: { type: Number } }],
        campaniasTDPE: [ {type: Schema.Types.ObjectId ,ref: 'Campania' }],
		ofertaTDPE: [ {type: String}],
        campaniasMafE: [ {type: Schema.Types.ObjectId ,ref: 'Campania' }],
		ofertaMafE: [ { type: String}],
        isToyotaValue: { type: Boolean, default: false },
        arrayToyotaValues: [{ type: String }],
        tipoOperacionE: { type: Schema.Types.ObjectId, ref: 'Operacion', default: null },
        createdBy: { type: Schema.Types.ObjectId, ref: 'User', default: null },
        tipoComprobanteE: { type: Schema.Types.ObjectId, ref: 'TipoComprobante', default: null },
		sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal", default: null },
        estadoVentaE: { type: Schema.Types.ObjectId, ref: 'Situacion', default: null},
        estadoFacturacionE: { type: Schema.Types.ObjectId, ref: 'StatusFacturacion', default: null},
		accesoriosE: [{ type: Schema.Types.ObjectId, ref: 'AccesorioE' }],
        pasoTramiteE: { type: Boolean, default: false },
		//------------------------------------------------------------------------------------
		//Financiamiento
		tipo_financiamiento: { type: String }, //actualizado
		entidad_bancaria: { type: String }, //actualizado
		sustento: { type: String },
		fecha_sustento: { type: Date },
		monto_aprobado: { type: Number },
		oficina: { type: String },
		ejecutivo: { type: String },
		montoAdelanto1: { type: Number },
		fechaAdelanto1: { type: Date },
		montoAdelanto2: { type: Number },
		fechaAdelanto2: { type: Date },
		montoAdelanto3: { type: Number },
		fechaAdelanto3: { type: Date },
		montoAdelanto4: { type: Number },
		fechaAdelanto4: { type: Date },
		montoAdelanto5: { type: Number },
		fechaAdelanto5: { type: Date },
		montoAdelanto6: { type: Number },
		fechaAdelanto6: { type: Date },
		montoAdelanto7: { type: Number },
		fechaAdelanto7: { type: Date },
		montoAdelanto8: { type: Number },
		fechaAdelanto8: { type: Date },
		//Campaña
		campanias: [{ ref: "Campaign", type: Schema.Types.ObjectId }], //actualizado
		adicional: [{ ref: "Adicional", type: Schema.Types.ObjectId }], //actualizado
		descuento_autonort: { type: Number, default: 0 },
		acuerdoTDP: { type: Number, default: 0},
		observacion_adv: { type: String },
		//Accesorio
		accesorios: [{ ref: "Props", type: Schema.Types.ObjectId }],
		accesoriosE: [{ref: 'AccesorioE', type: Schema.Types.ObjectId}], //actualizado
		condicion_accesorios: { type: String },
		condicionAccesorioE: { ref: 'CondicionAccesorio', type: Schema.Types.ObjectId}, //actualizado
		//Facturacion TDP
		fecha_facturacion_tdp: { type: Date },
		estatus_facturacion: { type: String }, //actualizado
		monto_facturado: { type: Number },
		//Venta
		tipo_operacion: { type: String }, //actualizado
		tipo_comprobante: { type: String }, //actualizado
		nro_comprobante: { type: String },
		fecha_comprobante: { type: Date },
		estatus_venta: { type: String }, //actualizado
		sucursal_venta: { type: String }, //actualizado
		fecha_cancelacion: { type: Date },
		//Empleado
		empleado: { ref: "User", type: Schema.Types.ObjectId }, //actualizado
		//Está en Tramite
		pasoaTramite: { type: Number, default: 0 }, //actualizado
		isReportado: { type: Boolean, default: false },
		fechaReporte: { type: Date },
		mesReportado: { type: Number },
		//LOGS SITUACION
		isCreadoS: { type: Boolean, default: true },
		fechaCreacionS: { type: Date },
		isLibreS: { type: Boolean, default: false },
		fechaLibreS: { type: Date },
		isDevolucionS: { type: Boolean, default: false },
		fechaDevolucionS: { type: Date },
		isCreditoS: { type: Boolean, default: false },
		fechaCreditoS: { type: Date },
		isTestDrive: { type: Boolean, default: false },
		fechaTestDriveS: { type: Date },
		isBloqueadoS: { type: Boolean, default: false },
		fechaBloqueadoS: { type: Date },
		isStandByS: { type: Boolean, default: false },
		fechaStandByS: { type: Date },
		isReservadoS: { type: Boolean, default: false },
		fechaReservadoS: { type: Date },
		isReservadoCS: { type: Boolean, default: false },
		fechaReservadoCS: { type: Date },
		isReservadoLS: { type: Boolean, default: false },
		fechaReservadoLS: { type: Date },
		isEsperaS: { type: Boolean, default: false },
		fechaEsperaS: { type: Date },
		isFacturadoS: { type: Boolean, default: false },
		fechaFacturadoS: { type: Date },
		isAnticipoS: { type: Boolean, default: false },
		fechaAnticipoS: { type: Date },
		isDesembolsarS: { type: Boolean, default: false },
		fechaDesembolsarS: { type: Date },
		isExhibicionS: { type: Boolean, default: false },
		fechaExhibicionS: { type: Date },
		isCanceladoS: { type: Boolean, default: false },
		fechaCanceladoS: { type: Date },
		isCanceladoPTS: { type: Boolean, default: false },
		fechaCanceladoPTS: { type: Date },
		isEPDPS: { type: Boolean, default: false },
		fechaEPDPS: { type: Date },
		//LOGS CONDICION
		// isLibreC: { type: Boolean, default: false },
		// fechaLibreC: { type: Date },
		// isConseguirC: { type: Boolean, default: false },
		// fechaConseguirC: { type: Date },
		// isExhibicionC: { type: Boolean, default: false },
		// fechaExhibicionC: { type: Date },
		// isBloqueadoC: { type: Boolean, default: false },
		// fechaBloqueadoC: { type: Date },
		// isAsignadoC: { type: Boolean, default: false },
		// fechaAsignadoC: { type: Date },
		//LOGS UBICACION
		// isProduccionU: { type: Boolean, default: false },
		// fechaProduccionU: { type: Date },
		// isTransitoU: { type: Boolean, default: false },
		// fechaTransitoU: { type: Date },
		// isRodadoU: { type: Boolean, default: false },
		// fechaRodadoU: { type: Date },
		// isAduanasU: { type: Boolean, default: false },
		// fechaAduanasU: { type: Date },
		// isNacionalizacionU: { type: Boolean, default: false },
		// fechaNacionalizacionU: { type: Date },
		// isTranspesaU: { type: Boolean, default: false },
		// fechaTranspesaU: { type: Date },
		// isTDPU: { type: Boolean, default: false },
		// fechaTDPU: { type: Date },
		// isCiguenaU: { type: Boolean, default: false },
		// fechaCiguenaU: { type: Date },
		// isCiguenaTarapotoU: { type: Boolean, default: false },
		// fechaCiguenaTarapotoU: { type: Date },
		// isCiguenaJaenU: { type: Boolean, default: false },
		// fechaCiguenaJaenU: { type: Date },
		// isJaenU: { type: Boolean, default: false },
		// fechaJaenU: { type: Date },
		// isTarapotoU: { type: Boolean, default: false },
		// fechaTarapotoU: { type: Date },
		// isTrujilloU: { type: Boolean, default: false },
		// fechaTrujilloU: { type: Date },
		// isEntregadoU: { type: Boolean, default: false },
		// fechaEntregadoU: { type: Date },
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export default model("Sale", saleSchema);
