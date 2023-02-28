import LeadCRM from "../models/LeadCRM";
import Sucursal from "../models/Sucursal";
import OrigenData from "../models/OrigenData";
import MarcaTasaciones from "../models/MarcaTasaciones";
import Financiamiento from "../models/Financiamiento";
import User from "../models/User";
import Customer from "../models/Customer";
import City from "../models/City";
import Vehicle from "../models/Vehicle";
import EstadoCRM from "../models/EstadoCRM";
import Banco from "../models/Banco";
import Seller from "../models/Seller";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await LeadCRM.find();
        // const query = await LeadCRM.findAllLeads();

        if (query.length === 0) {
            return res.status(404).json({ message: "No existen leads" });
        }

        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await LeadCRM.findById(itemId)
            .populate({
                path: "customer",
                select: "name document cellphone cellphone2 email address",
            })
            .populate({
                path: "estadoLeadE",
                select: "name valor hex description",
            })
            .populate({
                path: "marcaLeadE",
                select: "name avatar",
            })
            .populate({
                path: "bankSelected",
                select: "name avatar",
            })
            .populate({
                path: "sellerAssigned",
                select: "name avatar document sucursalE marcaE",
                populate: [
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "marcaE",
                        select: "name",
                    },
                ],
            })
            .populate({
                path: "origenDataE",
                select: "name icon hex",
            })
            .populate({
                path: "sucursalLeadE",
                select: "name",
            })
            .populate({
                path: "tipoFinanciamiento",
                select: "name",
            })
            .populate({
                path: "vehicleInterested",
                select: "cod_tdp model",
                populate: {
                    path: "model",
                    select: "name avatar",
                },
            });

        if (query.length === 0) {
            return res.status(404).json({ message: `No existen lead ${itemId}` });
        }

        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const {
        codigo_interno,
        sucursalLead,
        sucursalLeadE,
        origenData,
        origenDataE,
        marcaLead,
        marcaLeadE,
        observacion,
        createdBy,
        tipoFinanciamiento,
        customer,
        customerCity,
        customerCityE,
        vehicleInterested,
        estadoLead,
        estadoLeadE,
        fecha_ingreso,
    } = req.body;

    try {
        const newObj = new LeadCRM({
            codigo_interno,
            sucursalLead,
            origenData,
            marcaLead,
            observacion,
            customerCity,
            estadoLead,
            fecha_ingreso,
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursalLeadE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalLeadE} no encontrad@` });
        newObj.sucursalLeadE = sucursalFound._id;

        const origenFound = await OrigenData.findOne({ name: origenDataE });
        if (!origenFound) return res.status(404).json({ message: `Origen ${origenDataE} no encontrad@` });
        newObj.origenDataE = origenFound._id;

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaLeadE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaLeadE} no encontrad@` });
        newObj.marcaLeadE = marcaFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrad@` });
        newObj.createdBy = userFound._id;

        if (tipoFinanciamiento == null || tipoFinanciamiento == undefined) {
            newObj.tipoFinanciamiento = null;
        } else {
            const financiamientoFound = await Financiamiento.findOne({
                name: tipoFinanciamiento,
            });
            if (!financiamientoFound)
                return res.status(404).json({
                    message: `Financiamiento ${tipoFinanciamiento} no encontrad@`,
                });
            newObj.tipoFinanciamiento = financiamientoFound._id;
        }

        const customerFound = await Customer.findOne({ document: customer });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${customer} no encontrad@` });
        newObj.customer = customerFound._id;

        if (customerCityE == null || customerCityE == undefined) {
            newObj.customerCityE = null;
        } else {
            const cityFound = await City.findOne({ name: customerCityE });
            if (!cityFound) return res.status(404).json({ message: `Ciudad ${customerCityE} no encontrad@` });
            newObj.customerCityE = cityFound._id;
        }

        if (vehicleInterested == null || vehicleInterested == undefined) {
            newObj.vehicleInterested = null;
        } else {
            const vehicleFound = await Vehicle.findOne({ cod_tdp: vehicleInterested });
            if (!vehicleFound) return res.status(404).json({ message: `Vehículo ${vehicleInterested} no encontrad@` });
            newObj.vehicleInterested = vehicleFound._id;
        }

        const estadoEFound = await EstadoCRM.findOne({ name: estadoLeadE });
        if (!estadoEFound) return res.status(404).json({ message: `Estado ${estadoLeadE} no encontrad@` });
        newObj.estadoLeadE = estadoEFound._id;

        const query = await newObj.save();

        if (query) {
            res.json({ message: "Lead creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const {
        sucursalLead,
        sucursalLeadE,
        marcaLead,
        marcaLeadE,
        observacion,
        tipoFinanciamiento,
        bankSelected,
        initialMount,
        customer,
        // customerCity,
        // customerCityE,
        vehicleInterested,
        sellerAssigned,
        estadoLead,
        estadoLeadE,
        IsNoInteresado,
        isAtendido,
        isDeclinado,
        isBooking,
        isVenta,
        fecha_noInteresado,
        fecha_atendido,
        fecha_declinado,
        fecha_booking,
        fecha_venta,
    } = req.body;
    const { itemId } = req.params;

    let financeNull = null;
    let bankNull = null;
    let vehicleNull = null;
    let sellerNull = null;
    let query = null;

    try {
        // Obligatorios
        const sucursalFound = await Sucursal.findOne({ name: sucursalLeadE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalLeadE} no encontrado` });

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaLeadE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaLeadE} no encontrado` });

        const customerFound = await Customer.findOne({ document: customer });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${customer} no encontrado` });

        // const cityFound = await City.findOne({ name: customerCityE });
        // if (!cityFound) return res.status(404).json({ message: `Ciudad ${customerCityE} no encontrado` });

        const estadoFound = await EstadoCRM.findOne({ name: estadoLeadE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoLeadE} no encontrado` });

        // Opcionales
        if (tipoFinanciamiento == null || tipoFinanciamiento == undefined || tipoFinanciamiento == "") {
            financeNull = null;
        } else {
            const financiamientoFound = await Financiamiento.findOne({ name: tipoFinanciamiento });
            if (!financiamientoFound) return res.status(404).json({ message: `Financiamiento ${tipoFinanciamiento} no encontrado` });
            financeNull = financiamientoFound._id;
        }

        if (bankSelected == null || bankSelected == undefined || bankSelected == "") {
            bankNull = null;
        } else {
            const bancoFound = await Banco.findOne({ name: bankSelected });
            if (!bancoFound) return res.status(404).json({ message: `Banco ${bankSelected} no encontrado` });
            bankNull = bancoFound._id;
        }

        if (vehicleInterested == null || vehicleInterested == undefined || vehicleInterested == "") {
            vehicleNull = null;
        } else {
            const vehicleFound = await Vehicle.findOne({ cod_tdp: vehicleInterested });
            if (!vehicleFound) return res.status(404).json({ message: `Vehículo ${vehicleInterested} no encontrado` });
            vehicleNull = vehicleFound._id;
        }

        if (sellerAssigned == null || sellerAssigned == undefined || sellerAssigned == "") {
            sellerNull = null;
        } else {
            const sellerFound = await Seller.findOne({ name: sellerAssigned });
            if (!sellerFound) return res.status(404).json({ message: `Vendedor ${sellerAssigned} no encontrado` });
            sellerNull = sellerFound._id;
        }

        if (estadoLeadE == "NO INTERESADO") {
            query = await LeadCRM.findByIdAndUpdate(
                itemId,
                {
                    sucursalLead,
                    sucursalLeadE: sucursalFound._id,
                    marcaLead,
                    marcaLeadE: marcaFound._id,
                    observacion,
                    estadoLead,
                    estadoLeadE: estadoFound._id,
                    IsNoInteresado,
                    fecha_noInteresado,
                },
                { new: true }
            );
        } else if (estadoLeadE == "ATENDIDO") {
            query = await LeadCRM.findByIdAndUpdate(
                itemId,
                {
                    sucursalLead,
                    sucursalLeadE: sucursalFound._id,
                    marcaLead,
                    marcaLeadE: marcaFound._id,
                    observacion,
                    tipoFinanciamiento: financeNull,
                    bankSelected: bankNull,
                    initialMount,
                    customer: customerFound._id,
                    // customerCity,
                    // customerCityE: customerCityE == null ? null : cityFound._id,
                    vehicleInterested: vehicleNull,
                    sellerAssigned: sellerNull,
                    estadoLead,
                    estadoLeadE: estadoFound._id,
                    isAtendido,
                    fecha_atendido,
                },
                { new: true }
            );
        } else if (estadoLeadE == "DECLINADO") {
            query = await LeadCRM.findByIdAndUpdate(
                itemId,
                {
                    sucursalLead,
                    sucursalLeadE: sucursalFound._id,
                    marcaLead,
                    marcaLeadE: marcaFound._id,
                    observacion,
                    tipoFinanciamiento: financeNull,
                    bankSelected: bankNull,
                    initialMount,
                    customer: customerFound._id,
                    // customerCity,
                    // customerCityE: cityFound._id,
                    estadoLead,
                    estadoLeadE: estadoFound._id,
                    isDeclinado,
                    fecha_declinado,
                },
                { new: true }
            );
        } else if (estadoLeadE == "BOOKING") {
            query = await LeadCRM.findByIdAndUpdate(
                itemId,
                {
                    sucursalLead,
                    sucursalLeadE: sucursalFound._id,
                    marcaLead,
                    marcaLeadE: marcaFound._id,
                    observacion,
                    tipoFinanciamiento: financeNull,
                    bankSelected: bankNull,
                    initialMount,
                    customer: customerFound._id,
                    // customerCity,
                    // customerCityE: cityFound._id,
                    estadoLead,
                    estadoLeadE: estadoFound._id,
                    isBooking,
                    fecha_booking,
                },
                { new: true }
            );
        } else if (estadoLeadE == "VENTA") {
            query = await LeadCRM.findByIdAndUpdate(
                itemId,
                {
                    sucursalLead,
                    sucursalLeadE: sucursalFound._id,
                    marcaLead,
                    marcaLeadE: marcaFound._id,
                    observacion,
                    tipoFinanciamiento: financeNull,
                    bankSelected: bankNull,
                    initialMount,
                    customer: customerFound._id,
                    // customerCity,
                    // customerCityE: cityFound._id,
                    estadoLead,
                    estadoLeadE: estadoFound._id,
                    isVenta,
                    fecha_venta,
                },
                { new: true }
            );
        }

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Lead actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await LeadCRM.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se encuentra el item ${itemId}` });
        }

        res.json({ message: "Lead eliminado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllByEstado = async (req, res) => {};

controller.getAllBySede = async (req, res) => {
    const { sucursalE, start, end } = req.body;
    let query = null;

    try {
        query = await LeadCRM.find({
            sucursalLead: { $regex: ".*" + sucursalE + ".*" },
            fecha_ingreso: {
                $gte: new Date(start),
                $lte: new Date(end),
            },
        })
            .sort({ fecha_ingreso: -1 })
            .populate({
                path: "customer",
                select: "name document cellphone",
            })
            .populate({
                path: "customerCityE",
                select: "name estado",
            })
            .populate({
                path: "estadoLeadE",
                select: "name valor description hex icon estado",
            })
            .populate({
                path: "marcaLeadE",
                select: "name avatar estado",
            })
            .populate({
                path: "origenDataE",
                select: "name hex icon estado",
            })
            .populate({
                path: "sellerAssigned",
                select: "name document avatar estado",
            })
            .populate({
                path: "sucursalLeadE",
                select: "name estado",
            })
            .populate({
                path: "vehicleInterested",
                select: "codigo_interno model cod_tdp version estado",
                populate: {
                    path: "model",
                    select: "name avatar estado",
                },
            })
            .populate({
                path: "tipoFinanciamiento",
                select: "name estado",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length == 0) {
            return res.status(404).json({ message: `La sede ${sucursalE} no cuenta con leads` });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
