import TipoCampania from "../models/TipoCampania";

const  tipoCampaniaCtrl = {};

tipoCampaniaCtrl.getAll = async(req, res) => {
    try {
        const query = await TipoCampania.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen tipos de campañas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tipoCampaniaCtrl.getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoCampania.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe tipo de campaña' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

tipoCampaniaCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await TipoCampania.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen tipos de campañas activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

tipoCampaniaCtrl.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new TipoCampania({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Tipo de campaña creada con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

tipoCampaniaCtrl.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await TipoCampania.findByIdAndUpdate(itemId, { name, estado });

        if (query) {
            res.json({ message: 'Tipo de campaña actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe tipo de campaña a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tipoCampaniaCtrl.deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await TipoCampania.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Tipo de campaña eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe tipo de campaña a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default tipoCampaniaCtrl;