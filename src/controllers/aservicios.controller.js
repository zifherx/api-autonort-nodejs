import AServicios from "../models/AServicios";

const serviciosCtrl = {};

serviciosCtrl.getAll = async(req, res) => {
    try {
        const query = await AServicios.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen Asesores de Servicios' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getOneById = async(req, res) => {
    const { asesorId } = req.params;
    try {
        const query = await AServicios.findById(asesorId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe el Asesor de Servicio' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getAllByActivo = async(req, res) => {
    try {
        const query = await AServicios.find({ status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No hay Asesores de Servicios Activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.createOne = async(req, res) => {
    const { name, document, cellphone, email, sucursal, status } = req.body;
    try {
        const objeto = new AServicios({
            name,
            document,
            cellphone,
            email,
            sucursal,
            status
        });
        const query = await objeto.save();
        if (query) {
            res.json({ message: 'Asesor de Servicio creado con éxito' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.updatedOneById = async(req, res) => {
    const { name, document, cellphone, email, sucursal, status } = req.body;
    const { asesorId } = req.params;
    try {
        const query = await AServicios.findByIdAndUpdate(asesorId, {
            name,
            document,
            cellphone,
            email,
            sucursal,
            status
        });
        if (query) {
            res.json({ message: 'Asesor de Servicio actualizado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe el Asesor de Servicio a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.deleteOneById = async(req, res) => {
    const { asesorId } = req.params;
    try {
        const query = await AServicios.findByIdAndDelete(asesorId);
        if (query) {
            res.json({ message: 'Asesor de Servicio eliminado con éxito' });
        } else {
            res.status(404).json({ message: 'No existe el Asesor de Servicio a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.countAll = async(req, res) => {
    try {
        const query = await AServicios.countDocuments();
        if (query >= 0) return res.json({ count: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.countByStatus = async(req, res) => {
    const { estado } = req.body;
    try {
        const query = await AServicios.find({ status: estado }).countDocuments();
        if (query >= 0) return res.json({ count: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

serviciosCtrl.getBySucursal = async(req, res) => {
    const { sucursal } = req.body;

    try {
        const query = await AServicios.find({ sucursal, status: true }).sort({ name: 'asc' });
        if (query.length > 0) {
            res.json({ count: query.length, asesores: query });
        } else {
            return res.status(404).json({ message: `No Existen Asesores de Servicios en ${sucursal}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default serviciosCtrl;