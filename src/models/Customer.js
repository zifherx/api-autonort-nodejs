import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const customerSchema = new Schema(
    {
        name: { type: String },
        typeDocument: { type: Number, min: 0, max: 2 },
        tipoDocumento: { ref: "TipoDocumento", type: Types.ObjectId }, //Actualizado
        document: { type: String },
        representanteLegal: { type: String },
        documentoRepresentante: { type: String },
        cellphone: { type: String },
        cellphone2: { type: String, maxlength: 9 },
        email: { type: String },
        address: { type: String },
        empleado: { type: Types.ObjectId, ref: "User", default: null },
        //RUC
        condicion: { type: String },
        departamento: { type: String },
        provincia: { type: String },
        distrito: { type: String },
        estado: { type: String },
        ubigeo_sunat: { type: String },
        direccion_completa: { type: String },
        createdBy: { type: Types.ObjectId, ref: "User" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default connectSCIDB.model("Customer", customerSchema);
