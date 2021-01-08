import Sale from '../models/Sale'
import Vehicle from '../models/Vehicle'
import Seller from '../models/Seller'
import Financing from '../models/Financing'
import Customer from '../models/Customer'

export const createSale = async(req, res) => {
    try {
        const { fecha, nroComprobante, seller, vehicle, financing, entity, support, office, account_executive, customer, situacion } = req.body;

        const newSale = new Sale({ fecha, nroComprobante, entity, support, office, account_executive, situacion });

        //Seller
        const foundSeller = await Seller.find({ name: { $in: seller } });
        newSale.seller = foundSeller.map(seller => seller._id);

        //Vehicle
        const foundVehicle = await Vehicle.find({ serie_tdp: { $in: vehicle } });
        newSale.vehicle = foundVehicle.map(vehicle => vehicle._id);

        //Financing
        const foundFinancing = await Financing.find({ type: { $in: financing } });
        newSale.financing = foundFinancing.map(financing => financing._id);

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: customer } });
        newSale.customer = foundCustomer.map(customer => customer._id);

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
            .populate('financing')
            .populate('customer');

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
            .populate('financing')
            .populate('customer');

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
        const { fecha, nroComprobante, seller, vehicle, financing, entity, support, office, account_executive, customer, situacion } = req.body;

        //Seller
        const foundSeller = await Seller.find({ name: { $in: seller } });

        //Vehicle
        const foundVehicle = await Vehicle.find({ serie_tdp: { $in: vehicle } });

        //Financing
        const foundFinancing = await Financing.find({ type: { $in: financing } });

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: customer } });

        const ventaActualizada = await Sale.findByIdAndUpdate(salesId, { fecha, nroComprobante, seller: foundSeller.map(seller => seller._id), vehicle: foundVehicle.map(vehicle => vehicle._id), financing: foundFinancing.map(financing => financing._id), entity, support, office, account_executive, customer: foundCustomer.map(customer => customer._id), situacion }, { new: true });

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