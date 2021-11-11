import Operacion from "../models/Operacion";

export const getAll = async(req, res) => {
    try {
        const query = await Operacion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Tipos de operaciónes' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const getOperacionById = async(req, res) => {
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findById(operacionId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Tipo de operación' })
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: err.message })
    }
}

export const getOperacionActivos = async(req, res) => {
    try {
        const query = await Operacion.find({ status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No existen Tipos de operación' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const createOperacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const query = new Operacion({ name, status });

        const newObj = await query.save();

        if (newObj) {
            res.json({ message: 'Tipo de operación creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        res.status(503).json({ message: err.message })
    }
}

export const updateOperacion = async(req, res) => {
    const { name, status } = req.body;
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findByIdAndUpdate(operacionId, { name, status });

        if (query) {
            res.json({ message: 'Tipo de operación actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Tipo de operación a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const deleteOperacion = async(req, res) => {
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findByIdAndDelete(operacionId);
        if (query) {
            res.json({ message: 'Tipo de operación eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Tipo de operación a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}