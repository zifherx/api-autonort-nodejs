import Anio from "../models/Anio";

export const getAnios = async(req, res) => {
    try {
        const Anios = await Anio.find().sort({ name: 'asc' });
        if (Anios.length > 0) {
            res.json(Anios);
        } else {
            return res.status(404).json({ message: 'No existen Años' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getAnioById = async(req, res) => {
    const { anioId } = req.params;
    try {
        const anios = await Anio.findById(anioId);
        if (anios) {
            res.json(anios);
        } else {
            return res.status(404).json({ message: 'No existe Año' })
        }
    } catch (err) {
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const getAnioByActivo = async(req, res) => {
    try {
        const anios = await Anio.find({ status: "Activo" }).sort({ name: 'asc' });
        if (anios.length > 0) {
            res.json(anios);
        } else {
            res.status(404).json({ message: 'No existen Años Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message });
    }
}

export const createAnio = async(req, res) => {
    const { name, status } = req.body;
    try {
        const newAnio = new Anio({ name, status });

        const anioCreado = await newAnio.save();

        if (anioCreado) {
            res.json({ message: 'Año creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const updateAnio = async(req, res) => {
    const { name, status } = req.body;
    const { anioId } = req.params;
    try {
        const updateAnio = await Anio.findByIdAndUpdate(anioId, { name, status });

        if (updateAnio) {
            res.json({ message: 'Año actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Anio a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteAnio = async(req, res) => {
    const { anioId } = req.params;
    try {
        const deleteAnio = await Anio.findByIdAndDelete(anioId);
        if (deleteAnio) {
            res.json({ message: 'Año eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Año a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}