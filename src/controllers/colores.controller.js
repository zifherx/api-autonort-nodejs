import Colores from "../models/Colores";

export const getColors = async(req, res) => {
    try {
        const colores = await Colores.find();
        if (colores.length > 0) {
            res.send(colores);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getColorByActivo = async(req, res) => {
    try {
        const colores = await Colores.find({ status: "Activo" });
        if (colores.length > 0) {
            res.send(colores);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const getColorById = async(req, res) => {
    const { colorId } = req.params;
    try {
        const color = await Colores.findById(colorId);
        if (color) {
            res.send(color);
        } else {
            res.status(404).json({ message: 'No existe Color' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const createColor = async(req, res) => {
    const { name, status } = req.body;
    try {
        const newColor = new Colores({ name, status });

        const colorCreado = await newColor.save();

        if (colorCreado) {
            res.json({ message: 'Color creado con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateColor = async(req, res) => {
    const { name, status } = req.body;
    const { colorId } = req.params;
    try {

        const updateColor = await Colores.findByIdAndUpdate(colorId, { name, status }, { new: true });

        if (updateColor) {
            res.json({ message: 'Color actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Color' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteColor = async(req, res) => {
    const { colorId } = req.params;
    try {

        const deleteColor = await Colores.findByIdAndDelete(colorId);

        if (deleteColor) {
            res.json({ message: 'Color eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Color' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}