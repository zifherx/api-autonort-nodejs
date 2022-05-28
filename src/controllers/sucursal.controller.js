import Sucursal from "../models/Sucursal";

const sucursalController = {};

sucursalController.getAll = async(req, res) => {
    try {
        const query = await Sucursal.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
           return res.status(404).json({ message: 'No existen Sucursales' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sucursalController.getOneById = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findById(sucursalId);
        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe Sucursales' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sucursalController.getAllActivos = async(req, res) => {
    try {
        const query = await Sucursal.find({ estado: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No hay Sucursales activas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sucursalController.createOne = async(req, res) => {
    const { name, estado } = req.body;
    try {
        const objeto = new Sucursal({ name, estado });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Sucursal creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sucursalController.updateOneById = async(req, res) => {
    const { name, estado } = req.body;
    const { sucursalId } = req.params;
    try {

        const query = await Sucursal.findByIdAndUpdate(sucursalId, { name, estado });

        if (query) {
            res.json({ message: 'Sucursal actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Sucursal a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

sucursalController.deleteOneById = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findByIdAndDelete(sucursalId);

        if (query) {
            res.json({ message: 'Sucursal eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Sucursal a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default sucursalController;