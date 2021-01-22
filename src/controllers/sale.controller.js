import Sale from '../models/Sale'
import Vehicle from '../models/Vehicle'
import Seller from '../models/Seller'
import Customer from '../models/Customer'
import Campaign from '../models/Campaign'
import Props from '../models/Props'

export const createSale = async(req, res) => {
    try {
        const { fecha, codVenta, nroComprobante, fechaComprobante, seller, vehicle, serie_tdp, colour, manufacturing_year, model_year, location_vehicle, status_vehicle, typeFinancing, entity, support, fechaCartaAprobacion, montoAprobado, office, account_executive, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, customer, situacion, sucursal, campaign, props } = req.body;

        const newSale = new Sale({ fecha, codVenta, nroComprobante, fechaComprobante, serie_tdp, colour, manufacturing_year, model_year, location_vehicle, status_vehicle, typeFinancing, entity, support, fechaCartaAprobacion, montoAprobado, office, account_executive, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, situacion, sucursal });

        //Seller
        const foundSeller = await Seller.find({ name: { $in: seller } });
        newSale.seller = foundSeller.map(seller => seller._id);

        //Vehicle
        const foundVehicle = await Vehicle.find({ cod_tdp: { $in: vehicle } });
        newSale.vehicle = foundVehicle.map(vehicle => vehicle._id);

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: customer } });
        newSale.customer = foundCustomer.map(customer => customer._id);

        //Campaign
        const foundCampaign = await Campaign.find({ name: { $in: campaign } });
        newSale.campaign = foundCampaign.map(campaign => campaign._id);

        //Props
        const foundProps = await Props.find({ name: { $in: props } });
        newSale.props = foundProps.map(props => props._id);

        //console.log(newSale);
        const saleSaved = await newSale.save();
        res.status(201).json(saleSaved);
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error interno' })
    }
}

export const getSales = async(req, res) => {
    try {
        const ventasfull = await Sale.find()
            .populate('seller')
            .populate('vehicle')
            .populate('customer')
            .populate('campaign')
            .populate('props');

        res.status(200).json(ventasfull);

        //console.log(ventasfull)
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error interno' })
    }
}

export const getSaleById = async(req, res) => {
    try {
        const { salesId } = req.params;
        const venta = await Sale.findById(salesId)
            .populate('seller')
            .populate('vehicle')
            .populate('customer')
            .populate('campaign')
            .populate('props');

        if (venta) {
            res.status(200).json(venta);
        } else {
            res.status(201).json({ message: 'No existe la venta' });
        }


    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error interno' })
    }
}

export const updateSaleById = async(req, res) => {
    try {
        const { salesId } = req.params;

        //console.log(req.body);

        const { fecha, codVenta, nroComprobante, fechaComprobante, seller, vehicle, serie_tdp, colour, manufacturing_year, model_year, location_vehicle, status_vehicle, typeFinancing, entity, support, fechaCartaAprobacion, montoAprobado, office, account_executive, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, customer, situacion, sucursal, campaign, props } = req.body;

        //Seller
        const foundSeller = await Seller.find({ name: { $in: seller } });

        //Vehicle
        const foundVehicle = await Vehicle.find({ cod_tdp: { $in: vehicle } });

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: customer } });

        //Campaign
        const foundCampaign = await Campaign.find({ name: { $in: campaign } });

        //Props
        const foundProps = await Props.find({ name: { $in: props } });

        const ventaActualizada = await Sale.findByIdAndUpdate(salesId, { fecha, codVenta, nroComprobante, fechaComprobante, serie_tdp, colour, manufacturing_year, model_year, location_vehicle, status_vehicle, typeFinancing, entity, support, fechaCartaAprobacion, montoAprobado, office, account_executive, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, situacion, sucursal, seller: foundSeller.map(seller => seller._id), customer: foundCustomer.map(customer => customer._id), vehicle: foundVehicle.map(vehicle => vehicle._id), campaign: foundCampaign.map(campaign => campaign._id), props: foundProps.map(props => props._id) }, { new: true });

        if (ventaActualizada) {
            //Mandamos la respuesta
            res.status(201).json(ventaActualizada);
        } else {
            //Mandamos la respuesta
            res.status(401).json({ message: 'Venta no existe' });
        }

    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error interno' })
    }
}

export const deleteSaleById = async(req, res) => {
    try {
        const { salesId } = req.params;
        const deleteSale = await Sale.findByIdAndDelete(salesId);

        if (deleteSale) {
            res.status(200).json({ message: 'Venta Eliminada' });
        } else {
            res.status(401).json({ message: 'Venta no existe' });
        }
    } catch (e) {
        console.log(e);
        res.status(401).json({ message: 'Error interno' })
    }
}