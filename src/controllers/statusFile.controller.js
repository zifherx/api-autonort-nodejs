import StatusFile from '../models/StatusFile'

export const getAll = async(req, res) => {
    try {
        const objeto = await StatusFile.find().sort({ value: 'asc' });
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen Estados' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getStatusFileById = async(req, res) => {
    const { statusFileId } = req.params
    try {
        const objeto = await StatusFile.findById(statusFileId);
        if (objeto) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existe el Estado' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getStatusFileByActivo = async(req, res) => {
    try {
        const objeto = await StatusFile.find({ status: true }).sort({ value: 'asc' });
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen Estados activos' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const createStatusFile = async(req, res) => {
    const { name, value, status } = req.body;
    try {
        const nuevo = new StatusFile({ name, value, status });
        const objeto = await nuevo.save()
        if (objeto) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const updateStatusFile = async(req, res) => {
    const { name, value, status } = req.body;
    const { statusFileId } = req.params;
    try {
        const objeto = await StatusFile.findByIdAndUpdate(statusFileId, { name, value, status });
        if (objeto) {
            res.json({ message: 'Estado actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Estado a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteStatusFile = async(req, res) => {
    const { statusFileId } = req.params;
    try {
        const objeto = await StatusFile.findByIdAndDelete(statusFileId);
        if (objeto) {
            res.json({ message: 'Estado eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Estado a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}