import Campaign from '../models/Campaign'
import Vehicle from '../models/Vehicle'

export const createCampaign = async(req, res) => {
    try {
        const { name, descripcion, bono, startDate, endDate, auto } = req.body;
        const newCampaign = new Campaign({ name, descripcion, bono, startDate, endDate });

        const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
        newCampaign.auto = foundAuto.map(auto => auto._id);

        const campaignSaved = await newCampaign.save();

        res.status(201).json(campaignSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al crear la campaña' })
    }
}

export const getCampaigns = async(req, res) => {
    try {
        const campaign = await Campaign.find().populate('auto');
        res.status(201).json(campaign);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al obtener las campañas' })
    }
}

export const getCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const campaigns = await Campaign.findById(campaignId).populate('auto');
        res.status(200).json(campaigns);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al obtener la campaña' })
    }
}

export const getCampaignByVehicle = async(req, res) => {
    try {
        const { modelo } = req.body;

        const vehiculo = await Vehicle.findOne({ cod_tdp: modelo })

        const campana = await Campaign.find({ auto: vehiculo });

        if (campana) {
            //console.log(campana);
            res.status(200).json(campana);
        } else {
            res.status(201).json({ message: 'No existen campañas para ese vehículo' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error filtrando Campañas' });
    }
}

export const updateCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;

        const { name, descripcion, bono, startDate, endDate, auto } = req.body;

        const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateCampaign = await Campaign.findByIdAndUpdate(campaignId, { name, descripcion, bono, startDate, endDate, auto: foundAuto.map(auto => auto._id) }, { new: true });
        if (updateCampaign) {
            res.status(200).json(updateCampaign);
        } else {
            res.status(401).json({ message: 'Campaña no existe' });
        }

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al actualizar la campaña' })
    }
}

export const deleteCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const deletedCampaign = await Campaign.findByIdAndRemove(campaignId);
        if (deletedCampaign) {
            res.status(200).json({ message: 'Campáña eliminada' });
        } else {
            res.status(401).json({ message: 'Campaña no existe' });
        }

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al eliminar la campaña' })
    }
}