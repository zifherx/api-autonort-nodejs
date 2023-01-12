import PlanMAF from "../models/PlanMAF";

const planController = {};

planController.getAll = async (req, res) => {
    try {
        const query = await PlanMAF.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen planes MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

planController.getOneById = async (req, res) => {
    const { planId } = req.params;
    try {
        const query = await PlanMAF.findById(planId);
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe plan MAF" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

planController.getAllActivos = async (req, res) => {
    try {
        const query = await PlanMAF.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen planes MAF activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

planController.createOne = async (req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new PlanMAF({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: "Plan MAF creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

planController.updateOneById = async (req, res) => {
    const { name, estado } = req.body;
    const { planId } = req.params;
    try {
        const query = await PlanMAF.findByIdAndUpdate(planId, { name, estado });

        if (query) {
            res.json({ message: "Plan MAF actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe plan MAF a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

planController.deleteOneById = async (req, res) => {
    const { planId } = req.params;
    try {
        const query = await PlanMAF.findByIdAndDelete(planId);
        if (query) {
            res.json({ message: "Plan MAF eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe plan MAF a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default planController;
