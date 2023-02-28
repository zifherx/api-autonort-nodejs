import ProductoGps from "../models/ProductoGps";

const controller = {};

controller.getAllItems = async (req, res) => {
    try {
        const query = await ProductoGps.find().sort({ name: 1 });
        if (query.length === 0) return res.status(404).json({ message: `No existen productos gps` });
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.getAllActiveItems = async (req, res) => {
    try {
        const query = await ProductoGps.find({ estado: true }).sort({ name: 1 });
        if (query.length == 0) {
            return res.status(404).json({ message: "No existen productos gps activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (error) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.getOneItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await ProductoGps.findById(itemId);
        if (!query) {
            return res.status(404).json({ message: "No existe tipo de uso" });
        }
        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.createOneItem = async (req, res) => {
    const { codigo_interno, name, precio, descuento, estado } = req.body;
    try {
        const obj = new ProductoGps({ codigo_interno, name, precio, descuento, estado });
        const query = await obj.save();

        if (query) res.json({ message: "Producto GPS creado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.updateItemById = async (req, res) => {
    const { name, precio, descuento, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await ProductoGps.findByIdAndUpdate(itemId, { name, precio, descuento, estado });

        if (!query) {
            return res.status(404).json({ message: `No se ha encontrado producto ${itemId}` });
        }
        res.json({ message: `Producto gps actualizado con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.deleteItemById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await ProductoGps.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se ha encontrado producto ${itemId}` });
        }
        res.json({ message: `Producto gps eliminado con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
