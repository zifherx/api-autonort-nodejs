import Conexos from "../models/Conexos";
import User from '../models/User'

export const getConexos = async(req, res) => {
    try {
        const query = await Conexos.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Asesores de Conexos' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getConexoByActivo = async(req, res) => {
    try {
        const query = await Conexos.find({ status: 'Activo' }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query)
        } else {
            return res.status(404).json({ message: 'No existen Asesores Activos' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const getConexoById = async(req, res) => {
    const { conexoId } = req.params;
    try {
        const query = await Conexos.findById(conexoId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe el Asesor' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const createConexo = async(req, res) => {

    const { name, email, area, sucursal, status, createdBy } = req.body;

    try {
        const newObj = new Conexos({ name, email, area, sucursal, status });

        const userFound = await User.find({ username: { $in: createdBy } })
        newObj.createdBy = userFound.map(a => a._id)

        const query = await newObj.save();
        if (query) {
            res.json({ message: 'Asesor creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const updateConexo = async(req, res) => {
    const { name, email, area, sucursal, status } = req.body;
    const { conexoId } = req.params;
    try {
        const newObj = await Conexos.findByIdAndUpdate(conexoId, { name, email, area, sucursal, status });
        if (newObj) {
            res.json({ message: 'Asesor actualizado con éxito' });
        } else {
            return res.json(404).json({ message: 'No existe Asesor a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }

}

export const deleteConexo = async(req, res) => {
    const { conexoId } = req.params;
    try {
        const newObj = await Conexos.findByIdAndDelete(conexoId);
        if (newObj) {
            res.json({ message: 'Asesor eliminado con éxito' });
        } else {
            return res.json(404).json({ message: 'No existe Asesor a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message });
    }
}

export const obtenerAsesorxSucursal = async(req, res) => {
    const { sucursal, area } = req.body

    try {
        const query = await Conexos.findOne({ sucursal: sucursal, area: area, status: 'Activo' }).select('name email');

        if (query) {
            res.json({ asesor: query })
        } else {
            return res.status(404).json({ message: 'No se encontraron asesores' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}