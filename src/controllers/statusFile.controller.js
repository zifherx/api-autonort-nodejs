import StatusFile from '../models/StatusFile'

export const getAll = async(req, res) => {
    try {
        const query = await StatusFile.find().sort({ value: 'asc' });
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

export const getStatusFileById = async(req, res) => {
    const { statusFileId } = req.params
    try {
        const query = await StatusFile.findById(statusFileId);
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

export const getStatusFileByActivo = async(req, res) => {
    try {
        const query = await StatusFile.find({ estado: true }).sort({ value: 'asc' });
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

export const createStatusFile = async(req, res) => {
    const { name, value, estado } = req.body;
    try {
        const nuevo = new StatusFile({ name, value, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateStatusFile = async(req, res) => {
    const { name, value, estado } = req.body;
    const { statusFileId } = req.params;
    try {
        const query = await StatusFile.findByIdAndUpdate(statusFileId, { name, value, estado });
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

export const deleteStatusFile = async(req, res) => {
    const { statusFileId } = req.params;
    try {
        const query = await StatusFile.findByIdAndDelete(statusFileId);
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