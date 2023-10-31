import DocumentoPlanilla from "../models/DocumentoPlanilla";
import EstadoPlanilla from "../models/EstadoPlanilla";
import User from "../models/User";

const controller = {
    getAll: async (req, res) => {
        try {
            const query = await DocumentoPlanilla.find()
                .populate({ path: "userBy", select: "name username documento" })
                .populate({ path: "estadoE", select: "name valor hex" });

            if (query.length === 0) return res.status(404).json({ message: `No se encontraron registros` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    getOneById: async (req, res) => {},

    newOne: async (req, res) => {
        const { periodo, mes, tipoDocumento, user, userBy, estado, estadoE, fechaRegistro, isVisto, fechaVisto } = req.body;

        try {
            const planillaFound = await DocumentoPlanilla.findOne({ tipoDocumento, PERIODO: periodo, user });
            if (planillaFound) {
                return res.json({ message: "Registro ya existe" });
            } else {
                const obj = new DocumentoPlanilla({ PERIODO: periodo, mes, tipoDocumento, user, estado, fechaRegistro, isVisto, fechaVisto });

                const userFound = await User.findOne({ documento: userBy });
                if (!userFound) return res.status(404).json({ message: `Usuario ${userBy} no encontrado` });
                obj.userBy = userFound._id;

                const estadoFound = await EstadoPlanilla.findOne({ name: estadoE });
                console.log(estadoFound);
                if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });
                obj.estadoE = estadoFound._id;

                const query = await obj.save();

                if (query) res.json({ message: `Registro guardado con éxito` });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    updateOneById: async (req, res) => {},

    deleteOneById: async (req, res) => {},

    getFullByYear: async (req, res) => {
        const { tipoDocumento, anioPeriodo, user } = req.body;

        try {
            const query = await DocumentoPlanilla.find({
                tipoDocumento,
                PERIODO: { $regex: ".*" + anioPeriodo + ".*" },
                user,
            })
                .populate({ path: "userBy", select: "name username documento" })
                .populate({ path: "estadoE", select: "name valor hex" });

            // console.log(query);

            if (query.length === 0) return res.status(201).json({ message: `No se encontraron registros` });

            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
