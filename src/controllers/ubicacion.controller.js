import Ubicacion from "../models/Ubicacion";

const ubicacionController = {};

ubicacionController.getAll = async(req, res) => {
    try {
        const query = await Ubicacion.find().sort({ valor: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Ubicaciones' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

ubicacionController.getOneById = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findById(ubicacionId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Ubicación' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

ubicacionController.getAllActivos = async(req, res) => {
    try {
        const query = await Ubicacion.find({ estado: true }).sort({ valor: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No hay Ubicaciones Activas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

ubicacionController.createOne = async(req, res) => {
    const { name,valor, estado } = req.body;
    try {
        const objeto = new Ubicacion({ name, value, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Ubicación creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

ubicacionController.updateOneById = async(req, res) => {
    const { name, valor, estado } = req.body;
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findByIdAndUpdate(ubicacionId, { name, valor, estado });
        if (query) {
            res.json({ message: 'Ubicación actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Ubicación a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

ubicacionController.deleteOneById = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findByIdAndDelete(ubicacionId);
        if (query) {
            res.json({ message: 'Ubicación eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Ubicación a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default ubicacionController;