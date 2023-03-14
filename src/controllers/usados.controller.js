import Usados from "../models/Usados";
import Sucursal from "../models/Sucursal";
import Tasacion from "../models/Tasacion";
import EstadoUsados from "../models/EstadoUsados";
import User from "../models/User";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await Usados.find()
            .sort({ fechaRegistro: 1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "estadoE",
                select: "name valor",
            })
            .populate({
                path: "ubicacionE",
                select: "name",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "tasacionId",
                select: "cliente auto version placa colorE anioF kilometraje sucursalE origenTasacion estadoTasacionE sucursal createdBy",
                populate: [
                    {
                        path: "cliente",
                        select: "name document cellphone",
                    },
                    {
                        path: "auto",
                        select: "marca avatar name",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                    {
                        path: "colorE",
                        select: "name",
                    },
                    {
                        path: "anioF",
                        select: "name",
                    },
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "origenTasacion",
                        select: "name",
                    },
                    {
                        path: "estadoTasacionE",
                        select: "name value",
                    },
                    {
                        path: "createdBy",
                        select: "name username",
                    },
                ],
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Usados" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Usados.findById(itemId)
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "estadoE",
                select: "name valor",
            })
            .populate({
                path: "ubicacionE",
                select: "name",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "tasacionId",
                select: "cliente auto placa color colorE anioF kilometraje sucursalE sucursal origen_operacion version precio origenTasacion estadoTasacionE createdBy",
                populate: [
                    {
                        path: "cliente",
                        select: "name document cellphone",
                    },
                    {
                        path: "auto",
                        select: "marca avatar name",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                    {
                        path: "colorE",
                        select: "name",
                    },
                    {
                        path: "anioF",
                        select: "name",
                    },
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "origenTasacion",
                        select: "name",
                    },
                    {
                        path: "estadoTasacionE",
                        select: "name value",
                    },
                    {
                        path: "createdBy",
                        select: "name username",
                    },
                ],
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe el Usado" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const {
        codigo_interno,
        sucursal,
        sucursalE,
        mes,
        fechaRegistro,
        tasacionId,
        precio_tasacion,
        precio_venta,
        estado_usado,
        estadoE,
        ubicacion,
        ubicacionE,
        observacion,
        fechaDisponible,
        createdBy,
    } = req.body;
    const adjuntos = req.files;
    let obj = null;

    try {
        // if(adjuntos.length === 0) return res.status(404).json({message: `No se han adjuntado fotos`});

        if (adjuntos.length > 0) {
            obj = new Usados({
                codigo_interno,
                sucursal,
                mes,
                fechaRegistro,
                precio_tasacion,
                precio_venta,
                estado_usado,
                ubicacion,
                observacion,
                fechaDisponible,
                adjuntos: adjuntos.map((a) => a.location),
            });
        } else {
            obj = new Usados({
                codigo_interno,
                sucursal,
                mes,
                fechaRegistro,
                precio_tasacion,
                precio_venta,
                estado_usado,
                ubicacion,
                observacion,
                fechaDisponible,
            });
        }

        const sedeFound = await Sucursal.findOne({ name: sucursalE });
        if (!sedeFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        newObj.sucursalE = sedeFound._id;

        const estadoFound = await EstadoUsados.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });
        newObj.estadoE = estadoFound._id;

        const ubicacionFound = await Sucursal.findOne({ name: ubicacionE });
        if (!ubicacionFound) return res.status(404).json({ message: `Ubicación ${ubicacionE} no encontrada` });
        newObj.ubicacionE = ubicacionFound._id;

        const tasacionFound = await Tasacion.findOne({ codigo_interno: tasacionId });
        if (!tasacionFound) return res.status(404).json({ message: `Tasación ${tasacionId} no encontrada` });
        newObj.tasacionId = tasacionFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newObj.createdBy = userFound._id;

        const query = newObj.save();

        if (query) {
            await Tasacion.findByIdAndUpdate(tasacionFound._id, { pasoUsados: true });
            res.json({ message: "Tasación creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { itemId } = req.params;
    const { estado_usado, estadoE, ubicacion, ubicacionE, observacion, fechaDisponible, isEvaluacion, fechaEvaluacion, isVendido, fechaVendido } =
        req.body;
    let query = null;
    const adjuntos = req.files;

    try {
        const estadoFound = await EstadoUsados.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });

        const ubicacionFound = await Sucursal.findOne({ name: ubicacionE });
        if (!ubicacionFound) return res.status(404).json({ message: `Ubicación ${ubicacionE} no encontrada` });

        // if (adjuntos.length === 0) return res.status(404).json({ message: `No se ha cargado ninguna evidencia` });
        if (adjuntos.length > 15) return res.status(404).json({ message: `Superó el límite de subida de archivos` });

        if (adjuntos == null || adjuntos == undefined) {
            if (estadoE == "DISPONIBLE") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    fechaDisponible,
                });
            } else if (estadoE == "EVALUACIÓN") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    isEvaluacion,
                    fechaEvaluacion,
                });
            } else if (estadoE == "VENDIDO") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    isVendido,
                    fechaVendido,
                });
            }
        } else {
            if (estadoE == "DISPONIBLE") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    fechaDisponible,
                    adjuntos: adjuntos.map((a) => a.location),
                });
            } else if (estadoE == "EVALUACIÓN") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    isEvaluacion,
                    fechaEvaluacion,
                });
            } else if (estadoE == "VENDIDO") {
                query = await Usados.findByIdAndUpdate(itemId, {
                    estado_usado,
                    estadoE: estadoFound._id,
                    ubicacion,
                    ubicacionE: ubicacionFound._id,
                    observacion,
                    isVendido,
                    fechaVendido,
                });
            }
        }

        if (query) {
            res.json({ message: "Registro actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe registro a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Usados.findByIdAndDelete(itemId);

        if (query) {
            res.json({ message: "Registro eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe el registro a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getFilesByEstado = async (req, res) => {
    const { estado } = req.body;

    try {
        const query = await Usados.find({
            estado_usado: { $regex: ".*" + estado + ".*" },
        })
            .sort({ fechaRegistro: 1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "estadoE",
                select: "name valor",
            })
            .populate({
                path: "ubicacionE",
                select: "name",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "tasacionId",
                select: "cliente auto version placa colorE anioF kilometraje sucursalE origenTasacion estadoTasacionE sucursal createdBy",
                populate: [
                    {
                        path: "cliente",
                        select: "name document cellphone",
                    },
                    {
                        path: "auto",
                        select: "marca avatar name",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                    {
                        path: "colorE",
                        select: "name",
                    },
                    {
                        path: "anioF",
                        select: "name",
                    },
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "origenTasacion",
                        select: "name",
                    },
                    {
                        path: "estadoTasacionE",
                        select: "name value",
                    },
                    {
                        path: "createdBy",
                        select: "name username",
                    },
                ],
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen registros con el estado ${estado}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
