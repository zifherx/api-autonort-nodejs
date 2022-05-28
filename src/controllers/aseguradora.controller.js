import Aseguradora from '../models/Aseguradora'

export const getAll = async(req, res) => {
    try {
        const query = await Aseguradora.find().sort({ name: 'asc' })
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Aseguradora' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getAseguradoraById = async(req, res) => {
    const { aseguradoraId } = req.params
    try {
        const query = await Aseguradora.findById(aseguradoraId)
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Aseguradora' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getAseguradoraByActivo = async(req, res) => {
    try {
        const query = await Aseguradora.find({ estado: true }).sort({ name: 1 })
        if (query.length > 0) {
            res.json({total_active:query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen Aseguradora Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createAseguradora = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const nuevo = new Aseguradora({ name, estado })
        const query = await nuevo.save()
        if (query) {
            res.json({ message: 'Aseguradora creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateAseguradora = async(req, res) => {
    const { name, estado } = req.body;
    const { aseguradoraId } = req.params;
    try {
        const query = await Aseguradora.findByIdAndUpdate(aseguradoraId, { name, estado })
        if (query) {
            res.json({ message: 'Aseguradora actualizado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Aseguradora a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteAseguradora = async(req, res) => {
    const { aseguradoraId } = req.params;
    try {
        const query = await Aseguradora.findByIdAndDelete(aseguradoraId)
        if (query) {
            res.json({ message: 'Aseguradora eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Aseguradora a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}