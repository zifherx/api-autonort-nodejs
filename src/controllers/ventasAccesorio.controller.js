import VentasAccesorio from "../models/VentasAccesorio";
import Sucursal from "../models/Sucursal";
import Anio from "../models/Anio";
import Mes from "../models/Mes";
import User from "../models/User";

const stockController = {};

stockController.getAll = async (req, res) => {
    try {
        const query = await VentasAccesorio.find()
            .sort({ fecha: 1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "anioE",
                select: "name",
            })
            .populate({
                path: "mesE",
                select: "name",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen registros" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

stockController.createOne = async (req, res) => {
    const { cod_interno, sucursal, sucursalE, fecha, anio, anioE, mes, mesE, stock, ventas, createdBy } = req.body;

    try {
        const newObj = new VentasAccesorio({
            cod_interno,
            sucursal,
            fecha,
            anio,
            mes,
            stock,
            ventas,
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });
        newObj.sucursalE = sucursalFound._id;

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });
        newObj.anioE = anioFound._id;

        const mesFound = await Mes.findOne({ name: mesE });
        if (!mesFound) return res.status(404).json({ message: `Mes ${mesE} no encontrado` });
        newObj.mesE = mesFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newObj.createdBy = userFound._id;

        const query = newObj.save();

        if (query) res.json({ message: "Registro agregado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

stockController.getAllBySucursalMes = async (req, res) => {
    const { sucursalE, mesE } = req.body;

    try {
        const query = await VentasAccesorio.find({
            sucursal: { $regex: ".*" + sucursalE + ".*" },
            // mes: mesE,
        })
            .sort({ fecha: 1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "anioE",
                select: "name",
            })
            .populate({
                path: "mesE",
                select: "name",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen registros" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

stockController.updateOneById = async (req, res) => {
    const { sucursal, sucursalE, anio, anioE, mes, mesE, stock, ventas } = req.body;
    const { itemId } = req.params;

    try {
        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });

        const mesFound = await Mes.findOne({ name: mesE });
        if (!mesFound) return res.status(404).json({ message: `Mes ${mesE} no encontrado` });

        const query = await VentasAccesorio.findByIdAndUpdate(itemId, {
            sucursal,
            sucursalE: sucursalFound._id,
            anio,
            anioE: anioFound._id,
            mes,
            mesE: mesFound._id,
            stock,
            ventas,
        });

        if (query) {
            res.json({ message: "Registro actualizado con éxito" });
        } else {
            return res.status(404).json({ message: `No existe registro ${itemId}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default stockController;
