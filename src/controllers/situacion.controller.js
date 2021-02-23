import Situacion from "../models/Situacion";

export const getSituaciones = async(req, res) => {
    try {
        const query = await Situacion.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSituacionByActivo = async(req, res) => {
    try {
        const query = await Situacion.find({ status: "Activo" });
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

export const getSituacionById = async(req, res) => {

    const { situacionId } = req.params;
    try {
        const query = await Situacion.findById(situacionId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const createSituacion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Situacion({ name, status });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Situación creada con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateSituacion = async(req, res) => {
    const { name, status } = req.body;
    const { situacionId } = req.params;
    try {

        const query = await Situacion.findByIdAndUpdate(situacionId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Situación actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Situación' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteSituacion = async(req, res) => {
    const { situacionId } = req.params;
    try {

        const query = await Situacion.findByIdAndDelete(situacionId);

        if (query) {
            res.json({ message: 'Situacion eliminada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Situacion' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}