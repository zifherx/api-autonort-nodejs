import EstadoSoat from "../models/EstadoSoat";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await EstadoSoat.find().sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen estados" });
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
        const query = await EstadoSoat.findById(itemId);
        if (!query) {
            return res.status(404).json({ message: `No existe estado ${itemId}` });
        }
        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllByActivo = async (req, res) => {
    try {
        const query = await EstadoSoat.find({ estado: true }).sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen estados activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const { name, valor, hex, icon, estado } = req.body;
    try {
        const obj = new EstadoSoat({ name, valor, hex, icon, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Estado creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { name, valor, hex, icon, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await EstadoSoat.findByIdAndUpdate(itemId, { name, valor, hex, icon, estado });

        if (query) {
            res.json({ message: "Estado actualizado con éxito" });
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
        const query = await EstadoSoat.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Estado eliminado con éxito" });
        } else {
            return res.status(404).json({ message: `Estado ${itemId} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
