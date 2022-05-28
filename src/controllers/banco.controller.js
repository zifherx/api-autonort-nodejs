import Banco from "../models/Banco";

export const getBancos = async(req, res) => {
    try {
        const query = await Banco.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
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
        const query = await Banco.findById(bancoId);
        if (query) {
            res.json({one: query});
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
        const query = await Banco.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen Bancos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createBanco = async(req, res) => {
    const { name, estado } = req.body;
    const avatar = req.file;

    try {
        let obj = null;
        if (avatar == undefined || avatar == null) {
            obj = new Banco({ name, estado });
        } else {
            obj = new Banco({
                avatar: avatar.location,
                name,
                estado
            });
        }

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Banco creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const updateBanco = async(req, res) => {
    const { name, estado } = req.body;
    const { bancoId } = req.params;
    const avatar = req.file;

    try {
        let query = null;

        if (avatar == undefined || avatar == null) {
            query = await Banco.findByIdAndUpdate(bancoId, {
                name,
                estado
            });
        } else {
            query = await Banco.findByIdAndUpdate(bancoId, {
                avatar: avatar.location,
                name,
                estado
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