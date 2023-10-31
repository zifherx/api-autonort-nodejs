import EstadoPapeleta from "../models/EstadoPapeleta";
import User from "../models/User";

const controller = {
    getAll: async (req, res) => {
        try {
            const query = await EstadoPapeleta.find().sort({ name: -1 });
            if (query.length > 0) {
                res.json({ total: query.length, all: query });
            } else {
                return res.status(404).json({ message: "No existen Estados Papeleta" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {
        const { itemId } = req.params;
        try {
            const query = await EstadoPapeleta.findById(itemId);

            if (!query) return res.status(404).json({ message: "No existe Estado Papeleta" });
            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAllActivos: async (req, res) => {
        try {
            const query = await EstadoPapeleta.find({ estado: true }).sort({ valor: 1 });
            if (query.length === 0) return res.status(404).json({ message: "No existen estados activos" });
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    newOne: async (req, res) => {
        const { name, valor, estado, hex, createdBy } = req.body;
        try {
            const item = new EstadoPapeleta({ name, valor, estado, hex });

            const userFound = await User.findOne({username: createdBy});
            if(!userFound) return res.status(404).json({message: `Usuario ${createdBy} no encontrado`})
            item.createdBy = userFound._id

            const query = await item.save();

            if (query) {
                res.json({ message: "Estado Papeleta creado con éxito" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const { name, valor, estado, hex } = req.body;
        const { itemId } = req.params;
        try {
            const query = await EstadoPapeleta.findByIdAndUpdate(itemId, { name, valor, estado, hex });

            if (!query) return res.status(404).json({ message: `No existe estado ${itemId} a actualizar` });
            res.json({ message: "Estado Papeleta actualizado con éxito" });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;
        try {
            const query = await EstadoPapeleta.findByIdAndDelete(itemId);
            if (query) return res.status(404).json({ message: `No existe estado ${itemId} a eliminar` });
            res.json({ message: "Estado Papeleta eliminado con éxito" });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
