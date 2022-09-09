import nMas2 from "../models/nMas2";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await nMas2.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen items" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.getAllActive = async (req, res) => {
    try {
        const query = await nMas2.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen items activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await nMas2.findById(itemId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe item" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.createOne = async (req, res) => {
    const { name, fecha, mes, anio, estado } = req.body;

    try {
        const newObj = new nMas2({ name, fecha, mes, anio, estado });

        const query = await newObj.save();

        if (query) {
            res.json({ message: "Item creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.updateOneById = async (req, res) => {
    const { name, fecha, mes, anio, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await nMas2.findByIdAndUpdate(itemId, { name, fecha, mes, anio, estado });

        if (query) {
            res.json({ message: "Item actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe item a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await nMas2.findByIdAndRemove(itemId);
        if (query) {
            res.json({ message: "Item eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe item a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
