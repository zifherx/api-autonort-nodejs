import { Schema, model } from "mongoose";

const tasacionSchema = new Schema({
    //Cliente
    cliente: { ref: "Customer", type: Schema.Types.ObjectId, default: null },
    //Vehiculo
    marca: { type: String },
    modelo: { type: String },
    version: { type: String },
    placa: { type: String },
    color: { type: String },
    anio_fabricacion: { type: String },
    kilometraje: { type: Number },
    tipo_transmision: { type: String },
    num_propietarios: { type: Number },
    precio: { type: Number },
    observacion: { type: String },
    //Operacion
    empresa: { type: String },
    sucursal: { type: String },
    origen_operacion: { type: Number, min: 0, max: 2 },
    metodo: { type: Number, min: 0, max: 2 },
    fecha_operacion: { type: Date },
    mes: { type: Number, min: 1, max: 12 },
    status_tasacion: { type: String, default: 'INGRESADO' },
    IsProceso: { type: Boolean, default: false },
    fechaProceso: { type: Date },
    IsRechazado: { type: Boolean, default: false },
    fechaRechazado: { type: Date },
    IsCerrado: { type: Boolean, default: false },
    fechaCerrado: { type: Date },
    comentario: { type: String },
    motivo: { type: String },
    nro_serie_nuevo_vehiculo: { type: String },
    modelo_nuevo_vehiculo: { type: String },
    //Ingreso
    ingresoPor: { type: String },
    //Vendedor
    asesor_venta: { ref: "Seller", type: Schema.Types.ObjectId, default: null },
    asesor_servicio: { ref: "AServicios", type: Schema.Types.ObjectId, default: null },
    tecnico_inspector: { ref: "Tecnico", type: Schema.Types.ObjectId, default: null },
    inspeccion_tecnica: { type: Boolean },
    //Empleado
    createdBy: { ref: "User", type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false,
});

export default model("Tasacion", tasacionSchema);