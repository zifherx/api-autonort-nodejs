import Sustento from "../models/Sustento";

export const getSustentos = async(req, res) => {
    try {
        const query = await Sustento.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Sustentos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSustentoById = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findById(sustentoId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Sustento' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSustentoByActivo = async(req, res) => {
    try {
        const query = await Sustento.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No hay Sustentos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createSustento = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const objeto = new Sustento({ name, estado });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Sustento creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateSustento = async(req, res) => {
    const { name, estado } = req.body;
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findByIdAndUpdate(sustentoId, { name, estado });
        if (query) {
            res.json({ message: 'Sustento actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sustento a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteSustento = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findByIdAndDelete(sustentoId);
        if (query) {
            res.json({ message: 'Sustento eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sustento a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}