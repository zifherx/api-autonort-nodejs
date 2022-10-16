import EstadoTunningAccesorio from '../models/EstadoTunningAccesorio';

const estadoController = {};

estadoController.getAll = async(req, res) => {
    try {
        const query = await EstadoTunningAccesorio.find().sort({ valor: 1 })
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.getOneById = async(req, res) => {
    const { itemId } = req.params
    try {
        const query = await EstadoTunningAccesorio.findById(itemId)
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe estado' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.getAllActivos = async(req, res) => {
    try {
        const query = await EstadoTunningAccesorio.find({ estado: true }).sort({ valor: 1 })
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.createOne = async(req, res) => {
    const { name, estado, valor } = req.body;
    try {
        const obj = new EstadoTunningAccesorio({ name, estado, valor });
        const query = await obj.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.updateOneById = async(req, res) => {
    const { name, estado,valor } = req.body;
    const { itemId } = req.params;
    try {
        const query = await EstadoTunningAccesorio.findByIdAndUpdate(itemId, { name, estado, valor });
        if (query) {
            res.json({ message: 'Estado actualizado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Estado a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estadoController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoTunningAccesorio.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Estado eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Estado a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default estadoController;