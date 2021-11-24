import Vehicle from '../models/Vehicle'
import User from '../models/User'
import ModeloTasaciones from '../models/ModeloTasaciones'
import Chasis from '../models/Chasis'

export const createVehicle = async(req, res) => {
    const {
        chasis,
        model,
        cod_tdp,
        version,
        sucursal,
        empleado
    } = req.body;

    try {
        const obj = new Vehicle({
            cod_tdp,
            version,
            sucursal
        });

        const foundEmployee = await User.find({ username: { $in: empleado } });
        obj.empleado = foundEmployee.map(a => a._id);

        const foundChasis = await Chasis.find({ name: { $in: chasis } });
        obj.chasis = foundChasis.map(b => b._id);

        const foundModel = await ModeloTasaciones.find({ name: { $in: model } });
        obj.model = foundModel.map(c => c._id);

        const query = await obj.save();

        if (query) {
            res.json({ message: 'Vehículo creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }

}

export const getAll = async(req, res) => {
    try {
        const query = await Vehicle.find()
            .sort({ cod_tdp: 'asc' })
            .populate({
                path: 'chasis',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name avatar marca',
                populate: { path: 'marca', select: 'avatar name' }
            })
            .populate({
                path: 'empleado',
                select: 'name roles',
                populate: { path: 'roles', select: 'name' }
            });

        if (query.length > 0) {
            res.json({ total: query.length, vehicles: query });
        } else {
            return res.status(404).json({ message: 'No existen vehículos' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    try {
        const vehicle = await Vehicle.findById(vehicleId)
            .populate({
                path: 'chasis',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name avatar marca',
                populate: { path: 'marca', select: 'avatar name' }
            })
            .populate({
                path: 'empleado',
                select: 'name roles',
                populate: { path: 'roles', select: 'name' }
            });
        if (vehicle) {
            res.json(vehicle);
        } else {
            return res.status(404).json({ message: 'No existe el Vehículo' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getVehicleByCodigo = async(req, res) => {
    const { codigoAuto } = req.body;
    try {
        const query = await Vehicle.findOne({ cod_tdp: codigoAuto })
            .populate({
                path: 'chasis',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name avatar marca',
                populate: { path: 'marca', select: 'avatar name' }
            })
            .populate({
                path: 'empleado',
                select: 'name roles',
                populate: { path: 'roles', select: 'name' }
            });
        if (query) {
            res.json(query);
        } else {
            return res.status(404).json({ message: 'No existe vehículo a mostrar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getVehiculeByMarca = async(req, res) => {
    const { marca } = req.body;
    try {
        const query = await Vehicle.find()
            .populate({
                path: 'chasis',
                select: 'name'
            })
            .populate({
                path: 'model',
                select: 'name avatar marca',
                populate: {
                    path: 'marca',
                    select: 'name avatar',
                    match: { name: marca }
                }
            })
            .populate({
                path: 'empleado',
                select: 'name roles',
                populate: { path: 'roles', select: 'name' }
            });
        let obj = query.filter(b => b.model.marca);
        if (obj.length > 0) {
            res.json({ total: obj.length, vehicles: obj });
        } else {
            return res.status(404).json({ message: 'No existen Modelos en esa Marca' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getVehiculeByModelo = async(req, res) => {
    const { modelo } = req.body;
    try {
        const query = await Vehicle.find()
            .populate({
                path: 'model',
                match: { name: { $in: modelo } },
                select: 'avatar name marca'
            });

        let obj = query.filter(a => a.model)
        if (obj.length > 0) {
            res.json({ total: obj.length, vehicles: obj });
        } else {
            return res.status(404).json({ message: 'No existen Vehículos en ese Modelo' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const { chasis, model, cod_tdp, version } = req.body;

    try {
        const foundChasis = await Chasis.findOne({ name: { $in: chasis } });
        if (!foundChasis) return res.status(404).json({ message: 'No existe el chasis' });
        const foundModel = await ModeloTasaciones.findOne({ name: { $in: model } });
        if (!foundModel) return res.status(404).json({ message: 'No existe el modelo' });
        const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, {
            chasis: foundChasis._id,
            cod_tdp,
            model: foundModel._id,
            version
        });
        if (updatedVehicle) {
            res.json({ message: 'Vehículo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vehículo a actualizar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    try {
        const deletedVehicle = await Vehicle.findByIdAndDelete(vehicleId);
        if (deletedVehicle) {
            res.json({ message: 'Vehículo eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vehículo a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}