import TipoProducto from "../models/TipoProducto";
import Area from "../models/Area";

const tProductoController = {};

tProductoController.getAll = async (req, res) => {
    try {
        const query = await TipoProducto.find().sort({ name: -1 }).populate({
            path: "areaE",
            select: "name estado",
        });

        if (query.length == 0) {
            return res.status(404).json({ message: "No existen tipos de producto" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tProductoController.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoProducto.findById(itemId).populate({
            path: "areaE",
            select: "name estado",
        });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe tipo de producto" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tProductoController.getAllActivos = async (req, res) => {
    try {
        const query = await TipoProducto.find({ estado: true }).sort({ name: 1 }).populate({
            path: "areaE",
            select: "name estado",
        });

        if (query.length == 0) {
            return res.status(404).json({ message: "No existen tipos de producto activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tProductoController.createOne = async (req, res) => {
    const { areaE, name, estado } = req.body;
    try {
        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrado` });

        const obj = new TipoProducto({ name, estado });
        obj.areaE = areaFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Tipo de producto creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tProductoController.updateOneById = async (req, res) => {
    const { areaE, name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const areaFound = await Area.findOne({ name: areaE });
        if (!areaFound) return res.status(404).json({ message: `Area ${areaE} no encontrado` });

        const query = await TipoProducto.findByIdAndUpdate(itemId, { name, estado, areaE: areaFound._id });

        if (query) {
            res.json({ message: "Tipo de producto actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe tipos de productos a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tProductoController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoProducto.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Tipo de Producto eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe tipos de producto a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default tProductoController;
