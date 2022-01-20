import Tecnico from "../models/Tecnico";

const tecnicoCtrl = {};

tecnicoCtrl.getAll = async(req, res) => {
    try {
        const query = await Tecnico.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Técnicos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.getTecnicoById = async(req, res) => {
    const { tecnicoId } = req.params;
    try {
        const query = await Tecnico.findById(tecnicoId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe el Técnico' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.getTecnicoByActivo = async(req, res) => {
    try {
        const query = await Tecnico.find({ status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No hay Técnicos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.createTecnico = async(req, res) => {
    const { name, document, cellphone, email, sucursal, status } = req.body;
    try {
        const objeto = new Tecnico({ name, document, cellphone, email, sucursal, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Técnico creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.updateTecnico = async(req, res) => {
    const { name, document, cellphone, email, sucursal, status } = req.body;
    const { tecnicoId } = req.params;
    try {
        const query = await Tecnico.findByIdAndUpdate(tecnicoId, { name, document, cellphone, email, sucursal, status });
        if (query) {
            res.json({ message: 'Técnico actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Técnico a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.deleteTecnico = async(req, res) => {
    const { tecnicoId } = req.params;
    try {
        const query = await Tecnico.findByIdAndDelete(tecnicoId);
        if (query) {
            res.json({ message: 'Técnico eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe el Técnico a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.countAll = async(req, res) => {
    try {
        const query = await Tecnico.countDocuments();
        if (query >= 0) return res.json({ count: query })
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.countByStatus = async(req, res) => {
    const { estado } = req.body;
    try {
        const query = await Tecnico.find({ status: estado }).countDocuments();
        if (query >= 0) return res.json({ count: query })
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.getBySucursal = async(req, res) => {
    const { sucursal } = req.body;

    try {
        const query = await Tecnico.find({ sucursal, status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({ count: query.length, tecnicos: query });
        } else {
            return res.status(404).json({ message: `No Existen Técnicos en ${sucursal}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default tecnicoCtrl;