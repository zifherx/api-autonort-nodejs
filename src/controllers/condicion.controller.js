import Condicion from "../models/Condicion";

export const getCondiciones = async(req, res) => {
    try {
        const query = await Condicion.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existen Condiciones' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getCondicionById = async(req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await Condicion.findById(condicionId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe Condición' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getCondicionByActivo = async(req, res) => {
    try {
        const query = await Condicion.find({ status: "Activo" }).sort({ name: 'asc' });
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Condiciones Activas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
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
        console.log(err);
        res.status(409).json({ message: err.message })
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
            return res.status(404).json({ message: 'No existe Condición a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteCondicion = async(req, res) => {
    const { condicionId } = req.params;
    try {
        const query = await Condicion.findByIdAndDelete(condicionId);
        if (query) {
            res.json({ message: 'Condición eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Condicion a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}