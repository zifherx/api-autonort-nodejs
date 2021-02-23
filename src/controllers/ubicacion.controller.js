import Ubicacion from "../models/Ubicacion";

export const getUbicaciones = async(req, res) => {
    try {
        const query = await Ubicacion.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getUbicacionById = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findById(ubicacionId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getUbicacionByActivo = async(req, res) => {
    try {
        const query = await Ubicacion.find({ status: "Activo" });
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const createUbicacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Ubicacion({ name, status });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Ubicación creado con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateUbicacion = async(req, res) => {
    const { name, status } = req.body;
    const { ubicacionId } = req.params;
    try {

        const query = await Ubicacion.findByIdAndUpdate(ubicacionId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Ubicación actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Ubicación' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteUbicacion = async(req, res) => {
    const { ubicacionId } = req.params;
    try {
        const query = await Ubicacion.findByIdAndDelete(ubicacionId);

        if (query) {
            res.json({ message: 'Ubicación eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Ubicación' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}