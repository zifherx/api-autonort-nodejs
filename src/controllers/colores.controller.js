import Colores from "../models/Colores";

export const getAll = async(req, res) => {
    try {
        const query = await Colores.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.send({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen colores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getAllByActive = async(req, res) => {
    try {
        const query = await Colores.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen colores activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Colores.findById(itemId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe color' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createOne = async(req, res) => {
    const { name, codigo_toyota, hex,  estado } = req.body;
    try {
        const newObj = new Colores({ name, codigo_toyota, hex, estado });
        const query = await newObj.save();
        if (query) {
            res.json({ message: 'Color creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateOneById = async(req, res) => {
    const { name, codigo_toyota, hex,  estado } = req.body;
    const { itemId } = req.params;
    try {
        const query = await Colores.findByIdAndUpdate(itemId, { name, codigo_toyota, hex,  estado });
        if (query) {
            res.json({ message: 'Color actualizado con éxito' });
        } else {
            return res.status(404).json({ message: `No existe color ${itemId}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteOneById = async(req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Colores.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: 'Color eliminado con éxito' });
        } else {
            return res.status(404).json({ message: `No existe color ${itemId}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}