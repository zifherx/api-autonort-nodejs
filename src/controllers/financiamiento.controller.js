import Financiamiento from "../models/Financiamiento";

export const getFinanciamientos = async(req, res) => {
    try {
        const query = await Financiamiento.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Financiamientos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getFinanciamientoById = async(req, res) => {
    const { financiamientoId } = req.params;
    try {
        const query = await Financiamiento.findById(financiamientoId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Financiamiento' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getFinanciamientoByActivo = async(req, res) => {
    try {
        const query = await Financiamiento.find({ status: "Activo" }).sort({ name: "asc" });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Financiamientos Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createFinanciamiento = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Financiamiento({ name, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Financiamiento creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateFinanciamiento = async(req, res) => {
    const { name, status } = req.body;
    const { financiamientoId } = req.params;
    try {
        const query = await Financiamiento.findByIdAndUpdate(financiamientoId, { name, status });
        if (query) {
            res.json({ message: 'Financiamiento actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Financiamiento a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteFinanciamiento = async(req, res) => {
    const { financiamientoId } = req.params;
    try {
        const query = await Financiamiento.findByIdAndDelete(financiamientoId);

        if (query) {
            res.json({ message: 'Financiamiento eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Financiamiento a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}