import Circular from "../models/Circular";
import Anio from "../models/Anio";
import CategoriaCircular from "../models/CategoriaCircular";
import TipoCampania from "../models/TipoCampania";

const itemController = {};

itemController.createOne = async (req, res) => {
    const { codigo_interno, fecha_registro, nombre, anio, anioE, mes, categoria, categoriaE, tipo, tipoE } = req.body;
    const avatar = req.file;

    try {
        if (avatar.length == 0) return res.status(404).json({ message: `No se ha cargado ningún archivo` });
        const newObj = new Circular({
            codigo_interno,
            fecha_registro,
            nombre,
            anio,
            mes,
            categoria,
            tipo,
            enlace: avatar.location,
        });

        const anioEFound = await Anio.findOne({ name: anioE });
        if (!anioEFound) return res.status(404).json({ message: `Año ${anioE} no encontrado.` });
        newObj.anioE = anioEFound._id;

        const categoriaEFound = await CategoriaCircular.findOne({ name: categoriaE });
        if (!categoriaEFound) return res.status(404).json({ message: `Categoria ${categoriaE} no encontrada.` });
        newObj.categoriaE = categoriaEFound._id;

        const tipoCampaniaFound = await TipoCampania.findOne({ name: tipoE });
        if (!tipoCampaniaFound) return res.status(404).json({ message: `Tipo ${tipoE} no encontrado.` });
        newObj.tipoE = tipoCampaniaFound._id;

        const query = await newObj.save();

        if (query) res.json({ message: `Circular agregada con éxito!` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

itemController.getAll = async (req, res) => {
    try {
        const query = await Circular.find()
            .sort({ fecha_registro: -1 })
            .populate({
                path: "anioE",
                select: "name",
            })
            .populate({
                path: "categoriaE",
                select: "name",
            })
            .populate({
                path: "tipoE",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen circulares` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

itemController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Circular.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: `Circular eliminada con éxito` });
        } else {
            return res.status(404).json({ message: `Circular ${itemId} no encontrada` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

itemController.getAllByYear = async (req, res) => {
    const { year, month } = req.query;
    let query = null;

    // console.log("Y: ", year);
    // console.log("M: ", month);

    try {
        if (month == null || month == undefined) {
            query = await Circular.find({
                anio: {$regex: '.*' + year + '.*'},
            })
                .sort({ mes: 1 })
                .populate({
                    path: "anioE",
                    select: "name",
                })
                .populate({
                    path: "categoriaE",
                    select: "name",
                })
                .populate({
                    path: "tipoE",
                    select: "name",
                });
        } else {
            query = await Circular.find({
                anio: year,
                mes: month,
            })
                .sort({ mes: 1 })
                .populate({
                    path: "anioE",
                    select: "name",
                })
                .populate({
                    path: "categoriaE",
                    select: "name",
                })
                .populate({
                    path: "tipoE",
                    select: "name",
                });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen circulares en el año ${year}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default itemController;
