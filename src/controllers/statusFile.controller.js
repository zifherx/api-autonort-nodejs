import StatusFile from "../models/StatusFile";

export const getAll = async (req, res) => {
    try {
        const query = await StatusFile.find().sort({ value: "asc" });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Estados" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await StatusFile.findById(itemId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe el Estado" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const getAllActive = async (req, res) => {
    try {
        const query = await StatusFile.find({ estado: true }).sort({ value: 1 });
        if (query.length == 0) {
            return res.status(404).json({ message: "No existen estados activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const createOne = async (req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new StatusFile({ name, value, estado });
        const query = await nuevo.save();
        if (query) {
            res.json({ message: "Estado creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const updateOneById = async (req, res) => {
    const { name, value, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await StatusFile.findByIdAndUpdate(itemId, { name, value, estado });
        if (!query) {
            return res.status(404).json({ message: "No existe Estado a actualizar" });
        }
        res.json({ message: "Estado actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export const deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await StatusFile.findByIdAndDelete(itemId);
        if (!query) {
            return res.status(404).json({ message: "No existe Estado a eliminar" });
        }
        res.json({ message: "Estado eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};
