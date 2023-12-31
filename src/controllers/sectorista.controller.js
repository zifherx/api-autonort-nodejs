import Sectorista from "../models/Sectorista";

export const getSectoristas = async(req, res) => {
    try {
        const sectorista = await Sectorista.find().sort({ name: 'asc' });
        if (sectorista.length > 0) {
            res.json(sectorista);
        } else {
            return res.status(404).json({ message: 'No existen Sectoritas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSectoristaById = async(req, res) => {
    const { sectoristaId } = req.params;
    try {
        const sectorista = await Sectorista.findById(sectoristaId);
        if (sectorista) {
            res.json(sectorista);
        } else {
            return res.status(404).json({ message: 'No existe Sectorista' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSectoristaByActivo = async(req, res) => {
    try {
        const query = await Sectorista.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Sectoristas Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const createSectorista = async(req, res) => {
    const { name, estado } = req.body;
    try {

        const newSectorista = new Sectorista({ name, estado });

        const sectoristaCreado = await newSectorista.save();
        if (sectoristaCreado) {
            res.json({ message: 'Sectorista creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateSectorista = async(req, res) => {
    const { name, estado } = req.body;
    const { sectoristaId } = req.params;
    try {

        const updateSectorista = await Sectorista.findByIdAndUpdate(sectoristaId, { name, estado });

        if (updateSectorista) {
            res.json({ message: 'Sectorista actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sectorista a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteSectorista = async(req, res) => {
    const { sectoristaId } = req.params;
    try {
        const deleteSectorista = await Sectorista.findByIdAndDelete(sectoristaId);
        if (deleteSectorista) {
            res.json({ message: 'Sectorista eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sectorista a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}