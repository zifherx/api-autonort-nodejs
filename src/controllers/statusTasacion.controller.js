import StatusTasacion from '../models/StatusTasacion'

const statusTasacionCtrl = {};

statusTasacionCtrl.getAll = async(req, res) => {
    try {
        const query = await StatusTasacion.find().sort({ value: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Estados' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

statusTasacionCtrl.getOneById = async(req, res) => {
    const { statusId } = req.params
    try {
        const query = await StatusTasacion.findById(statusId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el Estado' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

statusTasacionCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await StatusTasacion.find({ estado: true }).sort({ value: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Estados activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

statusTasacionCtrl.createOne = async(req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new StatusTasacion({ name, value, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

statusTasacionCtrl.updateOneById = async(req, res) => {
    const { name, value, estado } = req.body;
    const { statusId } = req.params;
    try {
        const query = await StatusTasacion.findByIdAndUpdate(statusId, { name, value, estado });
        if (query) {
            res.json({ message: 'Estado actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Estado a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

statusTasacionCtrl.deleteOneById = async(req, res) => {
    const { statusId } = req.params;
    try {
        const query = await StatusTasacion.findByIdAndDelete(statusId);
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

export default statusTasacionCtrl;
