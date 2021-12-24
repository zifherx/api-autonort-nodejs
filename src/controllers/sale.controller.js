import Sale from '../models/Sale'
import Vehicle from '../models/Vehicle'
import Seller from '../models/Seller'
import Customer from '../models/Customer'
import Campaign from '../models/Campaign'
import Adicional from '../models/Adicional'
import Props from '../models/Props'
import User from '../models/User'

export const createSale = async(req, res) => {
    const {
        vendedor,
        cliente,
        auto,
        serie_tdp,
        color,
        precio,
        anio_fabricacion,
        anio_modelo,
        ubicacion_vehiculo,
        fecha_ciguena,
        fecha_entrega,
        estatus_vehiculo,
        tipo_financiamiento,
        entidad_bancaria,
        sustento,
        fecha_sustento,
        monto_aprobado,
        oficina,
        ejecutivo,
        montoAdelanto1,
        fechaAdelanto1,
        montoAdelanto2,
        fechaAdelanto2,
        montoAdelanto3,
        fechaAdelanto3,
        montoAdelanto4,
        fechaAdelanto4,
        montoAdelanto5,
        fechaAdelanto5,
        montoAdelanto6,
        fechaAdelanto6,
        montoAdelanto7,
        fechaAdelanto7,
        montoAdelanto8,
        fechaAdelanto8,
        campanias,
        adicional,
        descuento_autonort,
        observacion_adv,
        accesorios,
        condicion_accesorios,
        fecha_facturacion_tdp,
        estatus_facturacion,
        tipo_operacion,
        fecha_inicio_reserva,
        fecha_fin_reserva,
        tipo_comprobante,
        nro_comprobante,
        fecha_comprobante,
        estatus_venta,
        sucursal_venta,
        fecha_cancelacion,
        empleado
    } = req.body;

    try {

        const newSale = new Sale({ serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, fecha_ciguena, fecha_entrega, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, descuento_autonort, observacion_adv, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion });

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

        //Adicional
        const foundAdicional = await Adicional.find({ name: { $in: adicional } });
        newSale.adicional = foundAdicional.map(adicional => adicional._id);

        //Props
        const foundProps = await Props.find({ name: { $in: accesorios } });
        newSale.accesorios = foundProps.map(props => props._id);

        //Empleado
        const foundEmployee = await User.find({ username: { $in: empleado } });
        newSale.empleado = foundEmployee.map(em => em._id);

        //console.log(newSale);
        const saleSaved = await newSale.save();
        if (saleSaved) {
            res.json({ message: 'Expediente creado con éxito' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSales = async(req, res) => {
    try {
        const query = await Sale.find()
            .sort({ fecha_cancelacion: 'desc' })
            .populate({ path: 'vendedor', select: 'name sucursal' })
            .populate({
                path: 'auto',
                select: 'cod_tdp model version',
                populate: {
                    path: 'model',
                    select: 'avatar name marca',
                    populate: {
                        path: 'marca',
                        select: 'avatar name'
                    }
                }
            })
            .populate({ path: 'cliente', select: 'name document cellphone' })
            .populate({ path: 'campanias' })
            .populate({ path: 'adicional' })
            .populate({ path: 'accesorios' })
            .populate({ path: 'empleado', select: 'username name' })

        if (query.length > 0) {
            res.json({ total: query.length, files: query });
        } else {
            return res.status(404).json({ message: 'No Existen Expedientes' })
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const getSaleById = async(req, res) => {
    const { salesId } = req.params;

    try {

        const query = await Sale.findById(salesId)
            .populate({ path: 'vendedor', select: 'name sucursal' })
            .populate({
                path: 'auto',
                select: 'model version cod_tdp',
                populate: {
                    path: 'model',
                    select: 'marca name avatar',
                    populate: { path: 'marca', select: 'name avatar' }
                },
            })
            .populate({ path: 'cliente', select: 'name document' })
            .populate('campanias')
            .populate('adicional')
            .populate('accesorios')
            .populate({ path: 'empleado', select: 'name username' });

        if (query) {
            res.json({ expediente: query });
        } else {
            return res.status(404).json({ message: 'No existe el Expediente' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const updateSaleById = async(req, res) => {
    const { salesId } = req.params;

    const { vendedor, cliente, auto, serie_tdp, color, precio, anio_fabricacion, anio_modelo, ubicacion_vehiculo, fecha_ciguena, fecha_entrega, estatus_vehiculo, tipo_financiamiento, entidad_bancaria, sustento, fecha_sustento, monto_aprobado, oficina, ejecutivo, montoAdelanto1, fechaAdelanto1, montoAdelanto2, fechaAdelanto2, montoAdelanto3, fechaAdelanto3, montoAdelanto4, fechaAdelanto4, montoAdelanto5, fechaAdelanto5, montoAdelanto6, fechaAdelanto6, montoAdelanto7, fechaAdelanto7, montoAdelanto8, fechaAdelanto8, campanias, adicional, descuento_autonort, observacion_adv, accesorios, condicion_accesorios, fecha_facturacion_tdp, estatus_facturacion, monto_facturado, tipo_operacion, fecha_inicio_reserva, fecha_fin_reserva, tipo_comprobante, nro_comprobante, fecha_comprobante, estatus_venta, sucursal_venta, fecha_cancelacion } = req.body;

    try {

        //Seller
        const foundSeller = await Seller.find({ name: { $in: vendedor } });

        //Vehicle
        const foundVehicle = await Vehicle.find({ cod_tdp: { $in: auto } });

        //Customer
        const foundCustomer = await Customer.find({ document: { $in: cliente } });

        //Campaign
        const foundCampaign = await Campaign.find({ name: { $in: campanias } });

        //Adicional
        const foundAdicional = await Adicional.find({ name: { $in: adicional } });

        //Props
        const foundProps = await Props.find({ name: { $in: accesorios } });

        const ventaActualizada = await Sale.findByIdAndUpdate(salesId, {
            vendedor: foundSeller.map(seller => seller._id),
            cliente: foundCustomer.map(customer => customer._id),
            auto: foundVehicle.map(vehicle => vehicle._id),
            serie_tdp,
            color,
            precio,
            anio_fabricacion,
            anio_modelo,
            ubicacion_vehiculo,
            fecha_ciguena,
            fecha_entrega,
            estatus_vehiculo,
            tipo_financiamiento,
            entidad_bancaria,
            sustento,
            fecha_sustento,
            monto_aprobado,
            oficina,
            ejecutivo,
            montoAdelanto1,
            fechaAdelanto1,
            montoAdelanto2,
            fechaAdelanto2,
            montoAdelanto3,
            fechaAdelanto3,
            montoAdelanto4,
            fechaAdelanto4,
            montoAdelanto5,
            fechaAdelanto5,
            montoAdelanto6,
            fechaAdelanto6,
            montoAdelanto7,
            fechaAdelanto7,
            montoAdelanto8,
            fechaAdelanto8,
            campanias: foundCampaign.map(campaign => campaign._id),
            adicional: foundAdicional.map(adicional => adicional._id),
            descuento_autonort,
            observacion_adv,
            accesorios: foundProps.map(props => props._id),
            condicion_accesorios,
            fecha_facturacion_tdp,
            estatus_facturacion,
            monto_facturado,
            tipo_operacion,
            fecha_inicio_reserva,
            fecha_fin_reserva,
            tipo_comprobante,
            nro_comprobante,
            fecha_comprobante,
            estatus_venta,
            sucursal_venta,
            fecha_cancelacion
        });

        if (ventaActualizada) {
            res.json({ message: 'Expediente actualizado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Expediente a actualizar' });
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const deleteSaleById = async(req, res) => {
    const { salesId } = req.params;

    try {
        const deleteSale = await Sale.findByIdAndDelete(salesId);

        if (deleteSale) {
            res.json({ message: 'Expediente eliminado con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Expediente a eliminar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const UnidadesLibres = async(req, res) => {
    const { estado, tramite } = req.body;
    try {
        const query = await Sale.find({ estatus_venta: estado, pasoaTramite: tramite })
            .populate('vendedor')
            .populate('auto')
            .populate('cliente')
            .populate('campanias')
            .populate('adicional')
            .populate('accesorios')
            .populate('empleado')
        if (query.length > 0) {
            res.json({ total: query.length, files: query });
        } else {
            return res.status(404).json({ message: `No existen Unidades ${estado}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const UnidadesByStatus = async(req, res) => {
    const { estado, tramite, sucursal } = req.body;
    try {
        const query = await Sale.find({ estatus_venta: estado, pasoaTramite: tramite, sucursal_venta: sucursal }).sort({ fecha_cancelacion: 'desc' })
            .populate('vendedor')
            .populate('auto')
            .populate('cliente')
            .populate('campanias')
            .populate('adicional')
            .populate('accesorios')
            .populate('empleado')
        if (query.length > 0) {
            res.json({ total: query.length, files: query });
        } else {
            return res.status(404).json({ message: `No existen Unidades ${estado}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const UnidadesBySucursalyFecha = async(req, res) => {
    const { sucursal, start, end } = req.body;
    try {
        const query = await Sale.find({ sucursal_venta: sucursal, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } })
            .sort({ fecha_cancelacion: 'desc' })
            .populate({ path: 'vendedor', select: 'name sucursal' })
            .populate({
                path: 'auto',
                select: 'cod_tdp model version',
                populate: {
                    path: 'model',
                    select: 'avatar name marca',
                    populate: {
                        path: 'marca',
                        select: 'avatar name'
                    }
                }
            })
            .populate({ path: 'cliente', select: 'name document cellphone' })
            .populate({ path: 'campanias' })
            .populate({ path: 'adicional' })
            .populate({ path: 'accesorios' })
            .populate({ path: 'empleado', select: 'username name' })
        if (query.length > 0) {
            res.json({ total: query.length, files: query });
        } else {
            return res.status(404).json({ message: 'No Existen Unidades' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const conteoUnidadesCanceladas = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Cancelado' }).countDocuments();
        //console.log(consulta)
        if (consulta >= 0) {
            res.json(consulta);
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const conteoUnidadesLibres = async(req, res) => {
    try {
        const consulta = await Sale.where({ estatus_venta: 'Libre' }).countDocuments();
        if (consulta >= 0) {
            res.json(consulta);
        } else {
            return res.status(404).json({ message: 'No existen Unidades Libres' })
        }
    } catch (err) {
        console.log(err);
        res.status(503).json({ message: err.message })
    }
}

export const conteoUnidadesBySucursalFecha = async(req, res) => {
    const { sucursal, start, end } = req.body;
    try {
        const query = await Sale.find({ sucursal_venta: sucursal, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } }).countDocuments();
        if (query >= 0) {
            res.json({ count: query });
        } else {
            return res.status(404).json({ message: 'No existen unidades' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const conteoUnidadesBySucursalStatusFecha = async(req, res) => {
    const { sucursal, status, start, end } = req.body;
    //console.log(start, end);
    try {
        const query = await Sale.find({ sucursal_venta: sucursal, estatus_venta: status, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } }).countDocuments();
        //console.log('Query: ', query);
        if (query >= 0) {
            res.json({ count: query });
        } else {
            return res.status(404).json({ message: `No existen Unidades ${status} en ${sucursal}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const conteoVentasByVendedor = async(req, res) => {
    const { sucursal, estatus, start, end } = req.body;
    // console.log(req.body)
    try {
        const filter = {
            sucursal_venta: sucursal,
            estatus_venta: estatus,
            fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) }
        };
        const consulta = await Sale.aggregate([{
            $match: filter
        }, {
            $group: {
                _id: "$vendedor",
                num_ventas: { $sum: 1 }
            }
        }, {
            $sort: { num_ventas: -1 }
        }]);
        if (consulta.length > 0) {
            res.json(consulta);
        } else {
            return res.status(201).json({ message: 'No existen Ventas aún' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const conteoVentasByModelo = async(req, res) => {
    const { sucursal, estatus, start, end } = req.body;

    try {
        const filter = { sucursal_venta: sucursal, estatus_venta: estatus, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } };
        const query = await Sale.aggregate([{
            $match: filter
        }, {
            $group: {
                _id: "$auto",
                num_ventas: { $sum: 1 }
            }
        }]);
        if (query.length > 0) {
            res.json({ ranking: query });
        } else {
            return res.status(404).json({ message: 'No existen Ventas aún' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const vistaUnidadesEntregadasByStatus = async(req, res) => {
    const { sucursal, start, end } = req.body;
    try {
        const query = await Sale.where({ sucursal_venta: sucursal, fecha_entrega: { $gte: new Date(start), $lte: new Date(end) } }).find().countDocuments();
        if (query >= 0) {
            res.json({ total: query });
        } else {
            return res.status(404).json({ message: `No existen Unidades entregadas en ${sucursal}` })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const obtenerToyotaValues = async(req, res) => {
    const { sucursal, statusVenta, start, end } = req.body;
    const objetos = []
    try {
        // const query = await Sale.where({ sucursal_venta: sucursal, estatus_venta: statusVenta, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) }, adicional: { $gte: 1 } }).find();
        const query = await Sale.where({ sucursal_venta: sucursal, estatus_venta: statusVenta, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } }).find().populate('adicional vendedor auto')
            // const values = await query.adicional
            // console.log(query)
        query.forEach((element) => {
            console.log(element)
            if (element.adicional.length > 0) {
                let perra = {};
                perra.sucursal = element.sucursal_venta
                perra.serie = element.serie_tdp
                perra.adicional = element.adicional
                perra.vendedor = element.vendedor
                perra.vehiculo = element.auto
                objetos.push(perra)
            }
        })
        if (query >= 0) {

            res.json({ nro_adicionales: objetos.length, toyota_values: objetos })
        } else {
            return res.status(404).json({ message: `No existen Unidades ${statusVenta} en ${sucursal} con Toyota Value en ese rango de fechas` })
        }

    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: err.message })
    }
}

export const getVehiclesySeller = async(req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        const filtro = { vendedor: sellerFound._id, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } };
        const query = await Sale.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$auto",
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.staus(201).json({ message: 'No existen Ventas en este Vendedor' })
        }

    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}

export const getSalesBySeller = async(req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        const filtro = { vendedor: sellerFound._id, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } };
        const query = await Sale.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$estatus_venta",
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.staus(201).json({ message: 'No existen Ventas en este Vendedor' })
        }

    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByStatusyFecha = async(req, res) => {
    const { sucursal, start, end } = req.body;
    try {
        const filter = { sucursal_venta: sucursal, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) } };
        const consulta = await Sale.aggregate([{
            $match: filter
        }, {
            $group: {
                _id: "$estatus_venta",
                num_ventas: { $sum: 1 }
            }
        }, {
            $sort: { num_ventas: -1 }
        }]);
        if (consulta.length > 0) {
            res.json({ total: consulta.length, ranking: consulta });
        } else {
            return res.status(201).json({ message: 'No existen Ventas aún' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}