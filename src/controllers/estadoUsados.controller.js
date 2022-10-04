import EstadoUsados from '../models/EstadoUsados'

const estateController = {};

estateController.getAll = async(req, res) => {
    try {
        const query = await EstadoUsados.find().sort({ value: 1 });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estateController.getOneById = async(req, res) => {
    const { itemId } = req.params
    try {
        const query = await EstadoUsados.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el estado' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estateController.getAllActivos = async(req, res) => {
    try {
        const query = await EstadoUsados.find({ estado: true }).sort({ value: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estateController.createOne = async(req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new EstadoUsados({ name, value, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

estateController.updateOneById = async(req, res) => {
    const { name, value, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await EstadoUsados.findByIdAndUpdate(itemId, { name, value, estado });
        if (query) {
            res.json({ message: 'Estado actualizado con éxito' });
        } else {
            res.status(404).json({ message: `No existe estado a actualizar`  });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

estateController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await EstadoUsados.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Estado eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Estado a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export default estateController;