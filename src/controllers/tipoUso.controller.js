import TipoUso from "../models/TipoUso";

const usoController = {};

usoController.getAll = async(req, res) => {
    try {
        const query = await TipoUso.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen tipos de uso' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

usoController.getOneById = async(req, res) => {
    const { usoId } = req.params;
    try {
        const query = await TipoUso.findById(usoId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe tipo de uso' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

usoController.getAllByActivo = async(req, res) => {
    try {
        const query = await TipoUso.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen tipos de uso activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

usoController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new TipoUso({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Tipo de uso creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

usoController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { usoId } = req.params;
    try {
        const query = await TipoUso.findByIdAndUpdate(usoId, { name, estado });

        if (query) {
            res.json({ message: 'Tipo de uso actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe tipo de uso a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

usoController.deleteOneById = async(req, res) => {
    const { usoId } = req.params;
    try {
        const query = await TipoUso.findByIdAndDelete(usoId);
        if (query) {
            res.json({ message: 'Tipo de uso eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe tipo de uso a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default usoController;