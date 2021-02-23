import Financiamiento from "../models/Financiamiento";

export const getFinanciamientos = async(req, res) => {
    try {
        const query = await Financiamiento.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getFinanciamientoById = async(req, res) => {
    const { financiamientoId } = req.params;
    try {
        const query = await Financiamiento.findById(financiamientoId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getFinanciamientoByActivo = async(req, res) => {
    try {
        const query = await Financiamiento.find({ status: "Activo" });
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
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
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateFinanciamiento = async(req, res) => {
    const { name, status } = req.body;
    const { financiamientoId } = req.params;
    try {

        const query = await Financiamiento.findByIdAndUpdate(financiamientoId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Financiamiento actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Financiamiento' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteFinanciamiento = async(req, res) => {
    const { financiamientoId } = req.params;
    try {
        const query = await Financiamiento.findByIdAndDelete(financiamientoId);

        if (query) {
            res.json({ message: 'Financiamiento eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Financiamiento' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}