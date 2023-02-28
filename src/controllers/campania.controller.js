import Campania from "../models/Campania";
import TipoCampania from "../models/TipoCampania";
import ModeloTasaciones from "../models/ModeloTasaciones";
import User from "../models/User";

const campaniaCtrl = {};

campaniaCtrl.getAll = async (req, res) => {
    try {
        const query = await Campania.find()
            .sort({ createdAt: -1 })
            .populate({
                path: "tipo",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: {
                    path: "marca",
                    select: "name avatar",
                },
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen campanias" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.getAllActivos = async (req, res) => {
    try {
        const query = await Campania.find({ estado: true })
            .sort({ startDate: -1 })
            .populate({
                path: "tipo",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: {
                    path: "marca",
                    select: "name avatar",
                },
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen campañas activas" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.getOneById = async (req, res) => {
    const { campaniaId } = req.params;

    try {
        const query = await Campania.findById(campaniaId)
            .sort({ startDate: -1 })
            .populate({
                path: "tipo",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: {
                    path: "marca",
                    select: "name avatar",
                },
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existen la campaña" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.createOne = async (req, res) => {
    const { cod_interno, descripcion, tipo, startDate, endDate, estado, model, versiones, oferta, createdBy } = req.body;

    try {
        const obj = new Campania({
            cod_interno,
            descripcion,
            startDate,
            endDate,
            estado,
            versiones,
            oferta,
        });

        const tipoCFound = await TipoCampania.findOne({ name: tipo });
        if (!tipoCFound) return res.status(404).json({ message: `Tipo de campaña ${tipo} no encontrado` });
        obj.tipo = tipoCFound._id;

        const modelFound = await ModeloTasaciones.findOne({ name: model });
        if (!modelFound) return res.status(404).json({ message: `Modelo ${model} no encontrado` });
        obj.model = modelFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        obj.createdBy = userFound._id;

        const query = obj.save();

        if (query) {
            res.json({ message: "Campaña creada con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.updateOneById = async (req, res) => {
    const { cod_interno,descripcion, startDate, endDate, tipo,model, versiones, oferta, estado } = req.body;
    const { campaniaId } = req.params;

    try {

        const tipoCFound = await TipoCampania.findOne({ name: tipo });
        if (!tipoCFound) return res.status(404).json({ message: `Tipo de campaña ${tipo} no encontrado` });

        const modelFound = await ModeloTasaciones.findOne({ name: model });
        if (!modelFound) return res.status(404).json({ message: `Modelo ${model} no encontrado` });

        const query = await Campania.findByIdAndUpdate(campaniaId, {
            cod_interno,
            descripcion,
            startDate,
            endDate,
            tipo: tipoCFound._id,
            model: modelFound._id,
            versiones,
            oferta,
            estado,
        });

        if (query) {
            res.json({ message: "Campaña actualizada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe campaña a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.deleteOneById = async (req, res) => {
    const { campaniaId } = req.params;

    try {
        const query = await Campania.findByIdAndDelete(campaniaId);

        if (query) {
            res.json({ message: "Campaña eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe campaña a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.findCampaniaByParams = async (req, res) => {
    const { startDate, endDate, model, tipo, version } = req.body;

    try {
        const modelFound = await ModeloTasaciones.findOne({ name: model });
        if (!modelFound) return res.status(404).json({ message: `Modelo ${model} no encontrado` });

        const tipoFound = await TipoCampania.findOne({ name: tipo });
        if (!tipoFound) return res.status(404).json({ message: `Tipo ${tipo} no encontrado` });

        const query = await Campania.find({
            startDate,
            endDate,
            tipo: tipoFound._id,
            versiones: { $in: version },
            model: modelFound._id,
        })
            .sort({ cod_interno: 1 })
            .populate({
                path: "tipo",
                select: "name",
            })
            .populate({
                path: "model",
                select: "name avatar marca",
                populate: {
                    path: "marca",
                    select: "name avatar",
                },
            })
            .populate({
                path: "createdBy",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        }else{
            return res.status(404).json({message: `No existen campañas ${tipo} del ${model}`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

campaniaCtrl.getOfertaByCampania = async (req,res) => {
    const { cod_interno } = req.body;

    try {

        const query = await Campania.findOne({
            cod_interno
        })
        .select('tipo oferta estado startDate endDate')
        .populate({
            path: "tipo",
            select: "name",
        })        

        if (query) {
            res.json({ one: query });
        }else{
            return res.status(404).json({message: `Campania ${cod_interno} no encontrada`});
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default campaniaCtrl;
