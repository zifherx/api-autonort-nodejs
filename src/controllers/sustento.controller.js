import Sustento from "../models/Sustento";

export const getSustentos = async(req, res) => {
    try {
        const query = await Sustento.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSustentoById = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findById(sustentoId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSustentoByActivo = async(req, res) => {
    try {
        const query = await Sustento.find({ status: "Activo" });
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

export const createSustento = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Sustento({ name, status });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Sustento creado con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateSustento = async(req, res) => {
    const { name, status } = req.body;
    const { sustentoId } = req.params;
    try {

        const query = await Sustento.findByIdAndUpdate(sustentoId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Sustento actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sustento' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteSustento = async(req, res) => {
    const { sustentoId } = req.params;
    try {
        const query = await Sustento.findByIdAndDelete(sustentoId);

        if (query) {
            res.json({ message: 'Sustento eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sustento' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}