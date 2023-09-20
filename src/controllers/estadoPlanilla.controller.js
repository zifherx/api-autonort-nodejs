import EstadoPlanilla from "../models/EstadoPlanilla";

const controller = {
    getall: async (req, res) => {
        try {
            const query = await EstadoPlanilla.find().sort({ valor: 1 });

            if (query.length === 0) return res.status(404).json({ message: "No existen estados" });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getActive: async (req, res) => {
        try {
            const query = await EstadoPlanilla.find({ estado: true }).sort({ valor: 1 });

            if (query.length === 0) return res.status(404).json({ message: `No existen estados activos` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getaOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await EstadoPlanilla.findById(itemId);

            if (!query) return res.status(404).json({ message: `No existe el estado ${itemId}` });

            res.json({ one: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    createOne: async (req, res) => {
        const { name, valor, estado } = req.body;

        try {
            const newObj = new EstadoPlanilla({
                name,
                valor,
                estado,
            });

            const query = await newObj.save();

            if (query) {
                res.json({ message: "Estado creado con éxito" });
            }
        } catch (err) {
            console.error(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {
        const { itemId } = req.params;
        const { name, valor, estado } = req.body;

        try {
            const query = await EstadoPlanilla.findByIdAndUpdate(itemId, { name, valor, estado });

            if (!query) return res.status(404).json({ message: `No existe estado ${itemId}` });

            res.json({ message: "Estado actualizado con éxito" });
        } catch (err) {
            console.error(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteOneById: async (req, res) => {
        const { itemId } = req.params;

        try {
            const query = await EstadoPlanilla.findByIdAndDelete(itemId);

            if (!query) return res.status(404).json({ message: `No existe estado ${itemId}` });

            res.json({ message: "Estado eliminado con éxito" });
        } catch (err) {
            console.error(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
