"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var deliverySchema = new _mongoose.Schema({
  //Inmatriculado
  tramite: {
    ref: "Record",
    type: _mongoose.Schema.Types.ObjectId
  },
  //Cliente
  fecha_entrega_cliente: {
    type: Date
  },
  hora_entrega_cliente: {
    type: String
  },
  //Status
  status: {
    type: String
  },
  //Empleado
  empleado: {
    ref: 'User',
    type: _mongoose.Schema.Types.ObjectId
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Delivery", deliverySchema);

exports.default = _default;
//# sourceMappingURL=Delivery.js.map