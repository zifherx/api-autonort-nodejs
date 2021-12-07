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
        return res.status(503).json({ message: err.message })
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
        return res.status(503).json({ message: err.message })
    }
}

export const getBancoByActivo = async(req, res) => {
    try {
        const bancos = await Banco.find({ status: true }).sort({ name: 'asc' });
        if (bancos.length > 0) {
            res.json(bancos);
        } else {
            return res.status(404).json({ message: 'No existen Bancos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createBanco = async(req, res) => {
    const { name, status } = req.body;
    const avatar = req.file;

    try {
        let obj = null;
        if (avatar == undefined || avatar == null) {
            obj = new Banco({ name, status });
        } else {
            obj = new Banco({
                avatar: avatar.location,
                name,
                status
            });
        }

        const query = await newBanco.save();

        if (query) {
            res.json({ message: 'Banco creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const updateBanco = async(req, res) => {
    const { name, status } = req.body;
    const { bancoId } = req.params;
    const avatar = req.file;

    try {
        let query = null;

        if (avatar == undefined || avatar == null) {
            query = await Banco.findByIdAndUpdate(bancoId, {
                name,
                status
            });
        } else {
            query = await Banco.findByIdAndUpdate(bancoId, {
                avatar: avatar.location,
                name,
                status
            });
        }

        if (query) {
            res.json({ message: 'Banco actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Banco a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteBanco = async(req, res) => {
    const { bancoId } = req.params;
    try {
        const query = await Banco.findByIdAndDelete(bancoId);
        if (query) {
            res.json({ message: 'Banco eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Banco a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}