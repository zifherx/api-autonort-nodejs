import StatusAAP from '../models/StatusAAP'

export const getAll = async(req, res) => {
    try {
        const query = await StatusAAP.find().sort({ value: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Estados' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getStatusAAPById = async(req, res) => {
    const { statusAAPId } = req.params
    try {
        const query = await StatusAAP.findById(statusAAPId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe el Estado' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getStatusAAPByActivo = async(req, res) => {
    try {
        const query = await StatusAAP.find({ status: true }).sort({ value: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Estados activos' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const createStatusAAP = async(req, res) => {
    const { name, value, status } = req.body;
    try {
        const nuevo = new StatusAAP({ name, value, status });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const updateStatusAAP = async(req, res) => {
    const { name, value, status } = req.body;
    const { statusAAPId } = req.params;
    try {
        const query = await StatusAAP.findByIdAndUpdate(statusAAPId, { name, value, status });
        if (query) {
            res.json({ message: 'Estado actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Estado a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteStatusAAP = async(req, res) => {
    const { statusAAPId } = req.params;
    try {
        const query = await StatusAAP.findByIdAndDelete(statusAAPId);
        if (query) {
            res.json({ message: 'Estado eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Estado a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}