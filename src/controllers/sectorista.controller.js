import Sectorista from "../models/Sectorista";

export const getSectoristas = async(req, res) => {
    try {
        const sectorista = await Sectorista.find();
        if (sectorista.length > 0) {
            res.send(sectorista);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSectoristaById = async(req, res) => {
    const { sectoristaId } = req.params;
    try {
        const sectorista = await Sectorista.findById(sectoristaId);
        if (sectorista) {
            res.send(sectorista);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSectoristaByActivo = async(req, res) => {
    try {
        const sectorista = await Sectorista.find({ status: "Activo" });
        if (sectorista) {
            res.status(200).json(sectorista);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const createSectorista = async(req, res) => {
    const { name, status } = req.body;
    try {
        const newSectorista = new Sectorista({ name, status });

        const sectoristaCreado = await newSectorista.save();

        if (sectoristaCreado) {
            res.json({ message: 'Sectorista creado con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateSectorista = async(req, res) => {
    const { name, status } = req.body;
    const { sectoristaId } = req.params;
    try {

        const updateSectorista = await Sectorista.findByIdAndUpdate(sectoristaId, { name, status }, { new: true });

        if (updateSectorista) {
            res.json({ message: 'Sectorista actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sectorista' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteSectorista = async(req, res) => {
    const { sectoristaId } = req.params;
    try {

        const deleteSectorista = await Sectorista.findByIdAndDelete(sectoristaId);

        if (deleteSectorista) {
            res.json({ message: 'Sectorista eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sectorista' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}