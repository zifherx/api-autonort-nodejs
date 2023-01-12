import MetodoAtencion from "../models/MetodoAtencion";

const metodoController = {};

metodoController.getAll = async (req, res) => {
    try {
        const query = await MetodoAtencion.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen métodos de atención" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

metodoController.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await MetodoAtencion.findById(itemId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe método de atención" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

metodoController.getAllActivos = async (req, res) => {
    try {
        const query = await MetodoAtencion.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen MetodoAtencions activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

metodoController.createOne = async (req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new MetodoAtencion({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Método de atención creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

metodoController.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await MetodoAtencion.findByIdAndUpdate(itemId, { name, estado });

        if (query) {
            res.json({ message: "Método de atención actualizada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe método de atención a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

metodoController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await MetodoAtencion.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Método de atencion eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe método de atención a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default metodoController;
