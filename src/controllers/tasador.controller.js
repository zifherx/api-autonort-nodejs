import Tasador from "../models/Tasador";

export const getTasadores = async(req, res) => {
    try {
        const query = await Tasador.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Tasadores' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getTasadorById = async(req, res) => {
    const { tasadorId } = req.params;
    try {
        const query = await Tasador.findById(tasadorId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Tasador' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getTasadorByActivo = async(req, res) => {
    try {
        const query = await Tasador.find({ status: "Activo" }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No hay Tasadores Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createTasador = async(req, res) => {
    const { name, document, sucursal, status } = req.body;
    try {
        const objeto = new Tasador({ name, document, sucursal, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Tasador creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateTasador = async(req, res) => {
    const { name, document, sucursal, status } = req.body;
    const { tasadorId } = req.params;
    try {
        const query = await Tasador.findByIdAndUpdate(tasadorId, { name, document, sucursal, status });
        if (query) {
            res.json({ message: 'Tasador actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Tasador a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteTasador = async(req, res) => {
    const { tasadorId } = req.params;
    try {
        const query = await Tasador.findByIdAndDelete(tasadorId);
        if (query) {
            res.json({ message: 'Tasador eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Tasador a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}