import Ubicacion from "../models/Ubicacion";

export const getUbicaciones = async(req, res) => {
    try {
        const query = await Ubicacion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Ubicaciones' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getUbicacionById = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findById(ubicacionId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Ubicación' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getUbicacionByActivo = async(req, res) => {
    try {
        const query = await Ubicacion.find({ status: "Activo" });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No hay Ubicaciones Activas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createUbicacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Ubicacion({ name, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Ubicación creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateUbicacion = async(req, res) => {
    const { name, status } = req.body;
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findByIdAndUpdate(ubicacionId, { name, status });
        if (query) {
            res.json({ message: 'Ubicación actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Ubicación a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteUbicacion = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findByIdAndDelete(ubicacionId);
        if (query) {
            res.json({ message: 'Ubicación eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Ubicación a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}