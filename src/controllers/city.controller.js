import City from "../models/City";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await City.find().sort({ name: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen ciudades" });
        }

        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllActive = async (req, res) => {
    try {
        const query = await City.find({ estado: true }).sort({ name: 1 });

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen ciudades activos" });
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
        const query = await City.findById(itemId);

        if (!query) {
            return res.status(404).json({ message: "No existen la ciudad" });
        }

        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const { name, estado } = req.body;

    try {
        const newObj = new City({ name, estado });

        const query = await newObj.save();

        res.json({ message: "Ciudad creado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;

    try {
        const query = await City.findByIdAndUpdate(itemId, { name, estado });

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Ciudad actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await City.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Ciudad eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
