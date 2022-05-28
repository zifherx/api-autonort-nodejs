import MarcaTasaciones from "../models/MarcaTasaciones";

export const getAll = async(req, res) => {
    try {
        const query = await MarcaTasaciones.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
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
            res.json({one: query});
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
        const query = await MarcaTasaciones.find({ estado: true }).sort({ name: 1 });
        if (query.length > 0) {
            res.json({ total_active: query.length, all_active: query });
        } else {
            return res.status(404).json({ message: 'No existen Marcas activas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const createMarca = async(req, res) => {
    const { name, estado } = req.body;
    const avatar = req.file;

    try {
        let obj = null;
        if (avatar == undefined || avatar == null) {
            obj = new MarcaTasaciones({
                name,
                estado
            });
        } else {
            obj = new MarcaTasaciones({
                avatar: avatar.location,
                name,
                estado
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
    const { name, estado } = req.body;
    const { marcaId } = req.params;
    const avatar = req.file;
    try {
        let query = null;
        if (avatar == undefined || avatar == null) {
            query = await MarcaTasaciones.findByIdAndUpdate(marcaId, {
                name,
                estado
            });
        } else {
            query = await MarcaTasaciones.findByIdAndUpdate(marcaId, {
                avatar: avatar.location,
                name,
                estado
            });
        }

        if (query) {
            return res.json({ message: 'Marca actualizada con éxito' });
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