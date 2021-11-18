import MarcaTasaciones from "../models/MarcaTasaciones";
import ModeloTasaciones from "../models/ModeloTasaciones";

export const getAll = async(req, res) => {
    try {
        const query = await ModeloTasaciones.find()
            .sort({ name: 'asc' })
            .populate({ path: 'marca', select: 'name' })
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Modelos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getModeloById = async(req, res) => {
    const { modeloId } = req.params;
    try {
        const query = await ModeloTasaciones.findById(modeloId)
            .populate({ path: 'marca', select: 'name' })
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe la Modelo' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const getModeloActivos = async(req, res) => {
    try {
        const query = await ModeloTasaciones.find({ status: true })
            .sort({ name: 'asc' })
            .populate({ path: 'marca', select: 'name' });
        if (query.length > 0) {
            res.json({ count: query.length, models: query });
        } else {
            res.status(404).json({ message: 'No existen Modelos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getModelosByMarca = async(req, res) => {
    const { marca } = req.body;
    try {
        const marcaFound = await MarcaTasaciones.findOne({ name: marca });
        if (!marcaFound) return res.status(404).json({ message: `La marca ${marca} no existe` });

        const query = await ModeloTasaciones.find({ marca: marcaFound._id });

        if (query.length > 0) {
            res.json({ count: query.length, models: query });
        } else {
            return res.status(404).json({ message: `La marca ${marca} no tiene modelos creados` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createModelo = async(req, res) => {
    const { marca, name, status } = req.body;
    try {
        const obj = new ModeloTasaciones({ name, status });

        const marcaFound = await MarcaTasaciones.findOne({ name: marca });
        if (!marcaFound) return res.status(404).json({ message: `No existe la Marca ${marca}` })
        obj.marca = marcaFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Modelo creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateModeloById = async(req, res) => {
    const { name, status } = req.body;
    const { modeloId } = req.params;
    try {
        const query = await ModeloTasaciones.findByIdAndUpdate(modeloId, {
            name,
            status
        });

        if (query) {
            res.json({ message: 'Modelo actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Modelo a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteModeloById = async(req, res) => {
    const { modeloId } = req.params;
    try {
        const query = await ModeloTasaciones.findByIdAndDelete(modeloId);
        if (query) {
            res.json({ message: 'Modelo eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Modelo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const countAll = async(req, res) => {
    try {
        const query = await ModeloTasaciones.countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}