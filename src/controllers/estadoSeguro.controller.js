import EstadoSeguro from '../models/EstadoSeguro'

const seguroController = {};

seguroController.getAll = async(req, res) => {
    try {
        const query = await EstadoSeguro.find().sort({ value: 1 });

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

seguroController.getOneById = async(req, res) => {
    const { seguroId } = req.params
    try {
        const query = await EstadoSeguro.findById(seguroId);
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

seguroController.getAllActivos = async(req, res) => {
    try {
        const query = await EstadoSeguro.find({ estado: true }).sort({ value: 1 });
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

seguroController.createOne = async(req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new EstadoSeguro({ name, value, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

seguroController.updateOneById = async(req, res) => {
    const { name, value, estado } = req.body;
    const { seguroId } = req.params;
    try {
        const query = await EstadoSeguro.findByIdAndUpdate(seguroId, { name, value, estado });
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

seguroController.deleteOneById = async(req, res) => {
    const { seguroId } = req.params;
    try {
        const query = await EstadoSeguro.findByIdAndDelete(seguroId);
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

export default seguroController;
