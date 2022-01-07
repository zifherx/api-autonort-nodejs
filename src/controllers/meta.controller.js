import Meta from '../models/Meta';
import User from '../models/User';

const metaCtrl = {};

metaCtrl.getAll = async(req, res) => {
    try {
        const query = await Meta.find().sort({ name: 'asc' });
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existen metas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.getOneById = async(req, res) => {
    const { metaId } = req.params;
    try {
        const query = await Meta.findById(metaId);
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe meta' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.getOneByStatus = async(req, res) => {
    try {
        const query = await Meta.find({ status: true })
            .sort({ fecha: 'desc' });

        if (query) {
            res.json({ metas: query });
        } else {
            return res.status(404).json({ message: 'No existen Metas Activas' })
        }
    } catch (err) {
        console.error(er);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.createOne = async(req, res) => {
    const { name, sucursal, area, tipo, fecha, mes, valor, status, createdBy } = req.body;
    try {
        const obj = new Meta({
            name,
            sucursal,
            area,
            tipo,
            fecha,
            mes,
            valor,
            status
        });

        const employeeFound = await User.find({ username: { $in: createdBy } });
        obj.createdBy = employeeFound.map(a => a._id);

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Meta creada con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.updateOneById = async(req, res) => {
    const { metaId } = req.params;
    const { name, sucursal, area, tipo, fecha, mes, valor, status } = req.body;

    try {
        const query = await Meta.findByIdAndUpdate(metaId, {
            name,
            sucursal,
            area,
            tipo,
            fecha,
            mes,
            valor,
            status
        });

        if (query) {
            res.json({ message: 'Meta actualizada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe la Meta a actualizar' });
        }
    } catch (err) {
        console.error(er);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.deleteOneById = async(req, res) => {
    const { metaId } = req.params;

    try {
        const query = await Meta.findByIdAndRemove(metaId);

        if (query) {
            res.json({ message: 'Meta eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe la Meta a eliminar' });
        }
    } catch (err) {
        console.error(er);
        return res.status(503).json({ message: err.message });
    }
}

export default metaCtrl;