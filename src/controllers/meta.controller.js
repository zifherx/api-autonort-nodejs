import Meta from '../models/Meta';
import User from '../models/User';
import Sucursal from '../models/Sucursal';
import Area from '../models/Area';

const metaCtrl = {};

metaCtrl.getAll = async(req, res) => {
    try {
        const query = await Meta.find().sort({ name: 1 })
        .populate({
            path: 'sucursal',
            select: 'name'
        })
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen metas' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.getAllActivos = async(req, res) => {
    try {
        const query = await Meta.find({estado: true}).sort({ name: 'asc' })
        .populate({
            path: 'sucursal',
            select: 'name'
        })
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
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
        const query = await Meta.findById(metaId)
        .populate({
            path: 'sucursal',
            select: 'name'
        })
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe meta' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

metaCtrl.createOne = async(req, res) => {
    const { name,sucursal, area, tipo, fecha, mes, valor, estado, createdBy } = req.body;
    try {
        const obj = new Meta({
            name,
            tipo,
            fecha,
            mes,
            valor,
            estado
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursal });
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursal} no encontrado`});
        obj.sucursal = sucursalFound._id;

        const areaFound = await Area.findOne({ name: area });
        if(!areaFound) return res.status(404).json({message: `Area ${area} no encontrado`});
        obj.area = areaFound._id;

        const employeeFound = await User.findOne({ username: createdBy });
        if(!employeeFound) return res.status(404).json({message: `Usuario ${createdBy} no encontrado`});
        obj.createdBy = employeeFound._id;

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
    const { name, sucursal, area, tipo, fecha, mes, valor, estado } = req.body;
    // console.log(req.body);

    try {

        const sucursalFound = await Sucursal.find({ name: sucursal });
        if(!sucursalFound) return res.status(404).json({message: `Sucursal ${sucursal} no encontrado`});
        
        const areaFound = await Area.findOne({ name: area });
        if(!areaFound) return res.status(404).json({message: `Area ${area} no encontrado`});
        
        const query = await Meta.findByIdAndUpdate(metaId, {
            name,
            sucursal: sucursalFound.map(a => a._id),
            area: areaFound._id,
            tipo,
            fecha,
            mes,
            valor,
            estado
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