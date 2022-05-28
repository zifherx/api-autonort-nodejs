import FiltroMaf from '../models/FiltroMaf';

const estadoController = {};

estadoController.getAll = async(req, res) => {
    try {
        const query = await FiltroMaf.find().sort({ name: 1 })
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen filtros' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.getOneById = async(req, res) => {
    const { estadoId } = req.params
    try {
        const query = await FiltroMaf.findById(estadoId)
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe filtro' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.getAllActivos = async(req, res) => {
    try {
        const query = await FiltroMaf.find({ estado: true }).sort({ name: 1 })
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen filtros activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new FiltroMaf({ name, estado });
        const query = await obj.save()
        if (query) {
            res.json({ message: 'Estado de filtro creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.updateOneById = async(req, res) => {
    const { name, estado,value } = req.body;
    const { estadoId } = req.params;
    try {
        const query = await FiltroMaf.findByIdAndUpdate(estadoId, { name, estado, value });
        if (query) {
            res.json({ message: 'Estado de filtro actualizado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Estado Maf a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.deleteOneById = async(req, res) => {
    const { estadoId } = req.params;
    try {
        const query = await FiltroMaf.findByIdAndDelete(estadoId);
        if (query) {
            res.json({ message: 'Estado de filtro eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Estado Maf a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default estadoController;