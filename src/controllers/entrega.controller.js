import Entrega from "../models/Entrega";
import Record from "../models/Record";
import User from "../models/User";
import StatusEntrega from "../models/StatusEntrega";
import mongoose from "mongoose";

const entregaController = {};

entregaController.getAll = async (req, res) => {
    try {
        const query = await Entrega.find()
            .sort({ fecha_entrega: -1 })
            .populate({
                path: "tramite",
                select: "statusFile status_tarjeta status_placa sales",
                populate: {
                    path: "sales",
                    select: "vendedor cliente auto serie_tdp ubicacion_vehiculo fecha_entrega estatus_venta fecha_cancelacion estadoVentaE",
                    populate: [
                        {
                            path: "vendedor",
                            select: "name",
                        },
                        {
                            path: "cliente",
                            select: "name",
                        },
                        {
                            path: "auto",
                            select: "cod_tdp version model",
                            populate: {
                                path: "model",
                                select: "name avatar",
                            },
                        },
                        {
                            path: "estadoVentaE",
                            select: "name",
                        },
                    ],
                },
            })
            .populate({
                path: "estadoEntregaE",
                select: "name value",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen entregas" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

entregaController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Entrega.findById(itemId)
            .populate({
                path: "tramite",
                select: "statusFile status_tarjeta status_placa sales num_titulo num_placa estadoFileE estadoRPE estadoAAPE",
                populate: [
                    {
                        path: "sales",
                        select: "vendedor cliente auto serie_tdp ubicacion_vehiculo sucursalE sucursal_venta fecha_entrega estatus_venta fecha_cancelacion estadoVentaE",
                        populate: [
                            {
                                path: "vendedor",
                                select: "name",
                            },
                            {
                                path: "cliente",
                                select: "name document typeDocument tipoDocumento cellphone email address",
                                populate: {
                                    path: "tipoDocumento",
                                    select: "name",
                                },
                            },
                            {
                                path: "auto",
                                select: "cod_tdp version model",
                                populate: {
                                    path: "model",
                                    select: "name avatar",
                                },
                            },
                            {
                                path: "estadoVentaE",
                                select: "name",
                            },
                            {
                                path: "sucursalE",
                                select: "name",
                            },
                        ],
                    },
                    {
                        path: "estadoFileE",
                        select: "name",
                    },
                    {
                        path: "estadoRPE",
                        select: "name",
                    },
                    {
                        path: "estadoAAPE",
                        select: "name",
                    },
                ],
            })
            .populate({
                path: "estadoEntregaE",
                select: "name value",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existen entregas" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

entregaController.createOne = async (req, res) => {
    const {
        codigoInterno,
        observacion_vendedor,
        tramite,
        fecha_entrega,
        hora_entrega,
        estadoEntrega,
        estadoEntregaE,
        aprobaciones,
        isEquipado,
        archivo_proforma,
        detalle_placas_rotativas,
        isPlacaRotativa,
        createdBy,
        fechaIngresado,
    } = req.body;
    // console.log(req.body);

    try {
        const obj = new Entrega({
            codigoInterno,
            observacion_vendedor,
            archivo_proforma,
            detalle_placas_rotativas,
            fecha_entrega,
            hora_entrega,
            estadoEntrega,
            isEquipado,
            isPlacaRotativa,
            fechaIngresado,
            aprobaciones,
        });

        const tramiteFound = await Record.findOne({ _id: tramite });
        if (!tramiteFound) return res.status(404).json({ message: `Tramige ${tramite} no encontrado` });

        const estadoFound = await StatusEntrega.findOne({ name: estadoEntregaE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoEntregaE} no encontrado` });

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

        obj.tramite = tramiteFound._id;
        obj.estadoEntregaE = estadoFound._id;
        obj.createdBy = userFound._id;

        // console.log('OBJ:',obj);

        const query = await obj.save();

        if (query) {
            const tramiteChanged = await Record.findByIdAndUpdate(tramiteFound._id, { pasoaEntrega: 1, isEntregado: true, fechaProgramacionPDS: fecha_entrega });
            res.json({ message: "Entrega programada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default entregaController;
