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

metaCtrl.createOne = async(req, res) => {
    const { name, sucursal, area, tipo, fecha, mes, valor, createdBy } = req.body;
    try {
        const obj = new Meta({ name, sucursal, area, tipo, fecha, mes, valor });

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

export default metaCtrl;