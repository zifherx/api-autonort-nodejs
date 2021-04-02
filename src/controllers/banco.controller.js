import Banco from "../models/Banco";

export const getBancos = async(req, res) => {
    try {
        const bancos = await Banco.find().sort({ name: 'asc' });
        if (bancos.length > 0) {
            res.json(bancos);
        } else {
            return res.status(404).json({ message: 'No existen Bancos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getBancoById = async(req, res) => {
    const { bancoId } = req.params;
    try {
        const bancos = await Banco.findById(bancoId);
        if (bancos) {
            res.json(bancos);
        } else {
            return res.status(404).json({ message: 'No existe Banco' })
        }
    } catch (err) {
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const getBancoByActivo = async(req, res) => {
    try {
        const bancos = await Banco.find({ status: "Activo" }).sort({ name: 'asc' });
        if (bancos.length > 0) {
            res.json(bancos);
        } else {
            res.status(404).json({ message: 'No existen Bancos Activos' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message });
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
        console.log(err)
        res.status(409).json({ message: err.message })
    }
}

export const updateBanco = async(req, res) => {
    const { name, status } = req.body;
    const { bancoId } = req.params;
    try {
        const updateBanco = await Banco.findByIdAndUpdate(bancoId, { name, status });

        if (updateBanco) {
            res.json({ message: 'Banco actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Banco a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteBanco = async(req, res) => {
    const { bancoId } = req.params;
    try {
        const deleteBanco = await Banco.findByIdAndDelete(bancoId);
        if (deleteBanco) {
            res.json({ message: 'Banco eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Banco a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}