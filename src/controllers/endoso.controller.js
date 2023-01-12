import Endoso from "../models/Endoso";

export const getAll = async (req, res) => {
    try {
        const query = await Endoso.find().sort({ name: "asc" });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Endosos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getAllActivos = async (req, res) => {
    try {
        const query = await Endoso.find({ estado: true }).sort({ name: 1 });
        if (!query.length == 0) {
            return res.status(404).json({ message: "No existen endosos activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Endoso.findById(itemId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe el Endoso" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const createOne = async (req, res) => {
    const { name, estado } = req.body;

    try {
        const newObj = new Endoso({ name, estado });
        const query = await newObj.save();
        if (query) {
            res.json({ message: "Endoso creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await Endoso.findByIdAndUpdate(itemId, { name, estado });
        if (query) {
            res.json({ message: "Endoso actualizado con éxito" });
        } else {
            return res.json(404).json({ message: "No existe Endoso a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Endoso.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Endoso eliminado con éxito" });
        } else {
            return res.json(404).json({ message: "No existe Endoso a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
