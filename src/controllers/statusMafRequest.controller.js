import StatusMafRequest from '../models/StatusMafRequest'

export const getAll = async(req, res) => {
    try {
        const objeto = await StatusMafRequest.find().sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen estados MAF' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const getStatusMafRequestById = async(req, res) => {
    const { statusMafRequestId } = req.params
    try {
        const objeto = await StatusMafRequest.findById(statusMafRequestId)
        if (objeto) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existe estado MAF' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const getStatusMafRequestByActivo = async(req, res) => {
    try {
        const objeto = await StatusMafRequest.find({ status: true }).sort({ name: 'asc' })
        if (objeto.length > 0) {
            res.json(objeto);
        } else {
            return res.status(404).json({ message: 'No existen estados Maf Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const createStatusMafRequest = async(req, res) => {
    const { name, status } = req.body;
    try {
        const nuevo = new StatusMafRequest({ name, status })
        const objeto = await nuevo.save()
        if (objeto) {
            res.json({ message: 'Estado Maf creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const updateStatusMafRequest = async(req, res) => {
    const { name, status } = req.body;
    const { statusMafRequestId } = req.params;
    try {
        const objeto = await StatusMafRequest.findByIdAndUpdate(statusMafRequestId, { name, status })
        if (objeto) {
            res.json({ message: 'Estado Maf actualizado con éxito' })
        } else {
            res.status(404).json({ message: 'No existe Estado Maf a actualizar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}

export const deleteStatusMafRequest = async(req, res) => {
    const { statusMafRequestId } = req.params;
    try {
        const objeto = await StatusMafRequest.findByIdAndDelete(statusMafRequestId)
        if (objeto) {
            res.json({ message: 'Estado Maf eliminado con éxito' })
        } else {
            return res.status(404).json({ message: 'No existe Estado Maf a eliminar' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ error: err })
    }
}