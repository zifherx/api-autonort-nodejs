import Condicion from "../models/Condicion";

export const getCondiciones = async(req, res) => {
    try {
        const query = await Condicion.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getCondicionById = async(req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await Condicion.findById(condicionId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getCondicionByActivo = async(req, res) => {
    try {
        const query = await Condicion.find({ status: "Activo" });
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

export const createCondicion = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Condicion({ name, status });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Condición creada con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateCondicion = async(req, res) => {
    const { name, status } = req.body;
    const { condicionId } = req.params;
    try {

        const query = await Condicion.findByIdAndUpdate(condicionId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Condición actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Condición' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteCondicion = async(req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await Condicion.findByIdAndDelete(condicionId);

        if (query) {
            res.json({ message: 'Condición eliminada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Condicion' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}