import Situacion from "../models/Situacion";

export const getSituaciones = async(req, res) => {
    try {
        const query = await Situacion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Situaciones' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getSituacionByActivo = async(req, res) => {
    try {
        const query = await Situacion.find({ status: "Activo" }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Situaciones Activas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getSituacionById = async(req, res) => {
    const { situacionId } = req.params;
    try {
        const query = await Situacion.findById(situacionId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Situación' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createSituacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Situacion({ name, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Situación creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateSituacion = async(req, res) => {
    const { name, status } = req.body;
    const { situacionId } = req.params;
    try {
        const query = await Situacion.findByIdAndUpdate(situacionId, { name, status });
        if (query) {
            res.json({ message: 'Situación actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Situación a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteSituacion = async(req, res) => {
    const { situacionId } = req.params;
    try {
        const query = await Situacion.findByIdAndDelete(situacionId);
        if (query) {
            res.json({ message: 'Situacion eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Situacion a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}