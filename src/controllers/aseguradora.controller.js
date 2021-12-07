import Aseguradora from '../models/Aseguradora'

export const getAll = async(req, res) => {
    try {
        const objeto = await Aseguradora.find().sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
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
        const objeto = await Aseguradora.findById(aseguradoraId)
        if (objeto) {
            res.json(objeto);
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
        const objeto = await Aseguradora.find({ status: true }).sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen Aseguradora Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createAseguradora = async(req, res) => {
    const { name, status } = req.body;
    try {
        const nuevo = new Aseguradora({ name, status })
        const objeto = await nuevo.save()
        if (objeto) {
            res.json({ message: 'Aseguradora creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateAseguradora = async(req, res) => {
    const { name, status } = req.body;
    const { aseguradoraId } = req.params;
    try {
        const objeto = await Aseguradora.findByIdAndUpdate(aseguradoraId, { name, status })
        if (objeto) {
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
        const objeto = await Aseguradora.findByIdAndDelete(aseguradoraId)
        if (objeto) {
            res.json({ message: 'Aseguradora eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Aseguradora a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}