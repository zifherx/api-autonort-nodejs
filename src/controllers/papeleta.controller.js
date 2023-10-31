import Area from "../models/Area";
import EstadoPapeleta from "../models/EstadoPapeleta";
import Papeleta from "../models/Papeleta";
import Sucursal from "../models/Sucursal";
import TipoAusentismo from "../models/TipoAusentismo";
import User from "../models/User";

const controller = {
    getAllBySede: async (req, res) => {
        const { sedeE, start, end } = req.body;

        try {
            const query = await Papeleta.find({
                sede: { $regex: ".*" + sedeE + ".*" },
                fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
            })
                .populate({ path: "createdBy", select: "name username documento email" })
                .populate({ path: "sedeE", select: "name" })
                .populate({ path: "areaE", select: "name" })
                .populate({ path: "tipoAusentismoE", select: "name" })
                .populate({ path: "estadoPapeletaE", select: "name valor hex" });

            if (query.length === 0) return res.status(404).json({ message: `No existen papeletas` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllByCreator: async (req, res) => {
        const { createdBy } = req.body;

        try {
            const userFound = await User.findOne({ username: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

            const query = await Papeleta.find({
                createdBy: userFound._id,
                // fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
            })
                .populate({ path: "createdBy", select: "name username documento email" })
                .populate({ path: "sedeE", select: "name" })
                .populate({ path: "areaE", select: "name" })
                .populate({ path: "tipoAusentismoE", select: "name" })
                .populate({ path: "estadoPapeletaE", select: "name valor hex" });

            if (query.length === 0) return res.status(404).json({ message: `No existen papeletas` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllByArea: async (req, res) => {
        const { areaE } = req.body;

        try {
            const query = await Papeleta.find({
                area: { $regex: ".*" + areaE + ".*" },
                // fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
            })
                .populate({ path: "createdBy", select: "name username documento email" })
                .populate({ path: "sedeE", select: "name" })
                .populate({ path: "areaE", select: "name" })
                .populate({ path: "tipoAusentismoE", select: "name" })
                .populate({ path: "estadoPapeletaE", select: "name valor hex" });

            if (query.length === 0) return res.status(404).json({ message: `No existen papeletas` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await Papeleta.findById(itemId)
                .populate({
                    path: "createdBy",
                    select: "name username documento email sucursalE areaE",
                    populate: [
                        { path: "sucursalE", select: "name" },
                        { path: "areaE", select: "name" },
                    ],
                })
                .populate({ path: "sedeE", select: "name" })
                .populate({ path: "areaE", select: "name" })
                .populate({ path: "tipoAusentismoE", select: "name" })
                .populate({ path: "estadoPapeletaE", select: "name valor hex" });

            if (!query) return res.status(404).json({ message: `Papeleta ${itemId} no encontrada` });

            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    newOne: async (req, res) => {
        const {
            sede,
            sedeE,
            area,
            areaE,
            tipoAusentismo,
            tipoAusentismoE,
            motivo,
            createdBy,
            fecha_inicio,
            fecha_fin,
            hora_inicio,
            hora_fin,
            duracion_dias,
            duracion_horas,
            observaciones,
            estadoPapeleta,
            estadoPapeletaE,
            fechaRegistro,
            fechaIngresado,
        } = req.body;

        try {
            const item = new Papeleta({
                sede,
                area,
                tipoAusentismo,
                motivo,
                fecha_inicio,
                fecha_fin,
                hora_inicio,
                hora_fin,
                duracion_dias,
                duracion_horas,
                observaciones,
                estadoPapeleta,
                fechaRegistro,
                fechaIngresado,
            });

            /* SEDE */
            const sedeFound = await Sucursal.findOne({ name: sedeE });
            if (!sedeFound) return res.status(404).json({ message: `Sede ${sedeE} no encontrada` });
            item.sedeE = sedeFound._id;

            /* AREA */
            const areaFound = await Area.findOne({ name: areaE });
            if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrada` });
            item.areaE = areaFound._id;

            /* TIPO AUSENTISMO */
            const tipoFound = await TipoAusentismo.findOne({ name: tipoAusentismoE });
            if (!tipoFound) return res.status(404).json({ message: `Tipo ${tipoAusentismoE} no encontrado` });
            item.tipoAusentismoE = tipoFound._id;

            /* USUARIO CREADOR */
            const userFound1 = await User.findOne({ username: createdBy });
            if (!userFound1) return res.status(404).json({ message: `Usuario1 ${createdBy} no encontrado` });
            item.createdBy = userFound1._id;

            /* ESTADO */
            const estadoFound = await EstadoPapeleta.findOne({ name: estadoPapeletaE });
            if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoPapeletaE} no encontrado` });
            item.estadoPapeletaE = estadoFound._id;

            const query = await item.save();

            if (query) res.json({ message: `Papeleta ingresada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    rateOneById: async (req, res) => {
        const {
            estadoPapeletaE,
            estadoPapeleta,
            bossApprove,
            rrhhApprove,
            approverChief,
            approverRRHH,
            isAprobado,
            isVBRRHH,
            isRechazado,
            fechaAprobado,
            fechaVBRRHH,
            fechaRechazado,
        } = req.body;
        const { itemId } = req.params;

        let query = null;

        // console.log(req.body);

        try {
            const estadoFound = await EstadoPapeleta.findOne({ name: estadoPapeletaE });
            if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoPapeletaE} no encontrado` });

            if (estadoPapeletaE === "APROBADO POR JEFE") {
                const jefeFound = await User.findOne({ username: approverChief });
                if (!jefeFound) return res.status(404).json({ message: `Jefe ${approverChief} no encontrado` });

                query = await Papeleta.findByIdAndUpdate(itemId, {
                    estadoPapeleta,
                    estadoPapeletaE: estadoFound._id,
                    bossApprove,
                    approverChief: jefeFound._id,
                    isAprobado,
                    fechaAprobado,
                });
            } else if (estadoPapeletaE === "RECHAZADO") {
                const jefeFound = await User.findOne({ username: approverChief });
                if (!jefeFound) return res.status(404).json({ message: `Jefe ${approverChief} no encontrado` });

                query = await Papeleta.findByIdAndUpdate(itemId, {
                    estadoPapeleta,
                    estadoPapeletaE: estadoFound._id,
                    bossApprove,
                    approverChief: jefeFound._id,
                    isRechazado,
                    fechaRechazado,
                });
            } else if (estadoPapeletaE === "VB RR.HH") {
                const rrhhFound = await User.findOne({ username: approverRRHH });
                if (!rrhhFound) return res.status(404).json({ message: `RR.HH ${approverRRHH} no encontrado` });
                
                query = await Papeleta.findByIdAndUpdate(itemId, {
                    estadoPapeleta,
                    estadoPapeletaE: estadoFound._id,
                    rrhhApprove,
                    approverRRHH: rrhhFound._id,
                    isVBRRHH,
                    fechaVBRRHH,
                });
            }

            if (!query) return res.status(404).json({ message: `Papeleta ${itemId} no encontrada` });
            res.json({ message: `Papeleta ${itemId} actualizada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: (req, res) => {},

    deleteOneById: (req, res) => {},
};

export default controller;
