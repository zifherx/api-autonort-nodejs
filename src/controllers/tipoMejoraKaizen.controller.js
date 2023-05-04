import TipoMejoraKaizen from "../models/TipoMejoraKaizen";

const itemController = {};

itemController.getAll = async(req, res) => {
    try {
        const query = await TipoMejoraKaizen.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Items' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

itemController.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoMejoraKaizen.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Item' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

itemController.getAllActivos = async(req, res) => {
    try {
        const query = await TipoMejoraKaizen.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen items activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

itemController.createOne = async(req, res) => {
    const { cod_interno,name, abreviatura, description, estado } = req.body;
    try {
        const obj = new TipoMejoraKaizen({ cod_interno,name, abreviatura, description, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Item creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

itemController.updateOneById = async(req, res) => {
    const { name, abreviatura, description, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await TipoMejoraKaizen.findByIdAndUpdate(itemId, { name, abreviatura, description, estado });

        if (query) {
            res.json({ message: 'Item actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe item a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

itemController.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoMejoraKaizen.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Item eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe item a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default itemController;
