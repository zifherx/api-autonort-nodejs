import { Schema, model } from 'mongoose'

const seguroSchema = new Schema({
    codigo_interno: { type: String },
    //Cliente
    cliente: { ref: 'Customer', type: Schema.Types.ObjectId, default: null },
    //Venta
    company: { type: String },
    sucursal: { type: String }, //actualizado
    sucursalE: { type: Schema.Types.ObjectId, ref: 'Sucursal'},
    mes: { type: Number },
    status: { type: String }, //actualizado
    estadoSeguroE: {type: Schema.Types.ObjectId, ref: 'EstadoSeguro'},
    fecha_registro: { type: Date },
    forma_pago: { type: String },
    cuotas: { type: Number, min: 1, max: 12 },
    fecha_emision: { type: Date },
    tipo_venta: { type: String },
    area_venta: { type: String },
    poliza: { type: String },
    vendedor: { ref: 'Seller', type: Schema.Types.ObjectId },
    // Logs
    isIngresado: { type: Boolean, default: true },
    fechaRegistro: { type: Date },
    isProceso: { type: Boolean, default: false },
    fechaProceso: { type: Date },
    isEmitido: { type: Boolean, default: false },
    fechaEmision: { type: Date },
    //Vehículo
    marca: { type: String },
    modelo: { type: String },
    version: { type: String },
    vehicleE: { type: Schema.Types.ObjectId, ref: 'Vehicle',default: null},
    anio: { type: String },
    anioE: { type: Schema.Types.ObjectId, ref: 'Anio', default: null},
    placa: { type: String },
    uso: { type: String },
    tipoUsoE: { type: Schema.Types.ObjectId, ref: 'TipoUso'},
    motor: { type: String },
    chasis: { type: String },
    //Aseguradora
    asesor: { type: String }, //actualizado
    asesorConexosE: { type: Schema.Types.ObjectId, ref: 'Conexos'},
    endoso: { type: String },
    entidad: { type: String },
    inicio_vigencia: { type: Date },
    fin_vigencia: { type: Date },
    suma_asegurada: { type: Number },
    aseguradora: { type: String },
    aseguradoraE: { type: Schema.Types.ObjectId, ref: 'Aseguradora', default: null},
    comision_seguro: { type: Number },
    comision_asesor: { type: Number },
    //Empleado
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Seguro', seguroSchema);