import Maf from "../models/Maf";
import Sucursal from "../models/Sucursal";
import Customer from "../models/Customer";
import Seller from "../models/Seller";
import Anio from "../models/Anio";
import Vehicle from "../models/Vehicle";
import User from "../models/User";
import PlanMAF from "../models/PlanMAF";
import TipoUso from "../models/TipoUso";
import StatusMafRequest from "../models/StatusMafRequest";
import "dotenv/config";
import fs from "fs";
import nodemailer from "nodemailer";
import path from "path";
import download from "download";
import AdmZip from "adm-zip";
import twilio from "twilio";

const mafController = {};

// Nuevos

mafController.createOne = async (req, res) => {
    const {
        nro_solicitud,
        fecha_ingreso,
        sucursal,
        sucursalE,
        customer,
        fecha_nacimiento_titular,
        estado_civil,
        observaciones_ingreso,
        conyuge,
        document_conyuge,
        fecha_nacimiento_conyuge,
        lugar_trabajo,
        ingreso_promedio,
        cuota_inicial,
        seller,
        car,
        anioFabE,
        anioModE,
        pvp,
        planMAF,
        tipoUsoE,
        primer_status_request,
        estadoSolicitudMAF,
        fechaIngresoSolicitud,
        createdBy,
    } = req.body;
    // console.log(req.body);
    const evidencias = req.files;

    try {
        if (evidencias.length == 0) return res.status(404).json({ message: "No se cargó ningún archivo" });
        if (evidencias.length > 50) return res.status(404).json({ message: "Excedió el límite de archivos" });

        // evidencias.map((a) => {
        //     archivos.push(a.location);
        // });

        const obj = new Maf({
            nro_solicitud,
            fecha_ingreso,
            sucursal,
            fecha_nacimiento_titular,
            estado_civil,
            lugar_trabajo,
            observaciones_ingreso,
            conyuge,
            document_conyuge,
            fecha_nacimiento_conyuge,
            ingreso_promedio,
            cuota_inicial,
            pvp,
            evidencias: evidencias.map((a) => a.location),
            primer_status_request,
            fechaIngresoSolicitud,
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        obj.sucursalE = sucursalFound._id;

        const customerFound = await Customer.findOne({ name: customer });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${customer} no encontrado` });
        obj.customer = customerFound._id;

        const sellerFound = await Seller.findOne({ name: seller });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${seller} no encontrado` });
        obj.seller = sellerFound._id;

        const carFound = await Vehicle.findOne({ cod_tdp: car });
        if (!carFound) return res.status(404).json({ message: `Vehículo ${car} no encontrado` });
        obj.car = carFound._id;

        const anioFFound = await Anio.findOne({ name: anioFabE });
        if (!anioFFound) return res.status(404).json({ message: `Año Fab ${anioFabE} no encontrado` });
        obj.anioFabE = anioFFound._id;

        const anioMFound = await Anio.findOne({ name: anioModE });
        if (!anioMFound) return res.status(404).json({ message: `Año Mod ${anioModE} no encontrado` });
        obj.anioModE = anioMFound._id;

        const planMafFound = await PlanMAF.findOne({ name: planMAF });
        if (!planMafFound) return res.status(404).json({ message: `Plan ${planMAF} no encontrado` });
        obj.planMAF = planMafFound._id;

        const tipoUsoFound = await TipoUso.findOne({ name: tipoUsoE });
        if (!tipoUsoFound) return res.status(404).json({ message: `Tipo de uso ${tipoUsoE} no encontrado` });
        obj.tipoUsoE = tipoUsoFound._id;

        const estadoFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });
        obj.estadoSolicitudMAF = estadoFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        obj.createdBy = userFound._id;
        obj.userCreator = userFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Solicitud creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllByCreador = async (req, res) => {
    const { primer_status_request, createdBy } = req.body;
    // console.log(req.body);

    try {
        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ mesage: `Usuario ${createdBy} no encontrado` });

        const query = await Maf.find({
            $or: [
                {
                    primer_status_request: { $regex: ".*" + primer_status_request + ".*" },
                    createdBy: userFound._id,
                },
                {
                    primer_status_request: { $regex: ".*" + primer_status_request + ".*" },
                    userCreator: userFound._id,
                },
            ],
        })
            .sort({ fecha_ingreso: -1 })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "customer", select: "name document" })
            .populate({ path: "estadoSolicitudMAF", select: "name" })
            .populate({ path: "car", select: "cod_tdp model version", populate: { path: "model", select: "avatar name" } })
            .populate({ path: "seller", select: "name" });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllBySucursal = async (req, res) => {
    const { sucursalE, startDate, endDate } = req.body;
    // console.log(req.body);
    let query = null;

    try {
        if (sucursalE == "") {
            query = await Maf.find({
                sucursal: { $regex: ".*" + sucursalE + ".*" },
                fecha_ingreso: { $gte: new Date(startDate), $lte: new Date(endDate) },
            })
                .sort({ fecha_ingreso: -1 })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "seller", select: "name" })
                .populate({ 
                    path: "car", 
                    select: "model cod_tdp version",
                    populate: {
                        path: 'model',
                        select: 'avatar name marca',
                        populate: {
                            path: 'marca',
                            select: 'name avatar'
                        }
                    }
                })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "estadoSolicitudMAF", select: "name" })
                .populate({ path: "estadoAprobacionJefatura", select: "name" });
        } else {
            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

            query = await Maf.find({
                $or: [
                    {
                        sucursalE: sucursalFound._id,
                        fecha_ingreso: { $gte: new Date(startDate), $lte: new Date(endDate) },
                    },
                    {
                        sucursal: { $regex: ".*" + sucursalE + ".*" },
                        fecha_ingreso: { $gte: new Date(startDate), $lte: new Date(endDate) },
                    },
                ],
            })
                .sort({ fecha_ingreso: -1 })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "seller", select: "name" })
                .populate({ 
                    path: "car", 
                    select: "model cod_tdp version",
                    populate: {
                        path: 'model',
                        select: 'avatar name marca',
                        populate: {
                            path: 'marca',
                            select: 'name avatar'
                        }
                    }
                })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "seller", select: "name" })
                .populate({ path: "estadoSolicitudMAF", select: "name" })
                .populate({ path: "estadoAprobacionJefatura", select: "name" });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllByEstado = async (req, res) => {
    const { estado, sucursalE, startDate, endDate } = req.body;
    let query = null;
    // console.log(object);

    try {
        if (startDate && endDate) {
            query = await Maf.find({
                sucursal: { $regex: ".*" + sucursalE + ".*" },
                primer_status_request: { $regex: ".*" + estado + ".*" },
                fecha_ingreso: { $gte: new Date(startDate), $lte: new Date(endDate) },
            })
                .sort({ fecha_ingreso: -1 })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "seller", select: "name email telefono" })
                .populate({ path: "car", select: "model cod_tdp version", populate: { path: "model", select: "name avatar marca", populate: { path: "marca", select: "name avatar" } } })
                .populate({ path: "estadoSolicitudMAF", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "anioFabE", select: "name" })
                .populate({ path: "anioModE", select: "name" })
                .populate({ path: "estadoAprobacionJefatura", select: "name" })
                .populate({ path: "userApprove", select: "name username email phone" })
                .populate({ path: "userCreator", select: "name username" })
                .populate({ path: "createdBy", select: "name username" });
        } else {

            const estadoFound = await StatusMafRequest.findOne({name: estado});

            query = await Maf.find({
                $or: [
                    {
                        sucursal: { $regex: ".*" + sucursalE + ".*" },
                        primer_status_request: { $regex: ".*" + estado + ".*" },
                    },
                    {
                        sucursal: { $regex: ".*" + sucursalE + ".*" },
                        estadoSolicitudMAF: estadoFound._id,
                    },
                ],
            })
                .sort({ fecha_ingreso: -1 })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "seller", select: "name email telefono" })
                .populate({ path: "car", select: "model cod_tdp version", populate: { path: "model", select: "name avatar marca", populate: { path: "marca", select: "name avatar" } } })
                .populate({ path: "estadoSolicitudMAF", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "anioFabE", select: "name" })
                .populate({ path: "anioModE", select: "name" })
                .populate({ path: "estadoAprobacionJefatura", select: "name" })
                .populate({ path: "userApprove", select: "name username email phone" })
                .populate({ path: "userCreator", select: "name username" })
                .populate({ path: "createdBy", select: "name username" });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        }else{
            return res.status(404).json({message: `No existen solicitudes ${estado}`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getOneById = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findById(mafId)
            .populate({ path: "customer", select: "name document cellphone email typeDocument" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "seller", select: "name email cellphone" })
            .populate({ path: "estadoSolicitudMAF", select: "name" })
            .populate({ path: "estadoAprobacionJefatura", select: "name" })
            .populate({ path: "userCreator", select: "name username" })
            .populate({ path: "createdBy", select: "name username" })
            .populate({
                path: "car",
                select: "cod_tdp model version",
                populate: {
                    path: "model",
                    select: "name avatar marca",
                    populate: {
                        path: "marca",
                        select: "name avatar",
                    },
                },
            })
            .populate({ path: "anioFabE", select: "name" })
            .populate({ path: "anioModE", select: "name" })
            .populate({ path: "planMAF", select: "name" })
            .populate({ path: "tipoUsoE", select: "name" });

        if (query) {
            res.json({ one: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.updateRequestStateById = async (req, res) => {
    const { primer_status_request, estadoSolicitudMAF, observacion, motivo, isEvaluacion, fechaEvaluacion, isObservado, fechaObservado, isRechazado, fechaRechazado } = req.body;
    const { mafId } = req.params;

    let query = null;

    try {
        const mafStatusFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
        if (!mafStatusFound) return res.status(503).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });

        if (estadoSolicitudMAF == "EN EVALUACIÓN") {
            query = await Maf.findByIdAndUpdate(mafId, {
                primer_status_request,
                estadoSolicitudMAF: mafStatusFound._id,
                observacion,
                isEvaluacion,
                fechaEvaluacion,
            });
        } else if (estadoSolicitudMAF == "OBSERVADO") {
            query = await Maf.findByIdAndUpdate(mafId, {
                primer_status_request,
                estadoSolicitudMAF: mafStatusFound._id,
                observacion,
                isObservado,
                fechaObservado,
            });
        } else if (estadoSolicitudMAF == "RECHAZADO") {
            query = await Maf.findByIdAndUpdate(mafId, {
                primer_status_request,
                estadoSolicitudMAF: mafStatusFound._id,
                motivo,
                isRechazado,
                fechaRechazado,
            });
        }

        if (query) {
            res.json({ message: "Solicitud MAF actualizada con éxito" });
        } else {
            return res.status(404).json({ message: "No se encontró la solicitud MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.approveRequestStateById = async (req, res) => {
    const { primer_status_request, estadoSolicitudMAF, fecha_aprobacion, carta_aprobacion, observacion, isAprobado, fechaAprobado, userApprove } = req.body;
    const { mafId } = req.params;
    const docuAprobacion = req.files;

    // console.log(req.body);
    // console.log(docuAprobacion);

    if (docuAprobacion.length == 0) return res.status(404).json({ message: "No se adjuntó ningún documento" });

    try {
        const estadoFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });

        const userFound = await User.findOne({ username: userApprove });
        if (!userFound) return res.status(404).json({ message: `Usuario ${userApprove} no encontrado` });

        const query = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            estadoSolicitudMAF: estadoFound._id,
            fecha_aprobacion,
            carta_aprobacion,
            observacion,
            isAprobado,
            fechaAprobado,
            carta_evidencia: docuAprobacion[0].location,
            cronograma_pagos: docuAprobacion[1].location,
            userApprove: userFound._id,
        });

        if (query) {
            res.json({ message: "Solicitud actualizada con éxito" });
        } else {
            return res.status(404).json({ message: `No se logró actualizar solicitud ${mafId}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.reenrollRequestStateById = async (req, res) => {
    const { primer_status_request, estadoSolicitudMAF, observaciones_ingreso, isReingresado, fechaReingreso } = req.body;
    const { mafId } = req.params;
    const adicionales = req.files;

    if (adicionales.length == 0) return res.status(404).json({ message: "No se adjuntó ningún documento" });
    if (adicionales.length > 30) return res.status(404).json({ message: "Se excedió el límite de archivos" });

    try {
        const estadoFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });

        const query = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            estadoSolicitudMAF: estadoFound._id,
            observaciones_ingreso,
            isReingresado,
            fechaReingreso,
            files_adicionales: adicionales.map((a) => a.location),
        });

        if (query) {
            res.json({ message: "Solicitud actualizada con éxito" });
        } else {
            return res.status(404).json({ message: `No se logró actualizar solicitud ${mafId}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.deleteOneById = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findByIdAndDelete(mafId);

        if (query) {
            res.json({ message: "Solicitud MAF eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No se encontró solicitud" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

// Anteriores1
/*

mafController.getAll = async (req, res) => {
    try {
        const query = await Maf.find()
            .populate({ path: "customer", select: "name document cellphone email" })
            .populate({ path: "seller", select: "name avatar sucursal marca" })
            .populate({
                path: "car",
                select: "cod_tdp model version",
                populate: {
                    path: "model",
                    select: "avatar name marca",
                    populate: {
                        path: "marca",
                        select: "avatar name",
                    },
                },
            })
            .populate({ path: "userCreator", select: "name username avatar" })
            .populate({ path: "userApprove", select: "name username avatar" });
        // console.log(query)
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getOneById = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findById(mafId)
            .populate({ path: "customer", select: "name document cellphone email" })
            .populate({ path: "seller", select: "name avatar sucursal marca" })
            .populate({
                path: "car",
                select: "cod_tdp model version",
                populate: {
                    path: "model",
                    select: "avatar name marca",
                    populate: {
                        path: "marca",
                        select: "avatar name",
                    },
                },
            })
            .populate({ path: "userCreator", select: "name username avatar" })
            .populate({ path: "userApprove", select: "name username avatar" });
        // console.log(query)
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existen solicitud" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllByVendedor = async (req, res) => {
    const { vendedor } = req.body;
    try {
        const sellerFound = await Seller.find({ name: vendedor });
        const query = await Maf.find({ seller: sellerFound.map((a) => a._id) }).populate("customer seller car userCreator userApprove");
        if (query.length > 0) {
            res.json({ nro_request: query.length, requests: query });
        } else {
            return res.status(404).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getAllBySucursalyFecha = async (req, res) => {
    const { sucursal, startDate, endDate } = req.body;
    try {
        const query = await Maf.find({
            sucursal: { $regex: ".*" + sucursal + ".*" },
            fecha_ingreso: {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            },
        })
            .sort({ fecha_ingreso: -1 })
            .populate({
                path: "customer",
                select: "name document",
            })
            .populate({
                path: "seller",
                select: "name document avatar sucursalE",
                populate: {
                    path: "sucursalE",
                    select: "name",
                },
            })
            .populate({
                path: "car",
                select: "model cod_tdp version chasis",
                populate: [
                    { path: "chasis", select: "name" },
                    { path: "model", select: "name avatar marca", populate: { path: "marca", select: "name avatar" } },
                ],
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen solicitudes MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.obtenerRequestbyStatus = async (req, res) => {
    const { status, pasoaHot, sucursal } = req.body;
    try {
        const query = await Maf.find({ primer_status_request: status, pasoaHot: pasoaHot, sucursal: sucursal }).populate("car seller customer");
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: `No se encuentran solicitudes en ${status}` });
        }
    } catch (err) {
        console.log(err.response);
        return res.status(503).json({ message: err.message });
    }
};

mafController.createRequest = async (req, res) => {
    const {
        nro_solicitud,
        fecha_ingreso,
        hora_ingreso,
        sucursal,
        cliente,
        estado_civil,
        lugar_trabajo,
        conyuge,
        document_conyuge,
        fecha_nacimiento_conyuge,
        ingreso_promedio,
        cuota_inicial,
        vendedor,
        vehiculo,
        anio_fab,
        anio_mod,
        pvp,
        plan,
        tipo_uso,
        primer_status_request,
        observaciones_ingreso,
        userCreator,
    } = req.body;
    const files = req.files;

    let filePaths = [];

    try {
        if (files.length === 0) return res.status(400).json({ message: "Faltan los documentos" });

        files.map((file) => {
            filePaths.push(file.location);
        });

        const obj = new Maf({
            nro_solicitud,
            fecha_ingreso,
            hora_ingreso,
            sucursal,
            estado_civil,
            lugar_trabajo,
            conyuge,
            document_conyuge,
            fecha_nacimiento_conyuge,
            ingreso_promedio,
            cuota_inicial,
            anio_fab,
            anio_mod,
            pvp,
            plan,
            tipo_uso,
            evidencias: filePaths,
            primer_status_request,
            observaciones_ingreso,
        });

        let clienteEncontrado = await Customer.find({ name: cliente });
        obj.customer = clienteEncontrado.map((a) => a._id);

        let vendedorEncontrado = await Seller.find({ name: vendedor });
        obj.seller = vendedorEncontrado.map((b) => b._id);

        let vehiculoEncontrado = await Vehicle.find({ cod_tdp: vehiculo });
        obj.car = vehiculoEncontrado.map((c) => c._id);

        let usuarioCreador = await User.find({ username: userCreator });
        obj.userCreator = usuarioCreador.map((d) => d._id);

        const objCreated = await obj.save();

        if (objCreated) {
            res.json({ message: "Solicitud MAF creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.actualizarRequest = async (req, res) => {
    const { mafId } = req.params;
    const { primer_status_request, fecha_respuesta, observacion, motivo, userApprove } = req.body;

    try {
        const userFound = await User.find({ username: userApprove });
        const obj = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            motivo,
            userApprove: userFound.map((a) => a._id),
        });
        if (obj) {
            res.json({ message: "Solicitud MAF actualizada con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.agregarNewDocuments = async (req, res) => {
    const { mafId } = req.params;
    const { reingresado, fecha_ingreso, primer_status_request } = req.body;
    const adicionales = req.files;
    // console.log(req)
    let filePaths = [];

    try {
        if (adicionales.length === 0) return res.status(400).json({ message: "Falta los Documentos" });

        adicionales.map((file) => {
            filePaths.push(file.location);
        });

        const query = await Maf.findByIdAndUpdate(mafId, {
            isReingresado: reingresado,
            fecha_ingreso,
            primer_status_request,
            files_adicionales: filePaths,
        });

        if (query) {
            res.json({ message: "Documentos agregados con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Solicitud a modificar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.actualizarReqAprobada = async (req, res) => {
    const { mafId } = req.params;
    const { primer_status_request, fecha_respuesta, observacion, fecha_aprobacion, carta_aprobacion } = req.body;
    const carta = req.file;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            fecha_aprobacion,
            carta_aprobacion,
            carta_evidencia: carta.location,
        });

        if (query) {
            res.json({ message: "Solicitud MAF aprobada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Solicitud a aprobar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.requestaHot = async (req, res) => {
    const { mafId } = req.params;
    const { pasoaHot } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { pasoaHot });
        if (query) {
            res.json({ message: "Solicitud MAF se actualizó con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.cambioStatusByMaf = async (req, res) => {
    const { mafId } = req.params;
    const { tercer_status_request } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { tercer_status_request });
        if (query) {
            res.json({ message: `Cambio de Status a ${tercer_status_request} con éxito` });
        } else {
            return res.status(404).json({ messsage: "No existe Solicitud a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
};

mafController.deleteRequest = async (req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findByIdAndRemove(mafId);
        if (query) {
            res.json({ message: "Solicitud eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe la solicitud a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.enviarCorreoSolicitud = async (req, res) => {
    const { to, cc, subject, text, html } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "mail.autonortnor.com",
            port: "465",
            secure: true,
            auth: {
                user: "sistemadv@autonortnor.com",
                pass: "k=q0mdgLo,QS",
            },
        });

        let email = await transporter.sendMail({
            from: '"Sistema ADV 👻" <sistemadv@autonortnor.com>',
            to: to,
            cc: [cc, "frojas@autonortnor.com.pe"],
            subject: subject,
            text: text,
            html: html,
        });

        let respuesta = email.response.split(" ");
        // console.log(respuesta)
        // console.log(respuesta[1])
        if (respuesta[1] == "OK") {
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));
            res.json({ message: "Mensaje enviado", info: email.messageId, retardo: email.envelopeTime, respuesta: email.response });
        } else {
            return res.status(500).json({ message: "Error al enviar correo" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.downloadAndZipeo = async (req, res) => {
    const { files } = req.body;

    try {
        await Promise.all(files.map((url) => download(url, path.resolve("src/uploads"))));

        console.log("Download completed!");

        var dir = path.resolve("src/uploads");
        var uploadDir = fs.readdirSync(dir);

        const zip = new AdmZip();

        for (var i = 0; i < uploadDir.length; i++) {
            zip.addLocalFile(dir + "/" + uploadDir[i]);
        }

        const downloadName = `${Date.now()}.zip`;

        const data = zip.toBuffer();

        zip.writeZip(dir + "/" + downloadName);

        res.json({ url: downloadName });

        // delFiles();
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.descargaYZip = async (req, res) => {
    const { links } = req.body;
    const fileZip = req.file;

    await Promise.all(links
        .map(url => download(url, path.resolve('src/uploads'))));

    console.log('Download completed!');
    console.log(fileZip);
};

mafController.sendMessageWsp = async (req, res) => {
    const { placa, sucursal, servicio, mejora, calificacion, destino } = req.body;
    const accountSid = "AC5145f2cf5442844fa805e987f09751c6";
    const authToken = "42d0808b60a3917dddcf06879e56ff4e";

    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            // body: 'Se registró una calificación en la siguiente encuesta.
            Cliente con placa: {{1}} perteneciente a la sucursal: {{2}} que realizó el servicio de: {{3}}, sugiere mejorar en: {{4}}.
            Su calificación es: {{5}}'
            body: `Se registró una calificación en la siguiente encuesta. \nCliente con placa: *${placa}* perteneciente a la sucursal: *${sucursal}* que realizó el servicio de: *${servicio}*, sugiere mejorar en: *${mejora}*. \nSu calificación es: *${calificacion}*`,
            // to: 'whatsapp:+51924063422', // Fernando Rojas
            to: "whatsapp:+51" + destino, // Paul holguin
            // to: '+51989927794', // Paul holguin
            // to: '+51924063422',
            from: "whatsapp:+18482856322", // From a valid Twilio number
            // from: '+18482856322',
        })
        .then((message) => {
            // console.log(message)
            res.json({ ok: "Message sent", sid: message.sid, status: message.status });
        });
};

mafController.getCountAll = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

mafController.getCountByStatus = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByStatus = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$primer_status_request",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByVendedor = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$seller",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getRankingByVehicle = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$car",
                    num_solicitudes: { $sum: 1 },
                },
            },
            {
                $sort: { num_solicitudes: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Solicitudes aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getSolicitudesBySeller = async (req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = { seller: sellerFound._id, fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) } };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$primer_status_request",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.getVehiclesBySeller = async (req, res) => {
    const { vendedor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = {
            seller: sellerFound._id,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Maf.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$car",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

mafController.testRanking = async (req, res) => {
    // const { sucursal,marca, start, end } = req.body;
    const { marca } = req.body;

    try {
        const query = await Maf.find({
            "car.model.marca.name": marca,
        });
        // const filtro = {
        //     sucursal: sucursal,
        //     "car.model.marca.name" : marca,
        //     fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        // };

        console.log(query);

        if (query.length > 0) {
            res.json({ deploy: query, total: query.length });
        } else {
            return res.status(404).json({ message: "No existen filtros" });
        }

        // const query = await Maf.aggregate([{
        //     $match: filtro
        // }, {
        //     $group: {
        //         _id: "$primer_status_request",
        //         num_solicitudes: { $sum: 1 }
        //     }
        // }, {
        //     $sort: { num_solicitudes: -1 }
        // }]);

        // if (query.length > 0) {
        //     res.json({ total: query.length, ranking: query });
        // } else {
        //     return res.status(201).json({ message: 'No existen Solicitudes aún' });
        // }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
*/

mafController.getAllSolicitudesAprobadas = async (req, res) => {
    const { customer, estado, start, end } = req.body;

    try {
        const customerFound = await Customer.findOne({ name: customer });

        const query = await Maf.find({
            customer: customerFound._id,
            primer_status_request: estado,
        })
            .select("nro_solicitud fecha_ingreso customer seller car fecha_aprobacion carta_evidencia primer_status_request")
            .populate({
                path: "customer",
                select: "name",
            })
            .populate({
                path: "seller",
                select: "name",
            })
            .populate({
                path: "car",
                select: "model cod_tdp version",
                populate: {
                    path: "model",
                    select: "name avatar marca",
                    populate: {
                        path: "marca",
                        select: "name avatar",
                    },
                },
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No se encontraron solicitudes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default mafController;
