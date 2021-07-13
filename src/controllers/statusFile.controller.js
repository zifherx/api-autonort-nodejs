import StatusFile from '../models/StatusFile'

export const getAll = async(req, res) => {
    try {
        const objeto = await StatusFile.find().sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen StatusFile' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getStatusFileById = async(req, res) => {
    const { statusFileId } = req.params
    try {
        const objeto = await StatusFile.findById(statusFileId)
        if (objeto) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existe StatusFile' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getStatusFileByActivo = async(req, res) => {
    try {
        const objeto = await StatusFile.find({ status: "Activo" }).sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen StatusFile Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createStatusFile = async(req, res) => {
    const { name, status } = req.body;
    try {
        const nuevo = new StatusFile({ name, status })
        const objeto = await nuevo.save()
        if (objeto) {
            res.json({ message: 'StatusFile creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateStatusFile = async(req, res) => {
    const { name, status } = req.body;
    const { statusFileId } = req.params;
    try {
        const objeto = await StatusFile.findByIdAndUpdate(statusFileId, { name, status })
        if (objeto) {
            res.json({ message: 'StatusFile actualizado con éxito' })
        } else {
            res.status(404).json({ message: 'No existe StatusFile a actualizar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteStatusFile = async(req, res) => {
    const { statusFileId } = req.params;
    try {
        const objeto = await StatusFile.findByIdAndDelete(statusFileId)
        if (objeto) {
            res.json({ message: 'StatusFile eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe StatusFile a eliminar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}