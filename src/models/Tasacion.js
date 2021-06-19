import { Schema, model } from "mongoose";

const tasacionSchema = new Schema({
    //Cliente
    cliente: { ref: "Customer", type: Schema.Types.ObjectId, allowEmpty: true },
    //Vehiculo
    marca: { type: String },
    chasis: { type: String },
    modelo: { type: String },
    version: { type: String },
    color: { type: String },
    anio_fabricacion: { type: String },
    kilometraje: { type: Number },
    placa: { type: String },
    //Operacion
    empresa: { type: String, default: "Autonort Nor Oriente" },
    sucursal: { type: String },
    origen_operacion: { type: String },
    metodo: { type: String },
    fecha_operacion: { type: Date },
    precio: { type: Number },
    mes: { type: Number },
    //Vendedor
    asesor_venta: { ref: "Seller", type: Schema.Types.ObjectId, allowEmpty: true },
    asesor_derivado: { type: String },
    asesor_servicio: { ref: "Seller", type: Schema.Types.ObjectId, allowEmpty: true },
    //Empleado
    empleado: { ref: "User", type: Schema.Types.ObjectId },
}, {
    timestamps: true,
    versionKey: false,
});

export default model("Tasacion", tasacionSchema);