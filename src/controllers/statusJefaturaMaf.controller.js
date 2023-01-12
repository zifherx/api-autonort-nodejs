import StatusJefaturaMaf from '../models/StatusJefaturaMaf'

export const getAll = async(req, res) => {
    try {
        const query = await StatusJefaturaMaf.find().sort({ valor: -1 });
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

export const getOneById = async(req, res) => {
    const { itemId } = req.params
    try {
        const query = await StatusJefaturaMaf.findById(itemId);
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

export const getAllActivos = async(req, res) => {
    try {
        const query = await StatusJefaturaMaf.find({ estado: true }).sort({ valor: -1 });
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

export const createOne = async(req, res) => {
    const { name, valor, estado } = req.body;
    try {
        const nuevo = new StatusJefaturaMaf({ name, valor, estado });
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Estado creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateOneById = async(req, res) => {
    const { name, valor, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await StatusJefaturaMaf.findByIdAndUpdate(itemId, { name, valor, estado });
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

export const deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await StatusJefaturaMaf.findByIdAndDelete(itemId);
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