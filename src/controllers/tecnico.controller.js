import Tecnico from "../models/Tecnico";

const tecnicoCtrl = {};

tecnicoCtrl.getAll = async(req, res) => {
    try {
        const query = await Tecnico.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Tecnicoes' })
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
            return res.status(404).json({ message: 'No existe Tecnico' })
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
            return res.status(404).json({ message: 'No hay Tecnicoes Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.createTecnico = async(req, res) => {
    const { name, document, sucursal, status } = req.body;
    try {
        const objeto = new Tecnico({ name, document, sucursal, status });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Tecnico creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.updateTecnico = async(req, res) => {
    const { name, document, sucursal, status } = req.body;
    const { tecnicoId } = req.params;
    try {
        const query = await Tecnico.findByIdAndUpdate(tecnicoId, { name, document, sucursal, status });
        if (query) {
            res.json({ message: 'Tecnico actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Tecnico a actualizar' });
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
            res.json({ message: 'Tecnico eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Tecnico a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default tecnicoCtrl;