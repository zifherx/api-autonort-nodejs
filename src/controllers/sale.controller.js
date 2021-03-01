import Sale from '../models/Sale'
import Vehicle from '../models/Vehicle'
import Seller from '../models/Seller'
import Customer from '../models/Customer'
import Campaign from '../models/Campaign'
import Props from '../models/Props'

export const createSale = async(req, res) => {
    try {
        const { vendedor, cliente, auto, serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias, observacion_adv, accesorios, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion } = req.body;


        const newSale = new Sale({ serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, observacion_adv, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion });

        //Seller
        const foundSeller = await Seller.find({ name: { $in: vendedor } });
        newSale.vendedor = foundSeller.map(seller => seller._id);

        //Vehicle
        const foundVehicle = await Vehicle.find({ cod_tdp: { $in: auto } });
        newSale.auto = foundVehicle.map(vehicle => vehicle._id);

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: cliente } });
        newSale.cliente = foundCustomer.map(customer => customer._id);

        //Campaign
        const foundCampaign = await Campaign.find({ name: { $in: campanias } });
        newSale.campanias = foundCampaign.map(campaign => campaign._id);

        //Props
        const foundProps = await Props.find({ name: { $in: accesorios } });
        newSale.accesorios = foundProps.map(props => props._id);

        //console.log(newSale);
        const saleSaved = await newSale.save();
        if (saleSaved) {
            res.json({ message: 'Expediente creado con éxito' });
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'No autorizado' })
    }
}

export const getSales = async(req, res) => {
    try {
        const ventasfull = await Sale.find()
            .populate('vendedor')
            .populate('auto')
            .populate('cliente')
            .populate('campanias')
            .populate('accesorios');

        if (ventasfull.length > 0) {
            res.json(ventasfull);
        } else {
            return res.status(201).json({ message: 'No Existen Expedientes' })
        }

    } catch (e) {
        console.log(e);
        res.json({ message: 'Error interno' })
    }
}

export const getSaleById = async(req, res) => {
    try {
        const { salesId } = req.params;
        const venta = await Sale.findById(salesId)
            .populate('vendedor')
            .populate('auto')
            .populate('cliente')
            .populate('campanias')
            .populate('accesorios');

        if (venta) {
            res.send(venta);
        }
    } catch (e) {
        console.log(e);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const updateSaleById = async(req, res) => {
    try {
        const { salesId } = req.params;

        const { vendedor, cliente, auto, serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias, observacion_adv, accesorios, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion } = req.body;

        //Seller
        const foundSeller = await Seller.find({ name: { $in: vendedor } });

        //Vehicle
        const foundVehicle = await Vehicle.find({ cod_tdp: { $in: auto } });

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: cliente } });

        //Campaign
        const foundCampaign = await Campaign.find({ name: { $in: campanias } });

        //Props
        const foundProps = await Props.find({ name: { $in: accesorios } });

        const ventaActualizada = await Sale.findByIdAndUpdate(salesId, { vendedor: foundSeller.map(seller => seller._id), cliente: foundCustomer.map(customer => customer._id), auto: foundVehicle.map(vehicle => vehicle._id), serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias: foundCampaign.map(campaign => campaign._id), observacion_adv, accesorios: foundProps.map(props => props._id), condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion });

        if (ventaActualizada) {
            //Mandamos la respuesta
            res.json({ message: 'Expediente actualizado con éxito' });
        } else {
            //Mandamos la respuesta
            res.status(403).json({ message: 'No Autorizado' });
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
            res.status(200).json({ message: 'Expediente eliminado con éxito' });
        }
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'Error interno' })
    }
}

export const UnidadesByStatus = async(req, res) => {
    const { estado } = req.body;
    try {
        const query = await Sale.where({ estatus_venta: estado }).find().populate('vendedor')
            .populate('auto')
            .populate('cliente')
            .populate('campanias')
            .populate('accesorios');
        if (query.length > 0) {
            res.json(query);
        } else {
            return res.status(201).json({ message: 'No existen Unidades' })
        }
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}

export const conteoUnidadesCanceladas = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Cancelado' }).countDocuments();
        if (consulta > 0) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Canceladas' });
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoUnidadesLibres = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Libre' }).countDocuments();
        if (consulta) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Libres' })
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoTarapotoCanceladas = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Cancelado', sucursal_venta: 'Tarapoto' }).countDocuments();
        if (consulta) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Canceladas en Tarapoto' })
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoJaenCanceladas = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Cancelado', sucursal_venta: 'Jaén' }).countDocuments();
        if (consulta) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Canceladas en Jaén' })
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoTarapotoLibres = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Libre', sucursal_venta: 'Tarapoto' }).countDocuments();
        if (consulta) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Libres en Tarapoto' })
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoJaenLibres = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Libre', sucursal_venta: 'Jaén' }).countDocuments();
        if (consulta) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Unidades Libres en Jaén' })
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' })
    }
}

export const conteoVentasByVendedor = async(req, res) => {
    try {
        const consulta = await Sale.aggregate([{
            $unwind: '$vendedor'
        }, {
            $group: {
                _id: "$vendedor",
                num_ventas: { $sum: 1 }
            }
        }]);
        if (consulta) {
            res.json(consulta);
        }
    } catch (err) {
        console.error(err);
        res.status(403).json({ message: 'No Autorizado' });
    }
}