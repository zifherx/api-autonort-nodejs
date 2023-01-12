import OrigenData from "../models/OrigenData";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await OrigenData.find().select("name icon hex estado").sort({ name: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen orígenes" });
        }

        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllActive = async (req, res) => {
    try {
        const query = await OrigenData.find({ estado: true }).select("name icon hex estado").sort({ name: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen orígenes activos" });
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
        const query = await OrigenData.findById(itemId).select("name icon hex estado");

        if (!query) {
            return res.status(404).json({ message: "No existen el origen" });
        }

        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const { name, hex, icon, estado } = req.body;

    try {
        const newObj = new OrigenData({ name, hex, icon, estado });

        const query = await newObj.save();

        res.json({ message: "Origen creado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { name, hex, icon, estado } = req.body;
    const { itemId } = req.params;

    try {
        const query = await OrigenData.findByIdAndUpdate(itemId, { name, hex, icon, estado });

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Origen actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await OrigenData.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Origen eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
