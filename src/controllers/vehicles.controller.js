import Vehicle from '../models/Vehicle'

export const createVehicle = async(req, res) => {
    const { marca, cod_tdp, categoria, modelo, version, sucursal } = req.body;

    const newVehicle = new Vehicle({
        marca,
        cod_tdp,
        categoria,
        modelo,
        version,
        sucursal
    });

    //const foundCampaign = await Campaign.find({ name: { $in: campaign } });
    //newVehicle.campaign = foundCampaign.map(campaign => campaign._id);

    const vehicleSaved = await newVehicle.save();

    res.json({ message: 'Vehículo creado con éxito' });
}

export const getVehicles = async(req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
}

export const getVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findById(vehicleId);
    res.json(vehicle);

}

export const getVehicleByCodigo = async(req, res) => {
    try {
        const { codigoAuto } = req.body;
        const carro = await Vehicle.findOne({ cod_tdp: codigoAuto });
        if (carro) {
            res.json(carro);
        } else {
            return res.status(201).json({ message: 'No existe vehículo a mostrar' });
        }
    } catch (e) {
        return res.status(403).json({ message: 'No Autorizado' });
    }
}

export const updateVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const { marca, cod_tdp, categoria, modelo, version, sucursal } = req.body;

    //Campaign
    //const foundCampaign = await Campaign.find({ name: { $in: campaign } });

    try {

        const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, { marca, cod_tdp, categoria, modelo, version, sucursal }, { new: true });

        if (updatedVehicle) {
            res.json({ message: 'Vehículo actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'Vehículo ya modificado' })
        }

    } catch (err) {
        res.status(403).json({ message: 'Vehículo no existe' })
    }
}

export const deleteVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const deletedVehicle = await Vehicle.findByIdAndRemove(vehicleId);
    if (deletedVehicle) {
        res.json({ message: 'Vehículo eliminado con éxito' });
    }
}