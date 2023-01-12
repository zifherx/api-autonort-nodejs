import EstadoCRM from "../models/EstadoCRM";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await EstadoCRM.find().sort({ valor: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen estados" });
        }

        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllActive = async (req, res) => {
    try {
        const query = await EstadoCRM.find({ estado: true }).sort({ valor: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen estados activos" });
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
        const query = await EstadoCRM.findById(itemId);

        if (!query) {
            return res.status(404).json({ message: "No existen el estado" });
        }

        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const { name, valor, description, hex, icon, estado } = req.body;

    try {
        const newObj = new EstadoCRM({ name, valor,description, hex, icon, estado });

        const query = await newObj.save();

        res.json({ message: "Estado creado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { name, valor, description, hex, icon, estado } = req.body;
    const { itemId } = req.params;

    try {
        const query = await EstadoCRM.findByIdAndUpdate(itemId, { name, valor, description, hex, icon, estado });

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
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
        const query = await EstadoCRM.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Estado eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
