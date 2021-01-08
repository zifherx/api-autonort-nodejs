import Campaign from '../models/Campaign'

export const createCampaign = async(req, res) => {
    try {
        const { name, descripcion, bono, startDate, endDate } = req.body;
        const newCampaign = new Campaign({ name, descripcion, bono, startDate, endDate });
        const campaignSaved = await newCampaign.save();

        res.status(201).json(campaignSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al crear la campaña' })
    }
}

export const getCampaigns = async(req, res) => {
    try {
        const campaign = await Campaign.find();
        res.status(201).json(campaign);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al obtener las campañas' })
    }
}

export const getCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const campaigns = await Campaign.findById(campaignId);
        res.status(200).json(campaigns);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error al obtener la campaña' })
    }
}

export const updateCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const updateCampaign = await Campaign.findByIdAndUpdate(campaignId, req.body, { new: true });
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