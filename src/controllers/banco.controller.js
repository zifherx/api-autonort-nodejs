import Banco from "../models/Banco";

export const getBancos = async(req, res) => {
    try {
        const bancos = await Banco.find();
        if (bancos.length > 0) {
            res.send(bancos);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getBancoById = async(req, res) => {
    const { bancoId } = req.params;
    try {
        const bancos = await Banco.findById(bancoId);
        if (bancos) {
            res.send(bancos);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getBancoByActivo = async(req, res) => {
    try {
        const bancos = await Banco.find({ status: "Activo" });
        if (bancos) {
            res.status(200).json(bancos);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const createBanco = async(req, res) => {
    const { name, status } = req.body;
    try {
        const newBanco = new Banco({ name, status });

        const bancoCreado = await newBanco.save();

        if (bancoCreado) {
            res.json({ message: 'Banco creado con éxito' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateBanco = async(req, res) => {
    const { name, status } = req.body;
    const { bancoId } = req.params;
    try {

        const updateBanco = await Banco.findByIdAndUpdate(bancoId, { name, status }, { new: true });

        if (updateBanco) {
            res.json({ message: 'Banco actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Banco' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteBanco = async(req, res) => {
    const { bancoId } = req.params;
    try {

        const deleteBanco = await Banco.findByIdAndDelete(bancoId);

        if (deleteBanco) {
            res.json({ message: 'Banco eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Banco' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}