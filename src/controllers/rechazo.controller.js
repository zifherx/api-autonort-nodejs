import Area from "../models/Area";
import MotivoRechazo from "../models/MotivoRechazo";

const rechazoController = {};

rechazoController.getAll = async(req, res) => {
    try {
        const query = await MotivoRechazo.find().sort({ name: 1 })
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total: query.length, all: query});
        } else {
            return res.status(404).json({ message: 'No existen motivos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

rechazoController.getOneById = async(req, res) => {
    const { motivoId } = req.params;
    try {
        const query = await MotivoRechazo.findById(motivoId)
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query) {
            res.json({one: query});
        } else {
            return res.status(404).json({ message: 'No existe motivo' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

rechazoController.getAllActivos = async(req, res) => {
    try {
        const query = await MotivoRechazo.find({ estado: true })
        .sort({ name: 1 })
        .populate({
            path: 'area',
            select: 'name'
        });

        if (query.length > 0) {
            res.json({total_active: query.length, all_active: query});
        } else {
            return res.status(404).json({ message: 'No existen motivos activos' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

rechazoController.createOne = async(req, res) => {
    const { name, area, estado } = req.body;
    try {
        const obj = new MotivoRechazo({ name, estado });

        const areaFound = await Area.findOne({name: area});
        console.log(areaFound);
        if(!areaFound) return res.status(404).json({message: `El área ${area} no encontrado`});
        obj.area = areaFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Motivo creado con éxito' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

rechazoController.updateOneById = async(req, res) => {
    const { name, area, estado } = req.body;
    const { motivoId } = req.params;

    try {

        const areaFound = await Area.findOne({name: area});
        const query = await MotivoRechazo.findByIdAndUpdate(motivoId, 
            { 
                name,
                area: areaFound._id,
                estado 
            });

        if (query) {
            res.json({ message: 'Motivo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe motivo a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

rechazoController.deleteOneById = async(req, res) => {
    const { motivoId } = req.params;
    try {
        const query = await MotivoRechazo.findByIdAndDelete(motivoId);
        if (query) {
            res.json({ message: 'Motivo eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe motivo a eliminar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export default rechazoController;