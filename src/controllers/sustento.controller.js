import Sustento from "../models/Sustento";

const sustentoController = {};

sustentoController.getAll = async(req, res) => {
    try {
        const query = await Sustento.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Sustentos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sustentoController.getOneById = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findById(sustentoId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Sustento' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sustentoController.getAllActivos = async(req, res) => {
    try {
        const query = await Sustento.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No hay Sustentos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sustentoController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const objeto = new Sustento({ name, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Sustento creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sustentoController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findByIdAndUpdate(sustentoId, { name, estado });
        if (query) {
            res.json({ message: 'Sustento actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Sustento a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sustentoController.deleteOneById = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findByIdAndDelete(sustentoId);
        if (query) {
            res.json({ message: 'Sustento eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Sustento a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default sustentoController;
