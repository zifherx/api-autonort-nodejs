import EstadoListaEspera from "../models/EstadoListaEspera";

const estadoController = {};

estadoController.getAll = async(req, res) => {
    try {
        const query = await EstadoListaEspera.find().sort({ valor: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estadoController.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoListaEspera.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe estado' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estadoController.getAllActivos = async(req, res) => {
    try {
        const query = await EstadoListaEspera.find({ estado: true }).sort({ valor: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No hay estados activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estadoController.createOne = async(req, res) => {
    const { name,valor, estado } = req.body;
    try {
        const objeto = new EstadoListaEspera({ name, valor, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Estado creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estadoController.updateOneById = async(req, res) => {
    const { name, valor, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await EstadoListaEspera.findByIdAndUpdate(itemId, { name, valor, estado });
        if (query) {
            res.json({ message: 'Estado actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estadoController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoListaEspera.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Estado eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default estadoController;