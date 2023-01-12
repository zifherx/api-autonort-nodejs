import CondicionAccesorio from "../models/CondicionAccesorio";

const condicionAController = {};

condicionAController.getAll = async (req, res) => {
    try {
        const query = await CondicionAccesorio.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen condiciones de accesorios" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

condicionAController.getAllActivos = async (req, res) => {
    try {
        const query = await CondicionAccesorio.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen condición de accesorios activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

condicionAController.getOneById = async (req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await CondicionAccesorio.findById(condicionId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe condición de accesorio" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

condicionAController.createOne = async (req, res) => {
    const { name, estado } = req.body;
    try {
        const newObj = new CondicionAccesorio({ name, estado });
        const query = await newObj.save();
        if (query) {
            res.json({ message: "Condición de accesorio creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

condicionAController.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { condicionId } = req.params;
    try {
        const query = await CondicionAccesorio.findByIdAndUpdate(condicionId, { name, estado });
        if (query) {
            res.json({ message: "Condición de accesorio actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe condición de accesorio" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

condicionAController.deleteOneById = async (req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await CondicionAccesorio.findByIdAndDelete(condicionId);
        if (query) {
            res.json({ message: "Condición de accesorio eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe condición de accesorio" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default condicionAController;
