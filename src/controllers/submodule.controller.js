import Submodule from "../models/Submodule";

const submoduleCtrl = {};

submoduleCtrl.getAll = async (req, res) => {
    try {
        const query = await Submodule.find().sort({ submodule: 1 });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen submodulos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

submoduleCtrl.getAllActives = async (req, res) => {
    try {
        const query = await Submodule.find({ status: true });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen submodulos activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

submoduleCtrl.createOne = async (req, res) => {
    const { submodule, description, icon, route, status } = req.body;

    try {
        let newObj = new Submodule({ submodule, description, icon, route, status });

        const query = await newObj.save();

        if (query) {
            res.json({ message: "Submodulo creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default submoduleCtrl;
