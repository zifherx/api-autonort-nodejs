import Campaign from '../models/Campaign'
import Vehicle from '../models/Vehicle'
import User from '../models/User'

export const createCampaign = async(req, res) => {
    const { name, descripcion, forCar, type, bono, startDate, endDate, status, empleado } = req.body;

    try {

        const newCampaign = new Campaign({ name, descripcion, forCar, type, bono, startDate, endDate, status });
        const foundEmployee = await User.find({ username: { $in: empleado } });
        newCampaign.empleado = foundEmployee.map(em => em._id);

        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
        //newCampaign.auto = foundAuto.map(auto => auto._id);

        const campaignSaved = await newCampaign.save();

        if (campaignSaved) {
            res.json({ message: 'Campaña creada con éxito' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getAll = async(req, res) => {
    try {
        const campaign = await Campaign.find().sort({ name: 'asc' });
        if (campaign.length > 0) {
            res.json(campaign);
        } else {
            return res.status(404).json({ message: 'No existen Campañas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getOne = async(req, res) => {
    const { campaignId } = req.params;
    try {
        const campaigns = await Campaign.findById(campaignId);
        if (campaigns) {
            res.json(campaigns);
        } else {
            return res.status(404).json({ message: 'No existe la campaña' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getCampaniasActivas = async(req, res) => {
    const fechaDesde = new Date(new Date().getFullYear(), new Date().getMonth(),1).toISOString().substr(0,10);
    const fechaHasta = new Date(new Date().getFullYear(), new Date().getMonth() + 1,0).toISOString().substr(0,10);
    console.log("fecha-Desde: ",fechaDesde);
    console.log("fecha-Hasta: ",fechaHasta);
    try {
        const activos = await Campaign.find({ status: 'Activo'/* ,startDate: {$gte: fechaDesde}, endDate: { $lt: fechaHasta}  */}).sort({ name: 'asc' });
        if (activos.length > 0) {
            res.json(activos);
        } else {
            res.status(404).json({ message: 'No existen Campañas Activas' })
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getCampaignByVehicle = async(req, res) => {
    const { modelo } = req.body;
    try {
        const campana = await Campaign.find({ forCar: modelo }).sort({ name: 'asc' });
        //console.log(campana)
        if (campana.length > 0) {
            res.json(campana);
        } else {
            return res.status(404).json({ message: 'No existen campañas para ese vehículo' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const getCampaignByGrupo = async(req, res) => {
    const { type } = req.body;
    try {
        const campana = await Campaign.find({ type }).sort({ name: 'asc' });
        if (campana.length > 0) {
            res.json(campana);
        } else {
            return res.status(404).json({ message: 'No existen Campañas en ese grupo' })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}

export const updateCampaignById = async(req, res) => {
    const { campaignId } = req.params;
    const { name, descripcion, forCar, type, bono, startDate, endDate, status } = req.body;
    try {
        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateCampaign = await Campaign.findByIdAndUpdate(campaignId, { name, descripcion, forCar, type, bono, startDate, endDate, status });
        if (updateCampaign) {
            res.json({ message: 'Campaña actualizada con éxito' });
        } else {
            res.status(404).json({ message: 'No existe Campaña' });
        }
    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}

export const deleteCampaignById = async(req, res) => {
    const { campaignId } = req.params;
    try {
        const deletedCampaign = await Campaign.findByIdAndDelete(campaignId);
        if (deletedCampaign) {
            res.json({ message: 'Campaña eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'Campaña no existe' });
        }

    } catch (err) {
        console.log(err);
        res.status(409).json({ message: err.message })
    }
}