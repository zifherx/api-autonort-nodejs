import Campaign from '../models/Campaign'
import Vehicle from '../models/Vehicle'

export const createCampaign = async(req, res) => {
    try {
        const { name, descripcion, bono, startDate, endDate, status } = req.body;
        const newCampaign = new Campaign({ name, descripcion, bono, startDate, endDate, status });

        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });
        //newCampaign.auto = foundAuto.map(auto => auto._id);

        const campaignSaved = await newCampaign.save();

        if (campaignSaved) {
            res.json({ message: 'Campaña creada con éxito' });
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Campaña ya existe' })
    }
}

export const getAll = async(req, res) => {
    try {
        const campaign = await Campaign.find();
        if (campaign) {
            res.send(campaign);
        } else {
            return res.status(201).json({ message: 'No existen Campañas' })
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: `${e}` })
    }
}

export const getOne = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const campaigns = await Campaign.findById(campaignId);
        if (campaigns) {
            res.json(campaigns);
        } else {
            res.status(201).json({ message: 'No existe la campaña' })
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error de Servidor' })
    }
}

export const getCampaniasActivas = async(req, res) => {
    try {
        const activos = await Campaign.find({ status: 'Activo' });
        if (activos) {
            res.json(activos);
        }
    } catch (err) {
        res.status(404).json({ message: 'Erro de Servidor' });
        console.log(err);
    }
}

export const getCampaignByVehicle = async(req, res) => {
    try {
        const { modelo } = req.body;

        const vehiculo = await Vehicle.findOne({ cod_tdp: modelo })

        const campana = await Campaign.find({ auto: vehiculo });

        if (campana) {
            //console.log(campana);
            res.json(campana);
        } else {
            res.status(201).json({ message: 'No existen campañas para ese vehículo' });
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error filtrando Campañas' });
    }
}

export const updateCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;

        const { name, descripcion, bono, startDate, endDate, status } = req.body;

        //const foundAuto = await Vehicle.find({ cod_tdp: { $in: auto } });

        const updateCampaign = await Campaign.findByIdAndUpdate(campaignId, { name, descripcion, bono, startDate, endDate, status }, { new: true });
        if (updateCampaign) {
            res.json({ message: 'Campaña actualizada con éxito' });
        } else {
            res.status(201).json({ message: 'Campaña no existe' });
        }

    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error al actualizar la campaña' })
    }
}

export const deleteCampaignById = async(req, res) => {
    try {
        const { campaignId } = req.params;
        const deletedCampaign = await Campaign.findByIdAndRemove(campaignId);
        if (deletedCampaign) {
            res.json({ message: 'Campaña eliminada con éxito' });
        } else {
            res.status(201).json({ message: 'Campaña no existe' });
        }

    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error al eliminar la campaña' })
    }
}