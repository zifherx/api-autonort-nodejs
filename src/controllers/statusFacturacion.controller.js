import StatusFacturacion from "../models/StatusFacturacion";

const statusCtrl = {};

statusCtrl.getAll = async(req, res) => {
    try {
        const query = await StatusFacturacion.find().sort({ name: 1 });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen estados de facturación' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

statusCtrl.getOneById = async(req, res) => {
    const { statusId } = req.params;
    try {
        const query = await StatusFacturacion.findById(statusId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe estado de facturación' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

statusCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await StatusFacturacion.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen estados de facturación activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

statusCtrl.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const obj = new StatusFacturacion({ name, estado });

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Estado de facturación creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

statusCtrl.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { statusId } = req.params;
    try {
        const query = await StatusFacturacion.findByIdAndUpdate(statusId, { name, estado });

        if (query) {
            res.json({ message: 'Estado de facturación actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado de facturación a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

statusCtrl.deleteOneById = async(req, res) => {
    const { statusId } = req.params;
    try {
        const query = await StatusFacturacion.findByIdAndDelete(statusId);
        if (query) {
            res.json({ message: 'Estado de facturación eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe estado de facturación a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default statusCtrl;