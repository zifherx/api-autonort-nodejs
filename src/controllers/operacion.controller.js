import Operacion from "../models/Operacion";

export const getAll = async(req, res) => {
    try {
        const query = await Operacion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Orígenes' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getOperacionById = async(req, res) => {
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findById(operacionId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Origen' })
        }
    } catch (err) {
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const getOperacionActivos = async(req, res) => {
    try {
        const query = await Operacion.find({ status: "Activo" }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No existen Orígenes Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message });
    }
}

export const createOperacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const query = new Operacion({ name, status });

        const newObj = await query.save();

        if (newObj) {
            res.json({ message: 'Origen creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const updateOperacion = async(req, res) => {
    const { name, status } = req.body;
    const { operacionId } = req.params;
    try {
        const query = await Operacion.findByIdAndUpdate(operacionId, { name, status });

        if (query) {
            res.json({ message: 'Origen actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Origen a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteOperacion = async(req, res) => {
    const { aniooperacionIdId } = req.params;
    try {
        const query = await Operacion.findByIdAndDelete(operacionId);
        if (query) {
            res.json({ message: 'Origen eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Origen a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}