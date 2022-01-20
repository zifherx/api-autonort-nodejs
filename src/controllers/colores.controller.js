import Colores from "../models/Colores";

export const getColors = async(req, res) => {
    try {
        const colores = await Colores.find().sort({ name: 'asc' });
        if (colores.length > 0) {
            res.send(colores);
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
        const colores = await Colores.find({ estado: true }).sort({ name: 'asc' });
        if (colores.length > 0) {
            res.json(colores);
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
        const color = await Colores.findById(colorId);
        if (color) {
            res.send(color);
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
        const colorCreado = await newColor.save();
        if (colorCreado) {
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
        const updateColor = await Colores.findByIdAndUpdate(colorId, { name, estado });
        if (updateColor) {
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
        const deleteColor = await Colores.findByIdAndDelete(colorId);
        if (deleteColor) {
            res.json({ message: 'Color eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Color' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}