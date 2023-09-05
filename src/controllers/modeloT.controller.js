import MarcaTasaciones from "../models/MarcaTasaciones";
import ModeloTasaciones from "../models/ModeloTasaciones";

const modeloController = {};

modeloController.getAll = async (req, res) => {
    try {
        const query = await ModeloTasaciones.find().sort({ name: "asc" }).populate({ path: "marca", select: "name avatar" });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Modelos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.getModeloById = async (req, res) => {
    const { modeloId } = req.params;
    try {
        const query = await ModeloTasaciones.findById(modeloId).populate({ path: "marca", select: "name avatar" });
        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe la Modelo" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.getModeloActivos = async (req, res) => {
    try {
        const query = await ModeloTasaciones.find({ estado: true }).sort({ name: "asc" }).populate({ path: "marca", select: "name avatar" });
        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Modelos activos" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.getModelosByMarca = async (req, res) => {
    const { marca } = req.body;
    try {
        const marcaFound = await MarcaTasaciones.findOne({ name: marca });
        if (!marcaFound) return res.status(404).json({ message: `La marca ${marca} no existe` });

        const query = await ModeloTasaciones.find({ marca: marcaFound._id }).sort({ name: 1 }).populate({ path: "marca", select: "name avatar" });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `La marca ${marca} no tiene modelos creados` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.getModelosByName = async (req, res) => {
    const { name } = req.body;
    try {
        const query = await ModeloTasaciones.findOne({ name: name }).sort({ name: "asc" }).populate({ path: "marca", select: "name avatar" });

        if (query) {
            res.json({ total_model: query.length, all_model: query });
        } else {
            return res.status(404).json({ message: `El modelo ${name} no existe` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.createModelo = async (req, res) => {
    const { marca, name, estado } = req.body;
    const avatar = req.file;
    try {
        let obj = null;
        if (avatar == undefined || avatar == null) {
            obj = new ModeloTasaciones({
                name,
                estado,
            });
        } else {
            obj = new ModeloTasaciones({
                avatar: avatar.location,
                name,
                estado,
            });
        }

        const marcaFound = await MarcaTasaciones.findOne({ name: marca });
        if (!marcaFound) return res.status(404).json({ message: `No existe la Marca ${marca}` });
        obj.marca = marcaFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Modelo creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.updateModeloById = async (req, res) => {
    const { marca, name, estado } = req.body;
    const { modeloId } = req.params;
    const avatar = req.file;

    try {
        const marcaFound = await MarcaTasaciones.findOne({ name: marca });

        let query = null;
        if (avatar == undefined || avatar == null) {
            query = await ModeloTasaciones.findByIdAndUpdate(modeloId, {
                marca: marcaFound._id,
                name,
                estado,
            });
        } else {
            query = await ModeloTasaciones.findByIdAndUpdate(modeloId, {
                marca: marcaFound._id,
                avatar: avatar.location,
                name,
                estado,
            });
        }

        if (query) {
            res.json({ message: "Modelo actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Modelo a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

modeloController.deleteModeloById = async (req, res) => {
    const { modeloId } = req.params;
    try {
        const query = await ModeloTasaciones.findByIdAndDelete(modeloId);
        if (query) {
            res.json({ message: "Modelo eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Modelo a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default modeloController;
