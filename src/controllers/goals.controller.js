    import Goal from '../models/Goal'
    import User from '../models/User'
    import Seller from '../models/Seller'

    export const getMetas = async(req, res) => {
        try {
            const query = await Goal.find().populate('vendedor empleado').sort({ mes: 'asc' });
            if (query.length > 0) {
                res.json(query);
            } else {
                return res.status(404).json({ message: 'No existen Metas' });
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }

    export const getMetaByActivo = async(req, res) => {
        try {
            const query = await Goal.find({ status: 'Activo' }).populate('vendedor empleado').sort({ name: 'asc' });
            if (query.length > 0) {
                res.json(query);
            } else {
                res.status(404).json({ message: 'No existen Metas Activas' })
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }

    export const getMetaById = async(req, res) => {
        const { metaId } = req.params;
        try {
            const query = await Goal.findById(metaId).populate('vendedor empleado');
            if (query) {
                res.json(query);
            } else {
                return res.status(404).json({ message: 'No existe Meta' })
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }

    export const createMeta = async(req, res) => {
        const { anio, mes, vendedor, criterio, meta, avance, status, empleado } = req.body;

        try {
            const obj = new Goal({ anio, mes, criterio, meta, avance, status });

            const foundSeller = await Seller.find({ name: { $in: vendedor } });
            obj.vendedor = foundSeller.map(a => a._id);

            const foundEmployee = await User.find({ username: { $in: empleado } });
            obj.empleado = foundEmployee.map(em => em._id);

            const query = await obj.save();

            if (query) {
                res.json({ message: 'Meta creada con éxito' })
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }

    export const updateMeta = async(req, res) => {
        const { anio, mes, vendedor, criterio, meta, avance, status, empleado } = req.body;
        const { metaId } = req.params;

        try {

            const foundSeller = await Seller.find({ name: { $in: vendedor } });
            const foundEmployee = await User.find({ username: { $in: empleado } });
            const query = await Goal.findByIdAndUpdate(metaId, { anio, mes, vendedor: foundSeller.map(a => a._id), criterio, meta, avance, status, empleado: foundEmployee.map(b => b._id) });

            if (query) {
                res.json({ message: 'Meta actualizada con éxito' })
            } else {
                res.status(404).json({ message: 'No existe Meta a actualizar' });
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }

    export const deleteMeta = async(req, res) => {
        const { metaId } = req.params;

        try {
            const query = await Goal.findByIdAndDelete(metaId);

            if (query) {
                res.json({ message: 'Meta eliminada con éxito' })
            } else {
                res.status(404).json({ message: 'No existe Meta a eliminar' });
            }
        } catch (err) {
            console.log(err);
            res.status(409).json({ message: err.message })
        }
    }