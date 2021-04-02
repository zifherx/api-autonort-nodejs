import Vehicle from '../models/Vehicle'
import User from '../models/User'

export const createVehicle = async(req, res) => {
    const { marca, cod_tdp, categoria, modelo, version, sucursal, empleado } = req.body;

    try {
        const newVehicle = new Vehicle({ marca, cod_tdp, categoria, modelo, version, sucursal });

        const foundEmployee = await User.find({ username: { $in: empleado } });
        newVehicle.empleado = foundEmployee.map(em => em._id);

        //const foundCampaign = await Campaign.find({ name: { $in: campaign } });
        //newVehicle.campaign = foundCampaign.map(campaign => campaign._id);

        const vehicleSaved = await newVehicle.save();

        if (vehicleSaved) {
            res.json({ message: 'Vehículo creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }

}

export const getVehicles = async(req, res) => {
    try {
        const vehicles = await Vehicle.find().sort({ cod_tdp: 'asc' });

        if (vehicles.length > 0) {
            res.json(vehicles);
        } else {
            return res.status(404).json({ message: 'No existen vehículos' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    try {
        const vehicle = await Vehicle.findById(vehicleId);
        if (vehicle) {
            res.json(vehicle);
        } else {
            return res.status(404).json({ message: 'No existe el Vehículo' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getVehicleByCodigo = async(req, res) => {
    const { codigoAuto } = req.body;
    try {
        const carro = await Vehicle.findOne({ cod_tdp: codigoAuto });
        if (carro) {
            res.json(carro);
        } else {
            return res.status(404).json({ message: 'No existe vehículo a mostrar' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const updateVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const { marca, cod_tdp, categoria, modelo, version, sucursal } = req.body;

    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, { marca, cod_tdp, categoria, modelo, version, sucursal });
        if (updatedVehicle) {
            res.json({ message: 'Vehículo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Vehículo a actualizar' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
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
        res.status(409).json({ message: err.message })
    }
}