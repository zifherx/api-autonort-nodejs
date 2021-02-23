import Sucursal from "../models/Sucursal";

export const getSucursales = async(req, res) => {
    try {
        const query = await Sucursal.find();
        if (query.length > 0) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSucursalById = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findById(sucursalId);
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'No existe' })
        }
    } catch (err) {
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const getSucursalByActivo = async(req, res) => {
    try {
        const query = await Sucursal.find({ status: "Activo" });
        if (query) {
            res.send(query);
        } else {
            res.status(404).json({ message: 'Vacío' })
        }
    } catch (err) {
        //console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
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
        res.status(403).json({ message: 'No Autorizado' })
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
            res.status(404).json({ message: 'No existe Sucursal' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const deleteSucursal = async(req, res) => {
    const { sucursalId } = req.params;
    try {
        const query = await Sucursal.findByIdAndDelete(sucursalId);

        if (query) {
            res.json({ message: 'Sucursal eliminada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Sucursal' });
        }
    } catch (err) {
        //console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}