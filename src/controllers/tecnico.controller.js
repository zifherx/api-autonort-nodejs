import Sucursal from "../models/Sucursal";
import Tecnico from "../models/Tecnico";

const tecnicoCtrl = {};

tecnicoCtrl.getAll = async(req, res) => {
    try {
        const query = await Tecnico.find().sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen Técnicos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.getOneById = async(req, res) => {
    const { tecnicoId } = req.params;
    try {
        const query = await Tecnico.findById(tecnicoId)
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe el Técnico' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await Tecnico.find({ estado: true }).sort({ name: 1 })
        .populate({
            path: 'sucursalE',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No hay Técnicos Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.createOne = async(req, res) => {
    const { name, document, cellphone, email, sucursalE, estado } = req.body;

    try {
        const objeto = new Tecnico({ name, document, cellphone, email, estado });

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        objeto.sucursalE = sucursalFound._id;

        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Técnico creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

tecnicoCtrl.updateOneById = async(req, res) => {
    const { name, document, cellphone, email, sucursalE, estado } = req.body;
    const { tecnicoId } = req.params;

    try {

        const sucursalFound = await Sucursal.findOne({name: sucursalE});
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursalE} no encontrada`});

        const query = await Tecnico.findByIdAndUpdate(tecnicoId, { 
            name,
            document,
            cellphone,
            email,
            sucursalE: sucursalFound._id,
            estado 
        });
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

tecnicoCtrl.deleteOneById = async(req, res) => {
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

export default tecnicoCtrl;
