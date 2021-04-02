import Sucursal from "../models/Sucursal";

export const getSucursales = async(req, res) => {
    try {
        const query = await Sucursal.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No existen Sucursales' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getSucursalById = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findById(sucursalId);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No existe Sucursales' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getSucursalByActivo = async(req, res) => {
    try {
        const query = await Sucursal.find({ status: "Activo" });
        if (query.length > 0) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'No hay Sucursales activas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const createSucursal = async(req, res) => {
    const { name, status } = req.body;
    try {
        const objeto = new Sucursal({ name, status });

        const query = await objeto.save();

        if (query) {
            res.json({ message: 'Sucursal creada con éxito' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateSucursal = async(req, res) => {
    const { name, status } = req.body;
    const { sucursalId } = req.params;
    try {

        const query = await Sucursal.findByIdAndUpdate(sucursalId, { name, status }, { new: true });

        if (query) {
            res.json({ message: 'Sucursal actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sucursal a actualizar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteSucursal = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findByIdAndDelete(sucursalId);

        if (query) {
            res.json({ message: 'Sucursal eliminada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sucursal a eliminar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}