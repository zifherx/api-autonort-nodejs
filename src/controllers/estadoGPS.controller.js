import EstadoGPS from "../models/EstadoGPS";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await EstadoGPS.find().sort({ name: 1 });
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
        const query = await EstadoGPS.findById(itemId);
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
        const query = await EstadoGPS.find({ estado: true }).sort({ valor: 1 });
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
        const obj = new EstadoGPS({ name, valor, hex, icon, estado });

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
        const query = await EstadoGPS.findByIdAndUpdate(itemId, { name, valor, hex, icon, estado });

        if (!query) {
            return res.status(404).json({ message: `Estado ${itemId} no encontrado` });
        }
        res.json({ message: "Estado actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoGPS.findByIdAndDelete(itemId);
        if (!query) {
            return res.status(404).json({ message: `Estado ${itemId} no encontrado` });
        }
        res.json({ message: "Estado eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
