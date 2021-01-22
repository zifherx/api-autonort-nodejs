import Vehicle from '../models/Vehicle'
import Campaign from '../models/Campaign'

export const createVehicle = async(req, res) => {
    const { brand, cod_tdp, category, model, branch_office, price, campaign } = req.body;

    const newVehicle = new Vehicle({
        brand,
        cod_tdp,
        category,
        model,
        branch_office,
        price
    });

    const foundCampaign = await Campaign.find({ name: { $in: campaign } });
    newVehicle.campaign = foundCampaign.map(campaign => campaign._id);

    const vehicleSaved = await newVehicle.save();

    res.status(201).json(vehicleSaved);
}

export const getVehicles = async(req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
}

export const getVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const vehicle = await Vehicle.findById(vehicleId).populate('campaign');
    res.status(200).json(vehicle);

}

export const getVehicleBySerie = async(req, res) => {
    try {
        const { codigo } = req.body;
        const carro = await Vehicle.findOne({ cod_tdp: codigo }).populate('campaign');
        //console.log(carro);
        if (carro) {
            //console.log(carro);
            res.status(200).json(carro);
        } else {
            res.status(201).json({ messsage: 'No existe vehículo a mostrar' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ messsage: 'No se puede ejecutar la consulta' });
    }
}

export const updateVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const { brand, cod_tdp, category, model, branch_office, price, campaign } = req.body;

    //Campaign
    const foundCampaign = await Campaign.find({ name: { $in: campaign } });

    const updatedVehicle = await Vehicle.findByIdAndUpdate(vehicleId, { brand, cod_tdp, category, model, branch_office, price, campaign: foundCampaign.map(campaign => campaign._id) }, { new: true });
    res.status(200).json(updatedVehicle);
}

export const deleteVehicleById = async(req, res) => {
    const { vehicleId } = req.params;
    const deletedVehicle = await Vehicle.findByIdAndRemove(vehicleId);
    res.status(201).json({ message: 'Vehicle Removed' });
}