import MarcaTasaciones from "../models/MarcaTasaciones";

export const getAll = async(req, res) => {
    try {
        const query = await MarcaTasaciones.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Marcas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getMarcaById = async(req, res) => {
    const { marcaId } = req.params;
    try {
        const query = await MarcaTasaciones.findById(marcaId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe la Marca' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const getMarcaActiva = async(req, res) => {
    try {
        const query = await MarcaTasaciones.find({ status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({ count: query.length, brands: query });
        } else {
            res.status(404).json({ message: 'No existen Marcas activas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createMarca = async(req, res) => {
    const { name, status } = req.body;
    const avatar = req.file;

    try {
        let obj = null;
        if (avatar == undefined || avatar == null) {
            obj = new MarcaTasaciones({
                name,
                status
            });
        } else {
            obj = new MarcaTasaciones({
                avatar: avatar.location,
                name,
                status
            });
        }

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Marca creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const updateMarcaById = async(req, res) => {
    const { name, status } = req.body;
    const { marcaId } = req.params;
    const avatar = req.file;
    try {
        let query = null;
        if (avatar == undefined || avatar == null) {
            query = await MarcaTasaciones.findByIdAndUpdate(marcaId, {
                name,
                status
            });
        } else {
            query = await MarcaTasaciones.findByIdAndUpdate(marcaId, {
                avatar: avatar.location,
                name,
                status
            });
        }

        if (query) {
            res.json({ message: 'Marca actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Marca a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteMarcaById = async(req, res) => {
    const { marcaId } = req.params;
    try {
        const query = await MarcaTasaciones.findByIdAndDelete(marcaId);
        if (query) {
            res.json({ message: 'Marca eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Marca a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const countAll = async(req, res) => {
    try {
        const query = await MarcaTasaciones.countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message })
    }
}