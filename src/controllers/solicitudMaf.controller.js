import Maf from "../models/Maf";
import User from "../models/User";
import Sucursal from "../models/Sucursal";
import Customer from "../models/Customer";
import Seller from "../models/Seller";
import Vehicle from "../models/Vehicle";
import Anio from "../models/Anio";
import PlanMAF from "../models/PlanMAF";
import TipoUso from "../models/TipoUso";
import StatusMafRequest from "../models/StatusMafRequest";
import Campania from "../models/Campania";

export const solicitudMafController = {
    getAll: async (req, res) => {
        try {
            const query = await Maf.find()
                .sort({ fecha_ingreso: -1 })
                .populate({
                    path: "car",
                    select: "cod_tdp model version",
                    populate: {
                        path: "model",
                        select: "avatar name",
                    },
                })
                .populate({ path: "seller", select: "name avatar" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "estadoSolicitudMAF", select: "name value valor" })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "createdBy", select: "name username" });

            if (query.length == 0) return res.status(404).json({ message: `No existen Solicitudes MAF` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
    },

    getAllByCreator: async (req, res) => {
        const { primer_status_request, estadoSolicitud, createdBy } = req.body;

        try {
            const userFound = await User.findOne({ username: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

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
                .populate({
                    path: "car",
                    select: "cod_tdp model version",
                    populate: {
                        path: "model",
                        select: "avatar name",
                    },
                })
                .populate({ path: "seller", select: "name avatar" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "estadoSolicitudMAF", select: "name value valor" })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "createdBy", select: "name username" });

            if (query.length == 0) return res.status(404).json({ message: `Usuario ${createdBy}  no cuenta con solicitudes MAF` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
    },

    getAllFromDatesSedeByEstado: async (req, res) => {
        const { sucursalE, startDate, endDate, estadoMAF } = req.body;
        // console.log(req.body);
        let query = null;

        try {
            query = await Maf.find({
                // sucursal: { $regex: ".*" + sucursalE + ".*" },
                sucursal: { $in: sucursalE },
                fecha_ingreso: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate),
                },
                primer_status_request: { $ne: estadoMAF },
            })
                .sort({ fecha_ingreso: -1 })
                .populate({
                    path: "car",
                    select: "cod_tdp model version",
                    populate: {
                        path: "model",
                        select: "avatar name",
                    },
                })
                .populate({ path: "seller", select: "name avatar" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "estadoSolicitudMAF", select: "name value valor" })
                .populate({ path: "customer", select: "name document" })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "createdBy", select: "name username" });

            if (query.length == 0) return res.status(404).json({ message: `No existen solicitudes MAF` });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await Maf.findById(itemId)
                .populate({ path: "userCreator", select: "name username" })
                .populate({ path: "userApprove", select: "name username" })
                .populate({ path: "createdBy", select: "name username" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "anioFabE", select: "name" })
                .populate({ path: "anioModE", select: "name" })
                .populate({ path: "planMAF", select: "name" })
                .populate({ path: "tipoUsoE", select: "name" })
                .populate({
                    path: "circularTDP",
                    select: "cod_interno descripcion tipo startDate endDate oferta",
                    populate: { path: "tipo", select: "name" },
                })
                .populate({
                    path: "circularMAF",
                    select: "cod_interno descripcion tipo startDate endDate oferta",
                    populate: { path: "tipo", select: "name" },
                })
                .populate({ path: "estadoSolicitudMAF", select: "name value" })
                .populate({ path: "estadoAprobacionJefaturaE", select: "name" })
                .populate({ path: "customer", select: "name document cellphone email" })
                .populate({ path: "seller", select: "name email cellphone" })
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
                });

            if (!query) return res.status(404).json({ message: `Solicitad MAF ${itemId} no encontrada` });
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: err.message });
        }
    },

    createOne: async (req, res) => {
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
            planMAF,
            tipoUsoE,
            fechaIngresoSolicitud,
            primer_status_request,
            estadoSolicitudMAF,
            seller,
            car,
            anioFabE,
            anioModE,
            pvp,
            createdBy,
            // Nuevos
            precio_a_financiar,
            isBonoTDP,
            circularTDP,
            ofertaTDP,
            isBonoMAF,
            circularMAF,
            ofertaMAF,
            herramientas_tdp,
            herramientas_maf,
            descuento_autonort,
            acuerdotdp_gerencia,
            importe_accesorios,
            // Nuevos
        } = req.body;

        const evidencias = req.files;

        try {
            if (evidencias.length == 0) return res.status(404).json({ message: `No se ha cargado ningún archivo` });
            if (evidencias.length > 50) return res.status(404).json({ message: `Excedió el límite de archivos` });

            let newObj = new Maf({
                nro_solicitud,
                fecha_ingreso,
                sucursal,
                fecha_nacimiento_titular,
                estado_civil,
                observaciones_ingreso,
                conyuge,
                document_conyuge,
                fecha_nacimiento_conyuge,
                lugar_trabajo,
                ingreso_promedio,
                cuota_inicial,
                fechaIngresoSolicitud,
                primer_status_request,
                evidencias: evidencias.map((a) => a.location),
                pvp,
                // Nuevos
                precio_a_financiar,
                isBonoTDP,
                ofertaTDP,
                isBonoMAF,
                ofertaMAF,
                herramientas_tdp,
                herramientas_maf,
                descuento_autonort,
                acuerdotdp_gerencia,
                importe_accesorios,
                // Nuevos
            });

            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
            newObj.sucursalE = sucursalFound._id;

            const customerFound = await Customer.findOne({ name: customer });
            if (!customerFound) return res.status(404).json({ message: `Cliente ${customer} no encontrado` });
            newObj.customer = customerFound._id;

            const sellerFound = await Seller.findOne({ name: seller });
            if (!sellerFound) return res.status(404).json({ message: `Vendedor ${seller} no encontrado` });
            newObj.seller = sellerFound._id;

            const carFound = await Vehicle.findOne({ cod_tdp: car });
            if (!carFound) return res.status(404).json({ message: `Vehículo ${car} no encontrado` });
            newObj.car = carFound._id;

            const anioFFound = await Anio.findOne({ name: anioFabE });
            if (!anioFFound) return res.status(404).json({ message: `Año Fab ${anioFabE} no encontrado` });
            newObj.anioFabE = anioFFound._id;

            const anioMFound = await Anio.findOne({ name: anioModE });
            if (!anioMFound) return res.status(404).json({ message: `Año Mod ${anioModE} no encontrado` });
            newObj.anioModE = anioMFound._id;

            const planMafFound = await PlanMAF.findOne({ name: planMAF });
            if (!planMafFound) return res.status(404).json({ message: `Plan ${planMAF} no encontrado` });
            newObj.planMAF = planMafFound._id;

            const tipoUsoFound = await TipoUso.findOne({ name: tipoUsoE });
            if (!tipoUsoFound) return res.status(404).json({ message: `Tipo de uso ${tipoUsoE} no encontrado` });
            newObj.tipoUsoE = tipoUsoFound._id;

            if (circularTDP == null || circularTDP == undefined || circularTDP == "") {
                newObj.circularTDP = null;
            } else {
                const circularTDPFound = await Campania.findOne({ cod_interno: circularTDP });
                if (!circularTDPFound) return res.status(404).json({ message: `Campania TDP ${circularTDP} no encontrada` });
                newObj.circularTDP = circularTDPFound._id;
            }

            if (circularMAF == null || circularMAF == undefined || circularMAF == "") {
                newObj.circularMAF = null;
            } else {
                const circularMAFFound = await Campania.findOne({ cod_interno: circularMAF });
                if (!circularMAFFound) return res.status(404).json({ message: `Campania MAF ${circularTDP} no encontrada` });
                newObj.circularMAF = circularMAFFound._id;
            }

            const estadoFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
            if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });
            newObj.estadoSolicitudMAF = estadoFound._id;

            const userFound = await User.findOne({ username: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
            newObj.createdBy = userFound._id;
            newObj.userCreator = userFound._id;

            const query = await newObj.save();

            if (query) {
                res.json({ message: `Solicitud creada con éxito` });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const {
            lugar_trabajo,
            ingreso_promedio,
            planMAF,
            tipoUsoE,
            cuota_inicial,
            observaciones_ingreso,
            pvp,
            car,
            anioFabE,
            anioModE,
            fechaIngresoSolicitud,
            // Nuevos
            precio_a_financiar,
            isBonoTDP,
            circularTDP,
            ofertaTDP,
            isBonoMAF,
            circularMAF,
            ofertaMAF,
            herramientas_tdp,
            herramientas_maf,
            descuento_autonort,
            acuerdotdp_gerencia,
            importe_accesorios,
        } = req.body;
        const { itemId } = req.params;
        const evidencias = req.files;
        let planMafNull,
            tipoUsoNull,
            carNull,
            anioFabNull,
            anioModNull,
            circularTDPNull,
            circularMAFNull = null;
        let query = null;

        console.log("evidencias: ", evidencias);
        console.log("OFERTA MAF: ", ofertaMAF);

        try {
            if (planMAF == null || planMAF == undefined) {
                planMafNull = null;
            } else {
                const planMafFound = await PlanMAF.findOne({ name: planMAF });
                if (!planMafFound) return res.status(404).json({ message: `Plan ${planMAF} no encontrado` });
                planMafNull = planMafFound._id;
            }

            if (tipoUsoE == null || tipoUsoE == undefined) {
                tipoUsoNull = null;
            } else {
                const tipoUsoFound = await TipoUso.findOne({ name: tipoUsoE });
                if (!tipoUsoFound) return res.status(404).json({ message: `Tipo Uso ${tipoUsoE} no encontrado` });
                tipoUsoNull = tipoUsoFound._id;
            }

            if (car == null || car == undefined) {
                carNull = null;
            } else {
                const carFound = await Vehicle.findOne({ cod_tdp: car });
                if (!carFound) return res.status(404).json({ message: `Unidad ${car} no encontrado` });
                carNull = carFound._id;
            }

            if (anioFabE == null || anioFabE == undefined) {
                anioFabNull = null;
            } else {
                const anioFFound = await Anio.findOne({ name: anioFabE });
                if (!anioFFound) return res.status(404).json({ message: `Año F ${anioFabE} no encontrado` });
                anioFabNull = anioFFound._id;
            }

            if (anioModE == null || anioModE == undefined) {
                anioModNull = null;
            } else {
                const anioMFound = await Anio.findOne({ name: anioModE });
                if (!anioMFound) return res.status(404).json({ message: `Año M ${anioModE} no encontrado` });
                anioModNull = anioMFound._id;
            }

            if (circularTDP == null || circularTDP == undefined || circularTDP == "") {
                circularTDPNull = null;
            } else {
                const circularTDPFound = await Campania.findOne({ cod_interno: circularTDP });
                if (!circularTDPFound) return res.status(404).json({ message: `Campania TDP ${circularTDP} no encontrada` });
                circularTDPNull = circularTDPFound._id;
            }

            if (circularMAF == null || circularMAF == undefined || circularMAF == "") {
                circularMAFNull = null;
            } else {
                const circularMAFFound = await Campania.findOne({ cod_interno: circularMAF });
                if (!circularMAFFound) return res.status(404).json({ message: `Campania MAF ${circularMAF} no encontrada` });
                circularMAFNull = circularMAFFound._id;
            }

            if (evidencias == null || evidencias == undefined || evidencias.length == 0) {
                query = await Maf.findByIdAndUpdate(itemId, {
                    lugar_trabajo,
                    ingreso_promedio,
                    planMAF: planMafNull,
                    tipoUsoE: tipoUsoNull,
                    cuota_inicial,
                    observaciones_ingreso,
                    pvp,
                    car: carNull,
                    anioFabE: anioFabNull,
                    anioModE: anioModNull,
                    fechaIngresoSolicitud,
                    // NUEVOS
                    precio_a_financiar,
                    isBonoTDP,
                    circularTDP: circularTDPNull,
                    ofertaTDP,
                    isBonoMAF,
                    circularMAF: circularMAFNull,
                    ofertaMAF,
                    herramientas_tdp,
                    herramientas_maf,
                    descuento_autonort,
                    acuerdotdp_gerencia,
                    importe_accesorios,
                });
            } else {
                query = await Maf.findByIdAndUpdate(itemId, {
                    lugar_trabajo,
                    ingreso_promedio,
                    planMAF: planMafNull,
                    tipoUsoE: tipoUsoNull,
                    cuota_inicial,
                    observaciones_ingreso,
                    pvp,
                    car: carNull,
                    anioFabE: anioFabNull,
                    anioModE: anioModNull,
                    fechaIngresoSolicitud,
                    evidencias: evidencias.map((a) => a.location),
                    // NUEVOS
                    precio_a_financiar,
                    isBonoTDP,
                    circularTDP: circularTDPNull,
                    ofertaTDP,
                    isBonoMAF,
                    circularMAF: circularMAFNull,
                    ofertaMAF,
                    herramientas_tdp,
                    herramientas_maf,
                    descuento_autonort,
                    acuerdotdp_gerencia,
                    importe_accesorios,
                });
            }

            if (!query) {
                return res.status(404).json({ message: `Solicitud MAF ${itemId} no encontrada` });
            }

            res.json({ message: `Solicitud MAf actualizada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    sentApplicationToEvaluate: async (req, res) => {
        const { primer_status_request, estadoSolicitud, estadoSolicitudMAF, isEvaluacion, fechaEvaluacion } = req.body;
        const { itemId } = req.params;

        try {
            const estadoMafFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
            if (!estadoMafFound) return res.status(404).json({ message: `Estado MAF ${estadoSolicitudMAF} no encontrado` });

            const query = await Maf.findByIdAndUpdate(itemId, {
                primer_status_request,
                estadoSolicitud,
                estadoSolicitudMAF: estadoMafFound._id,
                isEvaluacion,
                fechaEvaluacion,
            });

            if (!query) {
                return res.status(404).json({ message: `Solicitud MAF ${itemId} no encontrada` });
            }

            res.json({ message: `Solicitud enviada a MAF con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    sendApplicationToRevaluate: async (req, res) => {
        const { primer_status_request, estadoSolicitud, estadoSolicitudMAF, observaciones_ingreso, isReingresado, fechaReingreso } = req.body;
        const { itemId } = req.params;
        const adicionales = req.files;

        if (adicionales.length == 0) return res.status(404).json({ message: "No se adjuntó ningún documento" });
        if (adicionales.length > 30) return res.status(404).json({ message: "Se excedió el límite de archivos" });

        try {
            const estadoFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
            if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSolicitudMAF} no encontrado` });

            const query = await Maf.findByIdAndUpdate(itemId, {
                primer_status_request,
                estadoSolicitud,
                estadoSolicitudMAF: estadoFound._id,
                observaciones_ingreso,
                isReingresado,
                fechaReingreso,
                files_adicionales: adicionales.map((a) => a.location),
            });

            if (!query) return res.status(404).json({ message: `No se encontró la solicitud MAF ${itemId}` });
            res.json({ message: `Solicitud MAF ${itemId} enviada a re-evaluación` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    rateOneById: async (req, res) => {
        const {
            primer_status_request,
            estadoSolicitud,
            estadoSolicitudMAF,
            carta_aprobacion,
            observacion,
            motivo,
            isEnviadoAnalisis,
            fechaEnviadoAnalisis,
            isObservado,
            fechaObservado,
            isRechazado,
            fechaRechazado,
            isAprobado,
            fechaAprobado,
            isParaRevisor,
            fechaParaRevisor,
            isRevisorio,
            fechaRevisorio,
            isDesembolsar,
            fechaDesembolsar,
            isActivado,
            fechaActivado,
            userApprove,
        } = req.body;
        const { itemId } = req.params;
        const { docAprobacion, docCronograma } = req.files;
        let docAprobacionNull,
            docCronogramaNull,
            query = null;

        try {
            if (docAprobacion == null || docAprobacion == undefined || docAprobacion == "") {
                docAprobacionNull = "";
            } else {
                docAprobacionNull = docAprobacion[0].location;
            }

            if (docCronograma == null || docCronograma == undefined) {
                docCronogramaNull = "";
            } else {
                docCronogramaNull = docCronograma[0].location;
            }

            const estadoMafFound = await StatusMafRequest.findOne({ name: estadoSolicitudMAF });
            if (!estadoMafFound) return res.status(404).json({ message: `Estado MAF ${estadoSolicitudMAF} no encontado` });

            if (estadoSolicitudMAF == "ENVIADO A ANALISIS") {
                query = Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isEnviadoAnalisis,
                    fechaEnviadoAnalisis,
                    observacion,
                });
            } else if (estadoSolicitudMAF == "OBSERVADO") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    observacion,
                    isObservado,
                    fechaObservado,
                });
            } else if (estadoSolicitudMAF == "APROBADO") {
                const userFound = await User.findOne({ username: userApprove });
                if (!userFound) return res.status(404).json({ message: `Usuario ${userApprove} no encontrado` });

                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    observacion,
                    carta_aprobacion,
                    carta_evidencia: docAprobacionNull,
                    cronograma_pagos: docCronogramaNull,
                    isAprobado,
                    fechaAprobado,
                    userApprove: userFound._id,
                });
            } else if (estadoSolicitudMAF == "PARA REVISOR") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isParaRevisor,
                    fechaParaRevisor,
                    observacion,
                });
            } else if (estadoSolicitudMAF == "REVISORIO") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isRevisorio,
                    fechaRevisorio,
                    observacion,
                });
            } else if (estadoSolicitudMAF == "POR DESEMBOLSAR") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isDesembolsar,
                    fechaDesembolsar,
                    observacion,
                });
            } else if (estadoSolicitudMAF == "RECHAZADO") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isRechazado,
                    fechaRechazado,
                    motivo,
                });
            } else if (estadoSolicitudMAF == "ACTIVADO") {
                query = await Maf.findByIdAndUpdate(itemId, {
                    primer_status_request,
                    estadoSolicitud,
                    estadoSolicitudMAF: estadoMafFound._id,
                    isActivado,
                    fechaActivado,
                    observacion,
                });
            }

            if (!query) return res.status(404).json({ message: `Solicitud MAF ${itemId} no encontrada` });

            res.json({ message: `Solicitud MAF ${itemId} calificada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await Maf.findByIdAndDelete(itemId);

            if (!query) return res.status(404).json({ message: `No se encontró solicitud MAF` });

            res.json({ message: `Solicitud MAf ${itemId} fue eliminada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};
