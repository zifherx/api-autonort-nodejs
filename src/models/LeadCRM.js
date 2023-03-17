import { Schema, model, Types } from "mongoose";
import { connectSCIDB } from "../config/database";

const leadSchema = new Schema(
    {
        // Settings
        codigo_interno: { type: String, required: true },
        sucursalLead: { type: String, required: true },
        sucursalLeadE: { type: Types.ObjectId, ref: "Sucursal" },
        origenData: { type: String },
        origenDataE: { type: Types.ObjectId, ref: "OrigenData" },
        marcaLead: { type: String },
        marcaLeadE: { type: Types.ObjectId, ref: "MarcaT", default: null },
        modeloLead: { type: String },
        modeloLeadE: { type: Types.ObjectId, ref: "ModeloT", default: null },
        observacion: [{ type: String }],
        createdBy: { type: Types.ObjectId, ref: "User" },
        // Finances
        tipoFinanciamiento: { type: Types.ObjectId, ref: "Financiamiento", default: null },
        bankSelected: { type: Types.ObjectId, ref: "Banco", default: null },
        initialMount: { type: Number, default: 0 },
        // Customer
        customer: { type: Types.ObjectId, ref: "Customer", default: null },
        //**************************************** */
        customer_name: { type: String },
        customer_document: { type: String },
        customer_cellphone: { type: String },
        customer_cellphone2: { type: String },
        customer_email: { type: String },
        customer_address: { type: String },
        customer_city: { type: String },
        //**************************************** */
        customerCity: { type: String },
        customerCityE: { type: Types.ObjectId, ref: "City", default: null },
        // Vehicle
        vehicleInterested: { type: Types.ObjectId, ref: "Vehicle", default: null },
        // Seller
        sellerAssigned: { type: Types.ObjectId, ref: "Seller", default: null },
        // Status
        estadoLead: { type: String, required: true, default: "INGRESADO" },
        estadoLeadE: { type: Types.ObjectId, ref: "EstadoCRM" },
        // Logs
        isIngresado: { type: Boolean, default: true },
        isNoInteresado: { type: Boolean, default: false },
        isAtendido: { type: Boolean, default: false },
        isDeclinado: { type: Boolean, default: false },
        isBooking: { type: Boolean, default: false },
        isVenta: { type: Boolean, default: false },
        fecha_ingreso: { type: Date },
        fecha_noInteresado: { type: Date },
        fecha_atendido: { type: Date },
        fecha_declinado: { type: Date },
        fecha_booking: { type: Date },
        fecha_venta: { type: Date },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

leadSchema.statics.findAllLeads = function () {
    const list = this.aggregate([
        {
            $lookup: {
                from: "marcats",
                foreignField: "_id",
                localField: "marcaLeadE",
                as: "marcaComercial",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$marcaComercial",
            },
        },
        {
            $lookup: {
                from: "customers",
                foreignField: "_id",
                localField: "customer",
                as: "cliente",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            document: 1,
                            cellphone: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$cliente",
            },
        },
        {
            $lookup: {
                from: "cities",
                foreignField: "_id",
                localField: "customerCityE",
                as: "ciudad",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$ciudad",
            },
        },
        {
            $lookup: {
                from: "sucursals",
                foreignField: "_id",
                localField: "sucursalLeadE",
                as: "sucursal",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$sucursal",
            },
        },
        {
            $lookup: {
                from: "origendatas",
                foreignField: "_id",
                localField: "origenDataE",
                as: "origen",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            hex: 1,
                            icon: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$origen",
            },
        },
        {
            $lookup: {
                from: "users",
                foreignField: "_id",
                localField: "createdBy",
                as: "creado_por",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            username: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$creado_por",
            },
        },
        {
            $lookup: {
                from: "estadocrms",
                foreignField: "_id",
                localField: "estadoLeadE",
                as: "estado",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            valor: 1,
                            description: 1,
                            estado: 1,
                            icon: 1,
                            hex: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$estado",
            },
        },
        {
            $lookup: {
                from: "vehicles",
                foreignField: "_id",
                localField: "vehicleInterested",
                as: "auto",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            codigo_interno: 1,
                            cod_tdp: 1,
                            version: 1,
                            model: 1,
                            chasis: 1,
                            estado: 1,
                        },
                    },
                    {
                        $lookup: {
                            from: 'chases',
                            foreignField: '_id',
                            localField: 'chasis',
                            as: 'chasis',
                            pipeline: [
                                {
                                    $project: {
                                        _id: 0,
                                        name: 1,
                                        estado: 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $lookup: {
                            from: 'modelots',
                            foreignField: '_id',
                            localField: 'model',
                            as: 'modelo',
                            pipeline: [
                                {
                                    $project:{
                                        _id: 0,
                                        avatar: 1,
                                        name: 1,
                                        estado: 1,
                                        marca: 1
                                    }
                                },
                                {
                                    $lookup:{
                                        from: 'marcats',
                                        foreignField: '_id',
                                        localField: 'marca',
                                        as: 'marca',
                                        pipeline: [
                                            {
                                                $project: {
                                                    _id: 0,
                                                    avatar: 1,
                                                    name: 1,
                                                    estado: 1,
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ],
            },
        },
        {
            $unwind: {
                path: "$auto",
            },
        },
    ]);

    return list;
};

leadSchema.statics.findOneLead = function (itemId) {
    const list = this.aggregate([
        {
            $match: { _id: new Types.ObjectId(itemId) },
        },
        {
            $lookup: {
                from: "marcats",
                foreignField: "_id",
                localField: "marcaLeadE",
                as: "marcaComercial",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$marcaComercial",
            },
        },
        {
            $lookup: {
                from: "customers",
                foreignField: "_id",
                localField: "customer",
                as: "cliente",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            document: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$cliente",
            },
        },
        {
            $lookup: {
                from: "cities",
                foreignField: "_id",
                localField: "customerCityE",
                as: "ciudad",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$ciudad",
            },
        },
        {
            $lookup: {
                from: "sucursals",
                foreignField: "_id",
                localField: "sucursalLeadE",
                as: "sucursal",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$sucursal",
            },
        },
        {
            $lookup: {
                from: "origendatas",
                foreignField: "_id",
                localField: "origenDataE",
                as: "origen",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            hex: 1,
                            icon: 1,
                            estado: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$origen",
            },
        },
        {
            $lookup: {
                from: "users",
                foreignField: "_id",
                localField: "createdBy",
                as: "creado_por",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            username: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$creado_por",
            },
        },
        {
            $lookup: {
                from: "estadocrms",
                foreignField: "_id",
                localField: "estadoLeadE",
                as: "estado",
                pipeline: [
                    {
                        $project: {
                            _id: 0,
                            name: 1,
                            valor: 1,
                            description: 1,
                            estado: 1,
                            icon: 1,
                            hex: 1,
                        },
                    },
                ],
            },
        },
        {
            $unwind: {
                path: "$estado",
            },
        },
    ]);

    return list;
};

export default connectSCIDB.model("LeadCRM", leadSchema);
