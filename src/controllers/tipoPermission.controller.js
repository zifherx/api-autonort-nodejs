import TypePermission from "../models/TypePermission";
import User from "../models/User";

const controller = {
    getAll: async (req, res) => {
        try {
            const query = await TypePermission.find().sort({ name: -1 });
            if (query.length === 0) return res.status(404).json({ message: "No existen tipos" });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;
        try {
            const query = await TypePermission.findById(itemId);

            if (!query) return res.status(404).json({ message: "No existe tipo" });
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllActivos: async (req, res) => {
        try {
            const query = await TypePermission.find({ estado: true }).sort({ name: 1 });
            if (query.length === 0) return res.status(404).json({ message: "No existen tipos activos" });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    newOne: async (req, res) => {
        const { cod_interno, name, hex, icon, estado, createdBy } = req.body;
        try {
            const item = new TypePermission({ cod_interno, name, hex, icon, estado });

            const userFound = await User.findOne({ username: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
            item.createdBy = userFound._id;

            const query = await item.save();

            if (query) {
                res.json({ message: "Tipo creado con éxito" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const { cod_interno, name, hex, icon, estado } = req.body;
        const { itemId } = req.params;
        try {
            const query = await TypePermission.findByIdAndUpdate(itemId, { cod_interno, name, hex, icon, estado });

            if (!query) return res.status(404).json({ message: `No existe tipo ${itemId} a actualizar` });
            res.json({ message: "Tipo actualizado con éxito" });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;
        try {
            const query = await TypePermission.findByIdAndDelete(itemId);
            if (query) return res.status(404).json({ message: `No existe estado ${itemId} a eliminar` });
            res.json({ message: "Tipo eliminado con éxito" });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
