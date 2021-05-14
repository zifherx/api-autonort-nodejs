import { Schema, model } from "mongoose";

const deliverySchema = new Schema(
  {
    //Inmatriculado
    tramite: { ref: "Record", type: Schema.Types.ObjectId },
    //Cliente
    fecha_entrega_cliente: { type: Date },
    hora_entrega_cliente: { type: String },
    //Status
    status: {type: String},
    //Empleado
    empleado: { ref: 'User', type: Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Delivery", deliverySchema);
