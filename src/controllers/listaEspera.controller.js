import ListaEspera from "../models/ListaEspera";
import Sucursal from "../models/Sucursal";
import Vehicle from "../models/Vehicle";
import Colores from "../models/Colores";
import Customer from "../models/Customer";
import Anio from "../models/Anio";
import Mes from "../models/Mes";
import Financiamiento from "../models/Financiamiento";
import Banco from "../models/Banco";
import PlanMAF from "../models/PlanMAF";
import Maf from "../models/Maf";
import User from "../models/User";
import EstadoListaEspera from "../models/EstadoListaEspera";

const listaEsperaController = {};

listaEsperaController.getAll = async (req, res) => {
    try {
        const query = await ListaEspera.find()
            .sort({ mes_primer_abono: -1 })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "vehiculo",
                select: "chasis model cod_tdp version",
                populate: [
                    {
                        path: "chasis",
                        select: "name",
                    },
                    {
                        path: "model",
                        select: "name avatar marca",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                ],
            })
            .populate({
                path: "colorE",
                select: "name",
            })
            .populate({
                path: "cliente",
                select: "name document cellphone email",
            })
            .populate({
                path: "anio_primer_abono",
                select: "name",
            })
            .populate({
                path: "mes_primer_abono",
                select: "name",
            })
            .populate({
                path: "tipo_venta",
                select: "name",
            })
            .populate({
                path: "financiera",
                select: "name avatar",
            })
            .populate({
                path: "plan_maf",
                select: "name",
            })
            .populate({
                path: "solicitudMAF",
                select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
                populate: [
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "customer",
                        select: "name document cellphone email",
                    },
                    {
                        path: "seller",
                        select: "name document sucursalE marcaE",
                        populate: [
                            {
                                path: "sucursalE",
                                select: "name",
                            },
                            {
                                path: "marcaE",
                                select: "name avatar",
                            },
                        ],
                    },
                    {
                        path: "car",
                        select: "chasis model cod_tdp version",
                        populate: [
                            {
                                path: "chasis",
                                select: "name",
                            },
                            {
                                path: "model",
                                select: "name avatar marca",
                                populate: {
                                    path: "marca",
                                    select: "name avatar",
                                },
                            },
                        ],
                    },
                    {
                        path: "estadoSolicitudMAF",
                        select: "name",
                    },
                ],
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "updatedBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen clientes en espera" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await ListaEspera.findById(itemId)
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "vehiculo",
                select: "chasis model cod_tdp version",
                populate: [
                    {
                        path: "chasis",
                        select: "name",
                    },
                    {
                        path: "model",
                        select: "name avatar marca",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                ],
            })
            .populate({
                path: "colorE",
                select: "name",
            })
            .populate({
                path: "cliente",
                select: "name document cellphone email",
            })
            .populate({
                path: "anio_primer_abono",
                select: "name",
            })
            .populate({
                path: "mes_primer_abono",
                select: "name",
            })
            .populate({
                path: "tipo_venta",
                select: "name",
            })
            .populate({
                path: "financiera",
                select: "name avatar",
            })
            .populate({
                path: "plan_maf",
                select: "name",
            })
            .populate({
                path: "solicitudMAF",
                select: "nro_solicitud fecha_ingreso sucursalE customer cuota_inicial seller car estadoSolicitudMAF fecha_aprobacion carta_evidencia",
                populate: [
                    {
                        path: "sucursalE",
                        select: "name",
                    },
                    {
                        path: "customer",
                        select: "name document cellphone email",
                    },
                    {
                        path: "seller",
                        select: "name document sucursalE marcaE",
                        populate: [
                            {
                                path: "sucursalE",
                                select: "name",
                            },
                            {
                                path: "marcaE",
                                select: "name avatar",
                            },
                        ],
                    },
                    {
                        path: "car",
                        select: "chasis model cod_tdp version",
                        populate: [
                            {
                                path: "chasis",
                                select: "name",
                            },
                            {
                                path: "model",
                                select: "name avatar marca",
                                populate: {
                                    path: "marca",
                                    select: "name avatar",
                                },
                            },
                        ],
                    },
                    {
                        path: "estadoSolicitudMAF",
                        select: "name",
                    },
                ],
            })
            .populate({
                path: "createdBy",
                select: "name username",
            })
            .populate({
                path: "updatedBy",
                select: "name username",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No se encontró el cliente en la lista de espera" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.createOne = async (req, res) => {
    const {
        cod_interno,
        sucursal,
        sucursalE,
        vehiculo,
        colorE,
        cantidad,
        orden,
        cliente,
        anio_primer_abono,
        mes_primer_abono,
        grupo_abonos,
        precio_venta_final,
        tipo_venta,
        financiera,
        plan_maf,
        fecha_carta_aprobacion,
        inicial,
        solicitudMAF,
        cuenta_epdp,
        avance_pago_contado,
        avance_pago_credito,
        cumple_politica,
        createdBy,
    } = req.body;

    try {
        // const codTdpFound = Vehicle.findOne({cod_tdp: vehiculo});
        // const countOrder = ListaEspera.find({vehicle: codTdpFound._id}).countDocuments();

        const obj = new ListaEspera({
            cod_interno,
            sucursal,
            cantidad,
            orden,
            grupo_abonos,
            precio_venta_final,
            fecha_carta_aprobacion,
            inicial,
            cuenta_epdp,
            avance_pago_contado,
            avance_pago_credito,
            cumple_politica,
        });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        obj.sucursalE = sucursalFound._id;

        const vehiculoFound = await Vehicle.findOne({ cod_tdp: vehiculo });
        if (!vehiculoFound) return res.status(404).json({ message: `Vehículo ${vehiculo} no encontrado` });
        obj.vehiculo = vehiculoFound._id;

        const colorFound = await Colores.find({ name: { $in: colorE } });
        if (!colorFound) return res.status(404).json({ message: `Color ${colorE} no encontrado` });
        obj.colorE = colorFound.map((a) => a._id);

        const customerFound = await Customer.findOne({ name: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });
        obj.cliente = customerFound._id;

        const anioFound = await Anio.findOne({ name: anio_primer_abono });
        if (!anioFound) return res.status(404).json({ message: `Anio ${anio_primer_abono} no encontrado` });
        obj.anio_primer_abono = anioFound._id;

        const mesFound = await Mes.findOne({ name: mes_primer_abono });
        if (!mesFound) return res.status(404).json({ message: `Mes ${mes_primer_abono} no encontrado` });
        obj.mes_primer_abono = mesFound._id;

        const tipoVentaFound = await Financiamiento.findOne({ name: tipo_venta });
        if (!tipoVentaFound) return res.status(404).json({ message: `Tipo Venta ${tipo_venta} no encontrado` });
        obj.tipo_venta = tipoVentaFound._id;

        if (financiera == null || financiera == undefined) {
            obj.financiera = null;
        } else {
            const financieraFound = await Banco.findOne({ name: financiera });
            if (!financieraFound) return res.status(404).json({ message: `Financiera ${financiera} no encontrada` });
            obj.financiera = financieraFound._id;
        }

        if (plan_maf == null || plan_maf == undefined) {
            obj.plan_maf = null;
        } else {
            const planMAFFound = await PlanMAF.findOne({ name: plan_maf });
            if (!planMAFFound) return res.status(404).json({ message: `Plan MAF ${plan_maf} no encontrado` });
            obj.plan_maf = planMAFFound._id;
        }

        if (solicitudMAF == null || solicitudMAF == undefined) {
            obj.solicitudMAF = null;
        } else {
            const solicitudMAFFound = await Maf.findOne({ name: solicitudMAF });
            if (!solicitudMAFFound) return res.status(404).json({ message: `Solicitud MAF ${solicitudMAF} no encontrada` });
            obj.solicitudMAF = solicitudMAFFound._id;
        }

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        obj.createdBy = userFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Cliente agregado a lista de espera con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.updateOneById = async (req, res) => {
    const {
        sucursal,
        sucursalE,
        orden,
        cliente,
        vehiculo,
        cantidad,
        precio_venta_final,
        tipo_venta,
        financiera,
        plan_maf,
        fecha_carta_aprobacion,
        inicial,
        grupo_abonos,
        cuenta_epdp,
        avance_pago_contado,
        avance_pago_credito,
        cumple_politica,
    } = req.body;
    const { itemId } = req.params;
    let itemNullF = null;
    let itemNullPM = null;

    try {
        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

        const vehiculoFound = await Vehicle.findOne({ cod_tdp: vehiculo });
        if (!vehiculoFound) return res.status(404).json({ message: `Vehículo ${vehiculo} no encontrado` });

        const customerFound = await Customer.findOne({ name: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });

        const tipoVentaFound = await Financiamiento.findOne({ name: tipo_venta });
        if (!tipoVentaFound) return res.status(404).json({ message: `Tipo Venta ${tipo_venta} no encontrado` });

        if (financiera == null || financiera == undefined) {
            itemNullF = null;
        } else {
            const financieraFound = await Banco.findOne({ name: financiera });
            if (!financieraFound) return res.status(404).json({ message: `Financiera ${financiera} no encontrada` });
            itemNullF = financieraFound._id;
        }

        if (plan_maf == null || plan_maf == undefined) {
            itemNullPM = null;
        } else {
            const planMAFFound = await PlanMAF.findOne({ name: plan_maf });
            if (!planMAFFound) return res.status(404).json({ message: `Plan MAF ${plan_maf} no encontrado` });
            itemNullPM = planMAFFound._id;
        }

        const query = await ListaEspera.findByIdAndUpdate(itemId, {
            sucursal,
            sucursalE: sucursalFound._id,
            orden,
            cliente: customerFound._id,
            vehiculo: vehiculoFound._id,
            cantidad,
            precio_venta_final,
            tipo_venta: tipoVentaFound._id,
            financiera: itemNullF,
            fecha_carta_aprobacion,
            inicial,
            plan_maf: itemNullPM,
            grupo_abonos,
            cuenta_epdp,
            avance_pago_contado,
            avance_pago_credito,
            cumple_politica
        });

        if (query) {
            res.json({ message: "Cliente actualizado!" });
        } else {
            res.status(404).json({ message: "No se encontró el cliente a actualizar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await ListaEspera.findByIdAndDelete(itemId);

        if (query) {
            res.json({ message: "Cliente eliminado de la lista de espera con éxito" });
        } else {
            return res.status(404).json({ message: `No se encuentra cliente a eliminar` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.getCountByEstado = async (req, res) => {
    const { estadoE } = req.body;

    try {
        const estadoFound = await EstadoListaEspera.findOne({ name: estadoE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoE} no encontrado` });

        const query = await ListaEspera.find({ estadoE: estadoFound._id }).countDocuments();

        if (query >= 0) {
            res.json({ total: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

listaEsperaController.getCountClientByVehicle = async (req, res) => {
    const { cod_tdp } = req.body;

    try {
        const vehicleFound = await Vehicle.findOne({ cod_tdp });
        if (!vehicleFound) return res.status(404).json({ message: `Código ${cod_tdp} no encontrado` });

        const clientsFound = await ListaEspera.find({ vehiculo: vehicleFound._id }).countDocuments();

        if (clientsFound >= 0) {
            res.json({ total: clientsFound });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default listaEsperaController;
