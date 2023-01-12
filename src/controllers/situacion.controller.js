import Situacion from "../models/Situacion";

export const getAll = async (req, res) => {
    try {
        const query = await Situacion.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Situaciones" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getAllActive = async (req, res) => {
    try {
        const query = await Situacion.find({ estado: true }).sort({ valor: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Situaciones Activas" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Situacion.findById(itemId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe Situación" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const createOne = async (req, res) => {
    const { name, valor, estado } = req.body;
    try {
        const objeto = new Situacion({ name, valor, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: "Situación creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const updateOneById = async (req, res) => {
    const { name, estado, valor } = req.body;
    const { itemId } = req.params;
    try {
        const query = await Situacion.findByIdAndUpdate(itemId, {
            name,
            valor,
            estado,
        });
        if (query) {
            res.json({ message: "Situación actualizada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Situación a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Situacion.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Situacion eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Situacion a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
