import { Schema, model } from "mongoose";

const listaEsperaSchema = new Schema(
    {
        cod_interno: { type: String },
        sucursal: { type: String },
        sucursalE: { type: Schema.Types.ObjectId, ref: "Sucursal" },
        vehiculo: { type: Schema.Types.ObjectId, ref: "Vehicle" },
        colorE: [{ type: Schema.Types.ObjectId, ref: "Colores" }],
        cantidad: { type: Number },
        orden: { type: Number },
        estado: { type: String },
        estadoE: { type: Schema.Types.ObjectId, ref: 'EstadoListaEspera' },
        cliente: { type: Schema.Types.ObjectId, ref: "Customer" },
        vendedor: { type: Schema.Types.ObjectId, ref: 'Seller'},
        anio_primer_abono: { type: Schema.Types.ObjectId, ref: "Anio" },
        mes_primer_abono: { type: Schema.Types.ObjectId, ref: "Mes" },
        grupo_abonos: [
            {
                fecha_abono: { type: Date },
                monto_abono: { type: Number, default: 0 },
            },
        ],
        precio_venta_final: { type: Number },
        tipo_venta: { type: Schema.Types.ObjectId, ref: "Financiamiento" },
        financiera: { type: Schema.Types.ObjectId, ref: "Banco", default: null},
        plan_maf: { type: Schema.Types.ObjectId, ref: "PlanMAF", default: null },
        fecha_carta_aprobacion: { type: Date },
        inicial: { type: Number, default: 0 },
        solicitudMAF: { type: Schema.Types.ObjectId, ref: "Maf", default: null },
        cuenta_epdp: { type: Boolean, default: false },
        avance_pago_contado: { type: Number, default: 0 },
        avance_pago_credito: { type: Number, default: 0 },
        cumple_politica: { type: Boolean, default: false },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
        updatedBy: [
            {
                who: { type: String },
                when: { type: Date },
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default model("ListaEspera", listaEsperaSchema);
