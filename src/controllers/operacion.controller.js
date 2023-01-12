import Operacion from "../models/Operacion";

const operacionController = {};

operacionController.getAll = async (req, res) => {
    try {
        const query = await Operacion.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Tipos de operaciónes" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

operacionController.getOneById = async (req, res) => {
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findById(operacionId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe Tipo de operación" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

operacionController.getAllActivos = async (req, res) => {
    try {
        const query = await Operacion.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Tipos Activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

operacionController.createOne = async (req, res) => {
    const { name, estado } = req.body;
    try {
        const query = new Operacion({ name, estado });

        const newObj = await query.save();

        if (newObj) {
            res.json({ message: "Tipo de operación creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

operacionController.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findByIdAndUpdate(operacionId, { name, estado });

        if (query) {
            res.json({ message: "Tipo de operación actualizada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Tipo de operación a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

operacionController.deleteOneById = async (req, res) => {
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findByIdAndDelete(operacionId);
        if (query) {
            res.json({ message: "Tipo de operación eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Tipo de operación a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default operacionController;
