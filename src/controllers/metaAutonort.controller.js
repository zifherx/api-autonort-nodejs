import MetasAutonort from "../models/MetasAutonort";
import TipoProducto from "../models/TipoProducto";
import Sucursal from "../models/Sucursal";

const controller = {
    getAll: async (req, res) => {
        try {
            const query = await MetasAutonort.find()
                .sort({ fecha_registro: -1 })
                .populate({
                    path: "producto_autonort",
                    select: "name areaE",
                    populate: {
                        path: "areaE",
                        select: "name",
                    },
                })
                .populate({
                    path: "sedeE",
                    select: "name",
                });

            if (query.length === 0) {
                return res.status(404).json({ message: `No existen metas registradas` });
            }

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllActive: async (req, res) => {
        try {
            const query = await MetasAutonort.find({ estado: true })
                .sort({ fecha_registro: -1 })
                .populate({
                    path: "producto_autonort",
                    select: "name areaE",
                    populate: {
                        path: "areaE",
                        select: "name",
                    },
                })
                .populate({
                    path: "sedeE",
                    select: "name",
                });

            if (query.length === 0) {
                return res.status(404).json({ message: `No existen metas activas` });
            }

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await MetasAutonort.findById(itemId)
                .sort({ fecha_registro: -1 })
                .populate({
                    path: "producto_autonort",
                    select: "name areaE",
                    populate: {
                        path: "areaE",
                        select: "name",
                    },
                })
                .populate({
                    path: "sedeE",
                    select: "name",
                });

            if (!query) {
                return res.status(404).json({ message: `No existe meta registrada` });
            }

            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    createNewOne: async (req, res) => {
        const { codigo_interno, producto_autonort, fecha_registro, anio_registro, mes_registro, sede, sedeE, estado, valor } = req.body;

        try {
            const obj = new MetasAutonort({ codigo_interno, fecha_registro, anio_registro, mes_registro, sede, estado, valor });

            const productoFound = await TipoProducto.findOne({ name: producto_autonort });
            if (!productoFound) return res.status(404).json({ message: `Producto ${producto_autonort} no encontrado` });
            obj.producto_autonort = productoFound._id;

            const sucursalFound = await Sucursal.findOne({ name: sedeE });
            if (!sucursalFound) return res.status(404).json({ message: `Sede ${sedeE} no encontrada` });
            obj.sedeE = sucursalFound._id;

            const query = await obj.save();

            if (query) res.json({ message: `Meta creada con éxito` });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const { producto_autonort, fecha_registro, anio_registro, mes_registro, sede, sedeE, valor, estado } = req.body;
        const { itemId } = req.params;

        try {
            const productoFound = await TipoProducto.findOne({ name: producto_autonort });
            if (!productoFound) return res.status(404).json({ message: `Producto ${producto_autonort} no encontrado` });

            const sucursalFound = await Sucursal.findOne({ name: sedeE });
            if (!sucursalFound) return res.status(404).json({ message: `Sede ${sedeE} no encontrada` });

            const query = await MetasAutonort.findByIdAndUpdate(itemId,{
                fecha_registro,
                anio_registro,
                mes_registro,
                sede,
                valor,
                estado,
                producto_autonort: productoFound._id,
                sedeE: sucursalFound._id,
            });

            if(query){
                res.json({ message: "Meta actualizada con éxito" });
            } else {
                return res.status(404).json({ message: "No existe meta a actualizar" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await MetasAutonort.findByIdAndDelete(itemId);

            if (!query) {
                return res.status(404).json({ message: "No existe meta a eliminar" });
            }
            res.json({ message: "Meta eliminada con éxito" });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllBySedeProducto: async (req, res) => {
        const { sede, tipo, anio_registro, mes_registro } = req.body;

        try {
            const productoFound = await TipoProducto.findOne({ name: tipo });
            if (!productoFound) return res.status(404).json({ message: `Producto ${tipo} no existe` });
            // console.log(productoFound);

            const query = await MetasAutonort.findOne({
                sede: { $regex: ".*" + sede + ".*" },
                producto_autonort: productoFound._id,
                anio_registro,
                mes_registro,
            });

            if (!query) {
                return res.status(404).json({ message: `No existe el registro` });
            }
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
