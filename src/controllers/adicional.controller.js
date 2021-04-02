import Adicional from '../models/Adicional'
import User from '../models/User'

export const createAdicional = async(req, res) => {
    const { name, descripcion, bono, startDate, endDate, status, empleado } = req.body;

    try {

        const objeto = new Adicional({ name, descripcion, bono, startDate, endDate, status });
        const foundEmployee = await User.find({ username: { $in: empleado } });
        objeto.empleado = foundEmployee.map(em => em._id);

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Adicional creada con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getAll = async(req, res) => {
    try {
        const query = await Adicional.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Adicionales' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getOne = async(req, res) => {
    const { adicionalId } = req.params;
    try {
        const query = await Adicional.findById(adicionalId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Adicional' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getAdicionalActivos = async(req, res) => {
    try {
        const query = await Adicional.find({ status: 'Activo' }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No existen Adicionales Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}


export const updateAdicionalById = async(req, res) => {
    const { adicionalId } = req.params;
    const { name, descripcion, bono, startDate, endDate, status } = req.body;
    try {

        const query = await Adicional.findByIdAndUpdate(adicionalId, { name, descripcion, bono, startDate, endDate, status });
        if (query) {
            res.json({ message: 'Adicional actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Adicional a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteAdicionalById = async(req, res) => {
    const { adicionalId } = req.params;
    try {
        const query = await Adicional.findByIdAndDelete(adicionalId);
        if (query) {
            res.json({ message: 'Adicional eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'Adicional no existe a eliminar' });
        }

    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}