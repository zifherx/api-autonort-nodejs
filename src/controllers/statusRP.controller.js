import StatusRP from '../models/StatusRP'

export const getAll = async(req, res) => {
    try {
        const query = await StatusRP.find().sort({ value: 'asc' });
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

export const getStatusRPById = async(req, res) => {
    const { statusRPId } = req.params
    try {
        const query = await StatusRP.findById(statusRPId);
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

export const getStatusRPByActivo = async(req, res) => {
    try {
        const query = await StatusRP.find({ estado: true }).sort({ value: 'asc' });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen Estados activos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createStatusRP = async(req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new StatusRP({ name, value, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateStatusRP = async(req, res) => {
    const { name, value, estado } = req.body;
    const { statusRPId } = req.params;
    try {
        const query = await StatusRP.findByIdAndUpdate(statusRPId, { name, value, estado });
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

export const deleteStatusRP = async(req, res) => {
    const { statusRPId } = req.params;
    try {
        const query = await StatusRP.findByIdAndDelete(statusRPId);
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