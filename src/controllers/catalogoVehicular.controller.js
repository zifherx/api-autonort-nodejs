import Anio from "../models/Anio";
import CatalogoVehicular from "../models/CatalogoVehicular";
import Sucursal from "../models/Sucursal";
import Vehicle from "../models/Vehicle";
import User from "../models/User";

const catalogoController = {
    getAll: async (req, res) => {
        try {
            const query = await CatalogoVehicular.find()
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "unidad",
                    select: "cod_tdp model version chasis",
                    populate: [
                        {
                            path: "model",
                            select: "name avatar marca",
                            populate: {
                                path: "marca",
                                select: "name avatar",
                            },
                        },
                        {
                            path: "chasis",
                            select: "name",
                        },
                    ],
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "createdBy",
                    select: "name username",
                });

            if (query.length == 0) return res.status(404).json({ message: `No existen catálogos` });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await CatalogoVehicular.findById(itemId)
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "unidad",
                    select: "cod_tdp model version chasis",
                    populate: [
                        {
                            path: "model",
                            select: "name avatar marca",
                            populate: {
                                path: "marca",
                                select: "name avatar",
                            },
                        },
                        {
                            path: "chasis",
                            select: "name",
                        },
                    ],
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "createdBy",
                    select: "name username",
                });

            if (!query) return res.status(404).json({ message: `Catalogo ${itemId} no encontrado` });
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    createOne: async (req, res) => {
        const { codigo_interno, sucursal, sucursalE, fechaIngreso, unidad, anioModelo, anioModeloE, precioLista, createdBy } = req.body;

        try {
            const obj = new CatalogoVehicular({
                codigo_interno,
                sucursal,
                fechaIngreso,
                anioModelo,
                precioLista,
            });

            // SEDE
            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
            obj.sucursalE = sucursalFound.id;

            // UNIDAD VEHICULAR
            const unidadFound = await Vehicle.findOne({ cod_tdp: unidad });
            if (!unidadFound) return res.status(404).json({ message: `Unidad ${unidad} no encontrada` });
            obj.unidad = unidadFound.id;

            // AÑO UNIDAD
            const anio2Found = await Anio.findOne({ name: anioModeloE });
            if (!anio2Found) return res.status(404).json({ message: `Año Unidad ${anioModeloE} no encontrada` });
            obj.anioModeloE = anio2Found.id;

            // USER
            const userFound = await User.findOne({ username: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
            obj.createdBy = userFound.id;

            const query = await obj.save();

            if (query) res.json({ message: `Catalogo creado con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const { itemId } = req.params;
        const { sucursal, sucursalE, fechaIngreso, unidad, anioModelo, anioModeloE, precioLista } = req.body;

        try {
            // SEDE
            const sucursalFound = await Sucursal.findOne({ name: sucursalE });
            if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

            // UNIDAD VEHICULAR
            const unidadFound = await Vehicle.findOne({ cod_tdp: unidad });
            if (!unidadFound) return res.status(404).json({ message: `Unidad ${unidad} no encontrada` });

            // AÑO UNIDAD
            const anio2Found = await Anio.findOne({ name: anioModeloE });
            if (!anio2Found) return res.status(404).json({ message: `Año Unidad ${anioModeloE} no encontrada` });

            const query = await CatalogoVehicular.findByIdAndUpdate(itemId, {
                sucursal,
                sucursalE: sucursalFound._id,
                fechaIngreso,
                unidad: unidadFound._id,
                anioModelo,
                anioModeloE: anio2Found._id,
                precioLista,
            });

            if (!query) return res.status(404).json({ message: `Catalogo ${itemId} no encontrado` });
            res.json({ message: `Catálogo actualizado con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await CatalogoVehicular.findByIdAndDelete(itemId);

            if (!query) return res.status(404).json({ message: `No existe Catálogo ${itemId} a eliminar` });
            res.json({ message: `Catálogo eliminado con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    searchCatalogoFromSedeByAnioModelo: async (req, res) => {
        const { sucursalE, anioModelo, fechaIngreso } = req.body;

        try {
            const query = await CatalogoVehicular.find({
                sucursal: { $regex: ".*" + sucursalE + ".*" },
                anioModelo: anioModelo,
                $expr: {
                    $eq: [{ $month: "$fechaIngreso" }, { $month: new Date(fechaIngreso) }],
                },
            })
                .sort({ "unidad.cod_tdp": 1 })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "anioModeloE", select: "name" })
                .populate({ path: "createdBy", select: "name username" })
                .populate({
                    path: "unidad",
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

            if (query.length == 0)
                return res.status(404).json({ message: `La sede ${sucursalE} no cuenta con catálogo ${fechaIngreso} de unidades ${anioModelo}` });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    searchUnidadFromSedeAnioModeloByCodTDP: async (req, res) => {
        const { sucursalE, fechaIngreso, anioModeloE, cod_tdp } = req.body;

        try {
            const unidadFound = await Vehicle.findOne({ cod_tdp });
            if (!unidadFound) return res.status(404).json({ message: `Vehículo ${cod_tdp} no encontrado` });

            const query = await CatalogoVehicular.findOne({
                sucursal: { $regex: ".*" + sucursalE + ".*" },
                $expr: {
                    $eq: [{ $month: "$fechaIngreso" }, { $month: new Date(fechaIngreso) }],
                },
                anioModelo: anioModeloE,
                unidad: unidadFound._id,
            })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "anioModeloE", select: "name" })
                .populate({ path: "createdBy", select: "name username" })
                .populate({
                    path: "unidad",
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

            if (!query) return res.status(404).json({ message: `No existe la unidad ${cod_tdp} año ${anioModeloE} en el catálogo ${fechaIngreso}` });
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default catalogoController;
