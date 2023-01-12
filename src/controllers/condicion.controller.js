import Condicion from "../models/Condicion";

export const getAll = async(req, res) => {
    try {
        const query = await Condicion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Condiciones' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Condicion.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Condición' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getAllActive = async(req, res) => {
    try {
        const query = await Condicion.find({ estado: true }).sort({ name: 'asc' });
        if (query) {
            res.json({totatl: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Condiciones Activas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const craeteOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const objeto = new Condicion({ name, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Condición creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await Condicion.findByIdAndUpdate(itemId, { name, estado });
        if (query) {
            res.json({ message: 'Condición actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Condición a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Condicion.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Condición eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Condicion a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}
