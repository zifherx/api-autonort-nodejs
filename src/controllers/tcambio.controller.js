import TCambio from "../models/TCambio";
import User from "../models/User";

const tCambioController = {};

tCambioController.getAll = async (req, res) => {
    try {
        const query = await TCambio.find().sort({ fecha_registro: -1 }).populate({
            path: "createdBy",
            select: "name username",
        });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen registros` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tCambioController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await TCambio.findById(itemId);

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: `No existe registro` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tCambioController.createOne = async (req, res) => {
    const { codigo_interno, fecha_registro, itemsBBVA, itemsBCP, ventaVehiculosPromedio, ventaRepuestosPromedio, licitacionesPromedio, createdBy } =
        req.body;

    try {
        const newObj = new TCambio({
            codigo_interno,
            fecha_registro,
            itemsBBVA,
            itemsBCP,
            ventaVehiculosPromedio,
            ventaRepuestosPromedio,
            licitacionesPromedio,
        });

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newObj.createdBy = userFound._id;

        const query = await newObj.save();

        if (query) return res.json({ message: `T. Cambio registrado con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tCambioController.getCambiosByRange = async (req, res) => {
    const { start, end } = req.body;

    try {
        const query = await TCambio.find({
            fecha_registro: {
                $gte: new Date(start),
                $lte: new Date(end),
            },
        })
            .sort({ fecha_registro: -1 })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length == 0) {
            return res.status(404).json({ message: `No existen registros` });
        }

        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default tCambioController;
