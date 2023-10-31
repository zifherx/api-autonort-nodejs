import Anio from "../models/Anio";

const controller = {
    getAnios: async (req, res) => {
        try {
            const query = await Anio.find().sort({ name: -1 });
            if (query.length > 0) {
                res.json({ total: query.length, all: query });
            } else {
                return res.status(404).json({ message: "No existen Años" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAnioById: async (req, res) => {
        const { anioId } = req.params;
        try {
            const query = await Anio.findById(anioId);
            if (query) {
                res.json({ one: query });
            } else {
                return res.status(404).json({ message: "No existe Año" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getAnioByActivo: async (req, res) => {
        try {
            const query = await Anio.find({ estado: true }).sort({ name: -1 });
            if (query.length > 0) {
                res.json({ total: query.length, all: query });
            } else {
                return res.status(404).json({ message: "No existen Años Activos" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    createAnio: async (req, res) => {
        const { name, estado } = req.body;
        try {
            const newAnio = new Anio({ name, estado });

            const query = await newAnio.save();

            if (query) {
                res.json({ message: "Año creado con éxito" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateAnio: async (req, res) => {
        const { name, estado } = req.body;
        const { anioId } = req.params;
        try {
            const query = await Anio.findByIdAndUpdate(anioId, { name, estado });

            if (query) {
                res.json({ message: "Año actualizado con éxito" });
            } else {
                return res.status(404).json({ message: "No existe Anio a actualizar" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    deleteAnio: async (req, res) => {
        const { anioId } = req.params;
        try {
            const query = await Anio.findByIdAndDelete(anioId);
            if (query) {
                res.json({ message: "Año eliminado con éxito" });
            } else {
                return res.status(404).json({ message: "No existe Año a eliminar" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
