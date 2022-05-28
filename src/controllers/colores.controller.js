import Colores from "../models/Colores";

export const getColors = async(req, res) => {
    try {
        const query = await Colores.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.send({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Colores' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getColorByActivo = async(req, res) => {
    try {
        const query = await Colores.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen colores Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getColorById = async(req, res) => {
    const { colorId } = req.params;
    try {
        const query = await Colores.findById(colorId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Color' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createColor = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const newColor = new Colores({ name, estado });
        const query = await newColor.save();
        if (query) {
            res.json({ message: 'Color creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateColor = async(req, res) => {
    const { name, estado } = req.body;
    const { colorId } = req.params;
    try {
        const query = await Colores.findByIdAndUpdate(colorId, { name, estado });
        if (query) {
            res.json({ message: 'Color actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Color' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteColor = async(req, res) => {
    const { colorId } = req.params;
    try {
        const query = await Colores.findByIdAndDelete(colorId);
        if (query) {
            res.json({ message: 'Color eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Color' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}