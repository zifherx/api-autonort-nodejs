import TipoSoat from "../models/TipoSoat";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await TipoSoat.find().sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen tipos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoSoat.findById(itemId);
        if (!query) {
            return res.status(404).json({ message: `No existe tipo ${itemId}` });
        }
        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllByActivo = async (req, res) => {
    try {
        const query = await TipoSoat.find({ estado: true }).sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen tipos activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const { name, link, estado } = req.body;
    try {
        const obj = new TipoSoat({ name, link, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Tipo Soat creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { name, link, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await TipoSoat.findByIdAndUpdate(itemId, { name, link, estado });

        if (query) {
            res.json({ message: "Tipo Soat actualizado con éxito" });
        } else {
            return res.status(404).json({ message: `Estado ${itemId} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoSoat.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Tipo Soat eliminado con éxito" });
        } else {
            return res.status(404).json({ message: `Estado ${itemId} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
