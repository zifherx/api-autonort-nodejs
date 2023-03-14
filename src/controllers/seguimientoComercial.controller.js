import SeguimientoComercial from "../models/SeguimientoComercial";
import Seller from "../models/Seller";
import Sucursal from "../models/Sucursal";
import User from "../models/User";

const controller = {
    getAll: async (req, res) => {
        try {
            const query = await SeguimientoComercial.find({})
                .sort({ fecha_registro: -1 })
                .populate({
                    path: "sedeE",
                    select: "name",
                })
                .populate({
                    path: "sellerE",
                    select: "name avatar email cellphone",
                })
                .populate({
                    path: "createdBy",
                    select: "name username",
                })
                .populate({
                    path: "producto",
                    select: "name areaE",
                    populate: {
                        path: "areaE",
                        select: "name",
                    },
                })
                .populate({
                    path: "metasE",
                    select: "codigo_interno valor estado fecha_registro sedeE producto_autonort",
                    populate: [
                        {
                            path: "producto_autonort",
                            select: "name areaE",
                            populate: {
                                path: "areaE",
                                select: "name",
                            },
                        },
                        {
                            path: "sedeE",
                            select: "name",
                        },
                    ],
                });

            if (query.length === 0) {
                return res.status(404).json({ message: "No existen registros" });
            }
            res.json({ total: query.length, all: query });
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    createOne: async (req, res) => {
        const { codigo_interno, fecha_registro, mes, anio, sede, sedeE, seller, sellerE, cadena_valor, avanceGlobal, createdBy } = req.body;

        try {
            const obj = new SeguimientoComercial({
                codigo_interno,
                fecha_registro,
                mes,
                anio,
                sede,
                seller,
                cadena_valor,
                avanceGlobal,
            });

            const sedeFound = await Sucursal.findOne({ name: sedeE });
            if (!sedeFound) return res.status(404).json({ message: `Sede ${sedeE} no encontrada` });
            obj.sedeE = sedeFound._id;

            const sellerFound = await Seller.findOne({ name: sellerE });
            if (!sellerFound) return res.status(404).json({ message: `Vendedor ${sellerE} no encontrado` });
            obj.sellerE = sellerFound._id;

            const userFound = await User.findOne({ name: createdBy });
            if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
            obj.createdBy = userFound._id;

            const query = await obj.save();

            if (query) {
                res.json({ message: "Tipo de producto creado con éxito" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default controller;
