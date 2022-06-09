import Mes from "../models/Mes";

const mesController = {};

mesController.getAll = async(req, res) => {
    try {
        const query = await Mes.find().sort({ numero: -1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen meses' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

mesController.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Mes.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe mes' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

mesController.getAllActive = async(req, res) => {
    try {
        const query = await Mes.find({ estado: true }).sort({ numero: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen meses activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

mesController.createOne = async(req, res) => {
    const { name, abreviatura, numero, estado } = req.body;
    try {
        const obj = new Mes({ name,abreviatura, numero, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Mes creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

mesController.updateOneById = async(req, res) => {
    const { name, abreviatura, numero, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await Mes.findByIdAndUpdate(itemId, { name, abreviatura, numero,estado });

        if (query) {
            res.json({ message: 'Mes actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe mes a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

mesController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Mes.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Mes eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe mes a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default mesController;