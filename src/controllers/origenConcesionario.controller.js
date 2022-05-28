import OrigenConcesionario from "../models/OrigenConcesionario";

const origenController = {};

origenController.getAll = async(req, res) => {
    try {
        const query = await OrigenConcesionario.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen orígenes' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

origenController.getOneById = async(req, res) => {
    const { origenId } = req.params;
    try {
        const query = await OrigenConcesionario.findById(origenId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe origen' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

origenController.getAllActivos = async(req, res) => {
    try {
        const query = await OrigenConcesionario.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen orígenes activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

origenController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new OrigenConcesionario({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Origen creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

origenController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { origenId } = req.params;
    try {
        const query = await OrigenConcesionario.findByIdAndUpdate(origenId, { name, estado });

        if (query) {
            res.json({ message: 'Origen actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe origen a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

origenController.deleteOneById = async(req, res) => {
    const { origenId } = req.params;
    try {
        const query = await OrigenConcesionario.findByIdAndDelete(origenId);
        if (query) {
            res.json({ message: 'Origen eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe origen a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default origenController;