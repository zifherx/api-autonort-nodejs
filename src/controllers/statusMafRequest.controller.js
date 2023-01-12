import StatusMafRequest from "../models/StatusMafRequest";

const estadoController = {};

estadoController.getAll = async (req, res) => {
    try {
        const query = await StatusMafRequest.find().sort({ value: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen estados MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.getOneById = async (req, res) => {
    const { estadoId } = req.params;
    try {
        const query = await StatusMafRequest.findById(estadoId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe estado MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.getAllActivos = async (req, res) => {
    try {
        const query = await StatusMafRequest.find({ estado: true }).sort({ value: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen estados Maf activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.createOne = async (req, res) => {
    const { name, estado, value } = req.body;
    try {
        const obj = new StatusMafRequest({ name, estado, value });
        const query = await obj.save();
        if (query) {
            res.json({ message: "Estado Maf creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.updateOneById = async (req, res) => {
    const { name, estado, value } = req.body;
    const { estadoId } = req.params;
    try {
        const query = await StatusMafRequest.findByIdAndUpdate(estadoId, { name, estado, value });
        if (query) {
            res.json({ message: "Estado Maf actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Estado Maf a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

estadoController.deleteOneById = async (req, res) => {
    const { estadoId } = req.params;
    try {
        const query = await StatusMafRequest.findByIdAndDelete(estadoId);
        if (query) {
            res.json({ message: "Estado Maf eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Estado Maf a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default estadoController;
