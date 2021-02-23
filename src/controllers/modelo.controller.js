import Modelo from "../models/Modelo";

export const getModelos = async(req, res) => {
    try {
        const modelos = await Modelo.find();
        if (modelos.length > 0) {
            res.status(200).json(modelos);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const getModeloById = async(req, res) => {
    const { modeloId } = req.params;
    try {
        const modelos = await Modelo.findById(modeloId);
        if (modelos) {
            res.send(modelos);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const getModeloByActivo = async(req, res) => {
    try {
        const modelos = await Modelo.find({ status: "Activo" });
        if (modelos) {
            res.status(200).json(modelos);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const createModelo = async(req, res) => {
    const { name, status } = req.body;
    try {
        const newModelo = new Modelo({ name, status });

        const modeloCreado = await newModelo.save();

        if (modeloCreado) {
            res.json({ message: 'Modelo creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateModelo = async(req, res) => {
    const { name, status } = req.body;
    const { modeloId } = req.params;
    try {

        const updateModelo = await Modelo.findByIdAndUpdate(modeloId, { name, status }, { new: true });

        if (updateModelo) {
            res.json({ message: 'Modelo actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Modelo' });
        }
    } catch (err) {
        console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteModelo = async(req, res) => {
    const { modeloId } = req.params;
    try {

        const deleteModelo = await Modelo.findByIdAndDelete(modeloId);

        if (deleteModelo) {
            res.json({ message: 'Modelo eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Modelo' });
        }
    } catch (err) {
        console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}