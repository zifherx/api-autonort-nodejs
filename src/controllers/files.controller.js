import Sale from "../models/Sale";
import Vehicle from "../models/Vehicle";
import Seller from "../models/Seller";
import Customer from "../models/Customer";
import Colores from "../models/Colores";
import Ubicacion from "../models/Ubicacion";
import Financiamiento from "../models/Financiamiento";
import Banco from "../models/Banco";
import Campania from "../models/Campania";
import Maf from "../models/Maf";
import Operacion from "../models/Operacion";
import TipoComprobante from "../models/TipoComprobante";
import Situacion from "../models/Situacion";
import Sucursal from "../models/Sucursal";
import StatusFacturacion from "../models/StatusFacturacion";
import User from "../models/User";
import AccesorioE from "../models/AccesorioE";
import CondicionAccesorio from "../models/CondicionAccesorio";
import Anio from "../models/Anio";
import Condicion from "../models/Condicion";
import LogFile from "../models/LogFile";

const fileController = {};

fileController.getAll = async (req, res) => {
    try {
        const query = await Sale.find()
            .sort({
                fecha_cancelacion: -1,
            })
            .populate({
                path: "vendedor",
                select: "name sucursal avatar sucursalE",
                populate: {
                    path: "sucursalE",
                    select: "name",
                },
            })
            .populate({
                path: "auto",
                select: "model version cod_tdp",
                populate: {
                    path: "model",
                    select: "marca name avatar",
                    populate: {
                        path: "marca",
                        select: "name avatar",
                    },
                },
            })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "colorE",
                select: "name",
            })
            .populate({
                path: "anioFabricacionE",
                select: "name",
            })
            .populate({
                path: "anioModeloE",
                select: "name",
            })
            .populate({
                path: "ubicacionVehiculoE",
                select: "name",
            })
            .populate({
                path: "estadoVehiculoE",
                select: "name",
            })
            .populate({
                path: "financiamientoE",
                select: "name",
            })
            .populate({
                path: "bancoE",
                select: "name",
            })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "tipoOperacionE",
                select: "name document",
            })
            .populate({
                path: "tipoComprobanteE",
                select: "name document",
            })
            .populate({
                path: "estadoVentaE",
                select: "name document",
            })
            .populate({
                path: "estadoFacturacionE",
                select: "name document",
            })
            .populate("campanias")
            .populate("adicional")
            .populate("accesorios")
            .populate({
                path: "empleado",
                select: "name username",
            })
            .populate({
                path: "createdBy",
                select: "name username",
                strictPopulate: true,
            });

        if (query.length > 0) {
            res.json({ total: query, all: query });
        } else {
            return res.status(404).json({ message: `No existen expedientes` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Sale.findById(itemId)
            .populate({
                path: "vendedor",
                select: "name sucursal sucursalE",
                populate: {
                    path: "sucursalE",
                    select: "name",
                },
            })
            .populate({
                path: "auto",
                select: "model version cod_tdp",
                populate: {
                    path: "model",
                    select: "marca name avatar",
                    populate: {
                        path: "marca",
                        select: "name avatar",
                    },
                },
            })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "colorE",
                select: "name",
            })
            .populate({
                path: "anioFabricacionE",
                select: "name",
            })
            .populate({
                path: "anioModeloE",
                select: "name",
            })
            .populate({
                path: "ubicacionVehiculoE",
                select: "name",
            })
            .populate({
                path: "estadoVehiculoE",
                select: "name",
            })
            .populate({
                path: "financiamientoE",
                select: "name",
            })
            .populate({
                path: "bancoE",
                select: "name",
            })
            .populate({
                path: "solicitudMAF",
                select: "nro_solicitud fecha_ingreso customer",
                populate: {
                    path: "customer",
                    select: "name document",
                },
            })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "campaniasTDPE",
                select: "cod_interno descripcion tipo oferta",
                populate: {
                    path: "tipo",
                    select: "name",
                },
            })
            .populate({
                path: "campaniasMafE",
                select: "cod_interno descripcion tipo oferta",
                populate: {
                    path: "tipo",
                    select: "name",
                },
            })
            .populate({
                path: "accesoriosE",
                select: "cod_interno name model precio",
                populate: {
                    path: "model",
                    select: "name",
                },
            })
            .populate({
                path: "condicionAccesorioE",
                select: "name",
            })
            .populate({
                path: "tipoOperacionE",
                select: "name document",
            })
            .populate({
                path: "tipoComprobanteE",
                select: "name document",
            })
            .populate({ path: "estadoVentaE", select: "name document" })
            .populate({
                path: "estadoFacturacionE",
                select: "name document",
            })
            .populate("campanias")
            .populate("adicional")
            .populate("accesorios")
            .populate({
                path: "empleado",
                select: "name username",
            })
            .populate({
                path: "createdBy",
                select: "name username",
                strictPopulate: false,
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: err.message });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.createOne = async (req, res) => {
    const {
        vendedor,
        cliente,
        auto,
        serie_tdp,
        colorE,
        precio,
        anioFabricacionE,
        anioModeloE,
        ubicacionVehiculoE,
        estadoVehiculoE,
        fecha_ciguena,
        fecha_entrega,
        financiamientoE,
        bancoE,
        solicitudMAF,
        adelantosE,
        campaniasTDPE,
        ofertaTDPE,
        campaniasMafE,
        ofertaMafE,
        isToyotaValue,
        arrayToyotaValues,
        herramientas_tdp,
        herramientas_maf,
        descuento_autonort,
        acuerdoTDP,
        observacion_adv,
        accesoriosE,
        condicionAccesorioE,
        condicion_accesorios,
        tipoOperacionE,
        tipoComprobanteE,
        nro_comprobante,
        fecha_comprobante,
        sucursal_venta,
        sucursalE,
        estadoVentaE,
        estatus_venta,
        fecha_cancelacion,
        fecha_facturacion_tdp,
        estadoFacturacionE,
        monto_facturado,
        isReportado,
        fechaReporte,
        mesReportado,
        createdBy,
        fechaCreacionS,
        getGPS,
        importeGPS,
        isVentaInterna,
        isVentaMenor,
    } = req.body;

    try {
        const newSale = new Sale({
            serie_tdp,
            precio,
            fecha_ciguena,
            fecha_entrega,
            adelantosE,
            ofertaTDPE,
            ofertaMafE,
            isToyotaValue,
            arrayToyotaValues,
            descuento_autonort,
            acuerdoTDP,
            herramientas_tdp,
            herramientas_maf,
            observacion_adv,
            condicion_accesorios,
            fecha_facturacion_tdp,
            monto_facturado,
            isReportado,
            fechaReporte,
            mesReportado,
            nro_comprobante,
            fecha_comprobante,
            fecha_cancelacion,
            estatus_venta,
            sucursal_venta,
            fechaCreacionS,
            getGPS,
            importeGPS,
            isVentaInterna,
            isVentaMenor,
        });

        //Seller Obligado
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${vendedor} no encontrado` });
        newSale.vendedor = sellerFound._id;

        //Vehicle Obligado
        const carFound = await Vehicle.findOne({ cod_tdp: auto });
        if (!carFound) return res.status(404).json({ message: `Vehículo ${auto} no encontrado` });
        newSale.auto = carFound._id;

        //Customer Obligado
        const customerFound = await Customer.findOne({ document: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });
        newSale.cliente = customerFound._id;

        //Item Null
        if (colorE == null || colorE == undefined || colorE == "") {
            newSale.colorE = null;
        } else {
            const colorFound = await Colores.findOne({ name: colorE });
            if (!colorFound) return res.status(404).json({ message: `Cliente ${colorE} no encontrado` });
            newSale.colorE = colorFound._id;
        }

        //Item Null
        if (anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "") {
            newSale.anioFabricacionE = null;
        } else {
            const anioFFound = await Anio.findOne({ name: anioFabricacionE });
            if (!anioFFound) return res.status(404).json({ message: `Año Fabricación ${anioFabricacionE} no encontrado` });
            newSale.anioFabricacionE = anioFFound._id;
        }

        //Item Null
        if (anioModeloE == null || anioModeloE == undefined || anioModeloE == "") {
            newSale.anioModeloE = null;
        } else {
            const anioMFound = await Anio.findOne({ name: anioModeloE });
            if (!anioMFound) return res.status(404).json({ message: `Año Modelo ${anioModeloE} no encontrado` });
            newSale.anioModeloE = anioMFound._id;
        }

        //Item Null
        if (ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "") {
            newSale.ubicacionVehiculoE = null;
        } else {
            const ubicacionFound = await Ubicacion.findOne({ name: ubicacionVehiculoE });
            if (!ubicacionFound) return res.status(404).json({ message: `Ubicación ${ubicacionVehiculoE} no encontrado` });
            newSale.ubicacionVehiculoE = ubicacionFound._id;
        }

        //Condición obligada
        const estadoVehicularFound = await Condicion.findOne({ name: estadoVehiculoE });
        if (!estadoVehicularFound) return res.status(404).json({ message: `Estado vehicular ${estadoVehiculoE} no encontrado` });
        newSale.estadoVehiculoE = estadoVehicularFound._id;

        //Item Null
        if (financiamientoE == null || financiamientoE == undefined || financiamientoE == "") {
            newSale.financiamientoE = null;
        } else {
            const financiamientoFound = await Financiamiento.findOne({ name: financiamientoE });
            if (!financiamientoFound) return res.status(404).json({ message: `Financiamiento ${financiamientoE} no encontrado` });
            newSale.financiamientoE = financiamientoFound._id;
        }

        //Item Null
        if (bancoE == null || bancoE == undefined || bancoE == "") {
            newSale.bancoE = null;
        } else {
            const bancoFound = await Banco.findOne({ name: bancoE });
            if (!bancoFound) return res.status(404).json({ message: `Banco ${bancoE} no encontrado` });
            newSale.bancoE = bancoFound._id;
        }

        //Item Null
        if (solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "") {
            newSale.solicitudMAF = null;
        } else {
            const mafFound = await Maf.findOne({ nro_solicitud: solicitudMAF });
            if (!mafFound) return res.status(404).json({ message: `Solicitud ${solicitudMAF} no encontrada` });
            newSale.solicitudMAF = mafFound._id;
        }

        const campaniaTDPFound = await Campania.find({ cod_interno: { $in: campaniasTDPE } });
        if (!campaniaTDPFound) return res.status(404).json({ message: `Campaña TDP ${campaniasTDPE} no encontrada` });
        newSale.campaniasTDPE = campaniaTDPFound.map((a) => a._id);

        const campaniaMAFFound = await Campania.find({ cod_interno: { $in: campaniasMafE } });
        if (!campaniaMAFFound) return res.status(404).json({ message: `Campaña MAF ${campaniasMafE} no encontrada` });
        newSale.campaniasMafE = campaniaMAFFound.map((a) => a._id);

        //Operacion obligada
        const operacionFound = await Operacion.findOne({ name: tipoOperacionE });
        if (!operacionFound) return res.status(404).json({ message: `Tipo operación ${tipoOperacionE} no encontrada` });
        newSale.tipoOperacionE = operacionFound._id;

        //User Obligado
        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Colaborador ${createdBy} no encontrado` });
        newSale.createdBy = userFound._id;

        //Item Null
        if (tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "") {
            newSale.tipoComprobanteE = null;
        } else {
            const comprobanteFound = await TipoComprobante.findOne({ name: tipoComprobanteE });
            if (!comprobanteFound) return res.status(404).json({ message: `Tipo comprobante ${tipoComprobanteE} no encontrado` });
            newSale.tipoComprobanteE = comprobanteFound._id;
        }

        // Item Null
        if (condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "") {
            newSale.condicionAccesorioE = null;
        } else {
            const condicionFound = await CondicionAccesorio.findOne({ name: condicionAccesorioE });
            if (!condicionFound) return res.status(404).json({ message: `Condición accesorio ${condicionAccesorioE} no encontrada` });
            newSale.condicionAccesorioE = condicionFound._id;
        }

        //Sucursal Obligado
        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
        newSale.sucursalE = sucursalFound._id;

        //Situacion Obligado
        const situacionFound = await Situacion.findOne({ name: estadoVentaE });
        if (!situacionFound) return res.status(404).json({ message: `Estado de Venta ${estadoVentaE} no encontrado` });
        newSale.estadoVentaE = situacionFound._id;

        //Item Null
        if (estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "") {
            newSale.estadoFacturacionE = null;
        } else {
            const facturacionFound = await StatusFacturacion.findOne({ name: estadoFacturacionE });
            if (!facturacionFound) return res.status(404).json({ message: `Estado de Venta ${estadoFacturacionE} no encontrado` });
            newSale.estadoFacturacionE = facturacionFound._id;
        }

        const accesorioFound = await AccesorioE.find({ cod_interno: { $in: accesoriosE } });
        if (!accesorioFound) return res.status(404).json({ message: `Accesorio ${accesoriosE} no encontrado` });
        newSale.accesoriosE = accesorioFound.map((a) => a._id);

        const query = await newSale.save();

        const queryDecomposed = query
            .populate({
                path: "vendedor",
                select: "name sucursal sucursalE",
                populate: {
                    path: "sucursalE",
                    select: "name",
                },
            })
            .populate({
                path: "auto",
                select: "model version cod_tdp",
                populate: {
                    path: "model",
                    select: "marca name avatar",
                    populate: {
                        path: "marca",
                        select: "name avatar",
                    },
                },
            })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "colorE",
                select: "name",
            })
            .populate({
                path: "anioFabricacionE",
                select: "name",
            })
            .populate({
                path: "anioModeloE",
                select: "name",
            })
            .populate({
                path: "ubicacionVehiculoE",
                select: "name",
            })
            .populate({
                path: "estadoVehiculoE",
                select: "name",
            })
            .populate({
                path: "financiamientoE",
                select: "name",
            })
            .populate({
                path: "bancoE",
                select: "name",
            })
            .populate({
                path: "solicitudMAF",
                select: "nro_solicitud fecha_ingreso customer",
                populate: {
                    path: "customer",
                    select: "name document",
                },
            })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "campaniasTDPE",
                select: "cod_interno descripcion tipo oferta",
                populate: {
                    path: "tipo",
                    select: "name",
                },
            })
            .populate({
                path: "campaniasMafE",
                select: "cod_interno descripcion tipo oferta",
                populate: {
                    path: "tipo",
                    select: "name",
                },
            })
            .populate({
                path: "accesoriosE",
                select: "cod_interno name model precio",
                populate: {
                    path: "model",
                    select: "name",
                },
            })
            .populate({
                path: "condicionAccesorioE",
                select: "name",
            })
            .populate({
                path: "tipoOperacionE",
                select: "name document",
            })
            .populate({
                path: "tipoComprobanteE",
                select: "name document",
            })
            .populate({ path: "estadoVentaE", select: "name document" })
            .populate({
                path: "estadoFacturacionE",
                select: "name document",
            })
            .populate("campanias")
            .populate("adicional")
            .populate("accesorios")
            .populate({
                path: "empleado",
                select: "name username",
            })
            .populate({
                path: "createdBy",
                select: "name username",
                strictPopulate: false,
            });

        if (query) {
            const newLog = await LogFile({
                cod_interno: new Date().getTime(),
                file_id: query._id,
                modifiedBy: query.createdBy,
                action: `Usuario ${createdBy} ha creado nuevo expediente`,
                objBefore: "",
                objAfter: JSON.stringify(queryDecomposed),
                timeAt: query.fechaCreacionS,
            });
            // console.log('Query:',newLog);
            const logQuery = await newLog.save();
            res.json({ message: "Expediente creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.updateOneById = async (req, res) => {
    const { itemId } = req.params;
    const {
        vendedor,
        cliente,
        auto,
        serie_tdp,
        colorE,
        precio,
        anioFabricacionE,
        anioModeloE,
        ubicacionVehiculoE,
        ubicacion_vehiculo,
        estadoVehiculoE,
        estatus_vehiculo,
        fecha_ciguena,
        fecha_entrega,
        financiamientoE,
        bancoE,
        solicitudMAF,
        isToyotaLife,
        adelantosE,
        campaniasTDPE,
        ofertaTDPE,
        campaniasMafE,
        ofertaMafE,
        isToyotaValue,
        arrayToyotaValues,
        descuento_autonort,
        acuerdoTDP,
        herramientas_tdp,
        herramientas_maf,
        observacion_adv,
        accesoriosE,
        condicion_accesorios,
        condicionAccesorioE,
        tipoOperacionE,
        tipoComprobanteE,
        nro_comprobante,
        fecha_comprobante,
        sucursal_venta,
        sucursalE,
        estadoVentaE,
        fecha_cancelacion,
        getGPS,
        importeGPS,
        estatus_venta,
        fecha_facturacion_tdp,
        estadoFacturacionE,
        monto_facturado,
        isReportado,
        fechaReporte,
        mesReportado,
        isVentaInterna,
        isVentaMenor,
        updatedBy,
        // LOG
        isLibreS,
        fechaLibreS,
        isDevolucionS,
        fechaDevolucionS,
        isCreditoS,
        fechaCreditoS,
        isTestDrive,
        fechaTestDriveS,
        isBloqueadoS,
        fechaBloqueadoS,
        isStandByS,
        fechaStandByS,
        isReservadoS,
        fechaReservadoS,
        isReservadoCS,
        fechaReservadoCS,
        isReservadoLS,
        fechaReservadoLS,
        isEsperaS,
        fechaEsperaS,
        isFacturadoS,
        fechaFacturadoS,
        isAnticipoS,
        fechaAnticipoS,
        isDesembolsarS,
        fechaDesembolsarS,
        isExhibicionS,
        fechaExhibicionS,
        isCanceladoS,
        fechaCanceladoS,
        isCanceladoPTS,
        fechaCanceladoPTS,
        isEPDPS,
        fechaEPDPS,
        isLibreConAccesoriosS,
        fechaLibreConAccesoriosS,
        isBuenaProS,
        fechaBuenaProS,
        isReservadoOCS,
        fechaReservadoOCS,
        isTallerMovilS,
        fechaTallerMovilS,
        isKintoShareS,
        fechaKintoShareS,
    } = req.body;

    // Opcionales
    let colorNull = null;
    let anioFNull = null;
    let anioMNull = null;
    let ubicacionNull = null;
    let financiamientoNull = null;
    let bancoNull = null;
    let solicitudNull = null;
    let condicionAccNull = null;
    let comprobanteNull = null;
    let facturacionNull = null;
    let query = null;

    try {
        //Vendedor - Obligatorio
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${vendedor} no encontrado` });

        //Cliente - Obligatorio
        const customerFound = await Customer.findOne({ document: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });

        // Vehículo - Obligatorio
        const autoFound = await Vehicle.findOne({ cod_tdp: auto });
        if (!autoFound) return res.status(404).json({ message: `Vehículo ${auto} no encontrado` });

        // Estado Vehicular - Obligatorio
        const estadoVehicularFound = await Condicion.findOne({ name: estadoVehiculoE });
        if (!estadoVehicularFound) return res.status(404).json({ message: `Condición ${estadoVehiculoE} no encontrado` });

        // Operación - Obligatorio
        const operacionFound = await Operacion.findOne({ name: tipoOperacionE });
        if (!operacionFound) return res.status(404).json({ message: `Operación ${tipoOperacionE} no encontrado` });

        // Sucursal - Obligatorio
        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });

        // Situacion - Obligatorio
        const situacionFound = await Situacion.findOne({ name: estadoVentaE });
        if (!situacionFound) return res.status(404).json({ message: `Estado de venta ${estadoVentaE} no encontrado` });

        const userFound = await User.findOne({ username: updatedBy });
        if (!situacionFound) return res.status(404).json({ message: `Usuario ${updatedBy} no encontrado` });

        // Color - Opcional
        if (colorE == null || colorE == undefined || colorE == "") {
            colorNull = null;
        } else {
            const colorFound = await Colores.findOne({ name: colorE });
            if (!colorFound) return res.status(404).json({ message: `Color ${colorE} no encontrado` });
            colorNull = colorFound._id;
        }

        // Año Fab - Opcional
        if (anioFabricacionE == null || anioFabricacionE == undefined || anioFabricacionE == "") {
            anioFNull = null;
        } else {
            const anioFound = await Anio.findOne({ name: anioFabricacionE });
            if (!anioFound) return res.status(404).json({ message: `Año ${anioFabricacionE} no encontrado` });
            anioFNull = anioFound._id;
        }

        // Año Mod - Opcional
        if (anioModeloE == null || anioModeloE == undefined || anioModeloE == "") {
            anioMNull = null;
        } else {
            const anioFound = await Anio.findOne({ name: anioModeloE });
            if (!anioFound) return res.status(404).json({ message: `Año ${anioModeloE} no encontrado` });
            anioMNull = anioFound._id;
        }

        // Ubicación Vehicular - Opcional
        if (ubicacionVehiculoE == null || ubicacionVehiculoE == undefined || ubicacionVehiculoE == "") {
            ubicacionNull = null;
        } else {
            const ubicacionFound = await Ubicacion.findOne({ name: ubicacionVehiculoE });
            if (!ubicacionFound) return res.status(404).json({ message: `Ubicación ${ubicacionVehiculoE} no encontrada` });
            ubicacionNull = ubicacionFound._id;
        }

        // Financiamiento - Opcional
        if (financiamientoE == null || financiamientoE == undefined || financiamientoE == "") {
            financiamientoNull = null;
        } else {
            const financiamientoFound = await Financiamiento.findOne({ name: financiamientoE });
            if (!financiamientoFound) return res.status(404).json({ message: `Financiamiento ${financiamientoE} no encontrado` });
            financiamientoNull = financiamientoFound._id;
        }

        // Banco - Opcional
        if (bancoE == null || bancoE == undefined || bancoE == "") {
            bancoNull = null;
        } else {
            const bancoFound = await Banco.findOne({ name: bancoE });
            if (!bancoFound) return res.status(404).json({ message: `Banco ${bancoE} no encontrado` });
            bancoNull = bancoFound._id;
        }

        // Solicitud MAF - Opcional
        if (solicitudMAF == null || solicitudMAF == undefined || solicitudMAF == "") {
            solicitudNull = null;
        } else {
            const mafFound = await Maf.findOne({ nro_solicitud: solicitudMAF });
            if (!mafFound) return res.status(404).json({ message: `Solicitud ${solicitudMAF} no encontrada` });
            solicitudNull = mafFound._id;
        }

        // Campania TDP - Opcional
        const campaniaTDPFound = await Campania.find({ cod_interno: { $in: campaniasTDPE } });
        if (!campaniaTDPFound) return res.status(404).json({ message: `Campaña TDP ${campaniasTDPE} no encontrada` });

        // Campania MAF - Opcional
        const campaniaMAFFound = await Campania.find({ cod_interno: { $in: campaniasMafE } });
        if (!campaniaMAFFound) return res.status(404).json({ message: `Campaña TDP ${campaniasMafE} no encontrada` });

        // Accesorios - Opcional
        const accesoriosFound = await AccesorioE.find({ cod_interno: { $in: accesoriosE } });
        if (!accesoriosFound) return res.status(404).json({ message: `Accesorio ${accesoriosE} no encontrado` });

        // Condicion Accesorio - Opcional
        if (condicionAccesorioE == null || condicionAccesorioE == undefined || condicionAccesorioE == "") {
            condicionAccNull = null;
        } else {
            const condicionFound = await CondicionAccesorio.findOne({ name: condicionAccesorioE });
            if (!condicionFound) return res.status(404).json({ message: `Condición accesorio ${condicionAccesorioE} no encontrada` });
            condicionAccNull = condicionFound._id;
        }

        // Tipo Comprobante - Opcional
        if (tipoComprobanteE == null || tipoComprobanteE == undefined || tipoComprobanteE == "") {
            comprobanteNull = null;
        } else {
            const comprobanteFound = await TipoComprobante.findOne({ name: tipoComprobanteE });
            if (!comprobanteFound) return res.status(404).json({ message: `Tipo comprobante ${tipoComprobanteE} no encontrado` });
            comprobanteNull = comprobanteFound._id;
        }

        // Estado Facturacion - Opcional
        if (estadoFacturacionE == null || estadoFacturacionE == undefined || estadoFacturacionE == "") {
            facturacionNull = null;
        } else {
            const facturacionFound = await StatusFacturacion.findOne({ name: estadoFacturacionE });
            if (!facturacionFound) return res.status(404).json({ message: `Facturación ${estadoFacturacionE} no encontrado` });
            facturacionNull = facturacionFound._id;
        }

        if (estadoVentaE === "Libre") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isLibreS,
                    fechaLibreS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Credito") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isCreditoS,
                    fechaCreditoS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Reservado") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isReservadoS,
                    fechaReservadoS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Reservado C") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isReservadoCS,
                    fechaReservadoCS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Reservado L") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isReservadoLS,
                    fechaReservadoLS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "En Espera") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isEsperaS,
                    fechaEsperaS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Facturado") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isFacturadoS,
                    fechaFacturadoS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Anticipo") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isAnticipoS,
                    fechaAnticipoS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Cancelado") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isCanceladoS,
                    fechaCanceladoS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Cancelado PT") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isCanceladoPTS,
                    fechaCanceladoPTS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "EPDP") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isEPDPS,
                    fechaEPDPS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Por Desembolsar") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isDesembolsarS,
                    fechaDesembolsarS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "EXHIBICIÓN") {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    getGPS,
                    importeGPS,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isExhibicionS,
                    fechaExhibicionS,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        } else if (estadoVentaE === "Libre con accesorios") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isLibreConAccesoriosS,
                fechaLibreConAccesoriosS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "Stand By") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isStandByS,
                fechaStandByS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "BUENA PRO") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isBuenaProS,
                fechaBuenaProS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "RESERVADO OC") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isReservadoOCS,
                fechaReservadoOCS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "TALLER MOVIL") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isTallerMovilS,
                fechaTallerMovilS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "BLOQUEADO") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isBloqueadoS,
                fechaBloqueadoS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "Devolución") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isDevolucionS,
                fechaDevolucionS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "KINTO SHARE") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isKintoShareS,
                fechaKintoShareS,
                isVentaInterna,
                isVentaMenor,
            });
        } else if (estadoVentaE === "Test Drive") {
            query = await Sale.findByIdAndUpdate(itemId, {
                serie_tdp,
                precio,
                ubicacion_vehiculo,
                estatus_vehiculo,
                fecha_ciguena,
                fecha_entrega,
                adelantosE,
                isToyotaLife,
                isToyotaValue,
                arrayToyotaValues,
                descuento_autonort,
                acuerdoTDP,
                herramientas_tdp,
                herramientas_maf,
                observacion_adv,
                condicion_accesorios,
                nro_comprobante,
                fecha_comprobante,
                sucursal_venta,
                fecha_cancelacion,
                estatus_venta,
                fecha_facturacion_tdp,
                monto_facturado,
                isReportado,
                fechaReporte,
                mesReportado,
                vendedor: sellerFound._id,
                cliente: customerFound._id,
                auto: autoFound._id,
                estadoVehiculoE: estadoVehicularFound._id,
                tipoOperacionE: operacionFound._id,
                sucursalE: sucursalFound._id,
                estadoVentaE: situacionFound._id,
                getGPS,
                importeGPS,
                colorE: colorNull,
                anioFabricacionE: anioFNull,
                anioModeloE: anioMNull,
                ubicacionVehiculoE: ubicacionNull,
                financiamientoE: financiamientoNull,
                bancoE: bancoNull,
                solicitudMAF: solicitudNull,
                campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                campaniasMafE: campaniaMAFFound.map((a) => a._id),
                accesoriosE: accesoriosFound.map((a) => a._id),
                condicionAccesorioE: condicionAccNull,
                tipoComprobanteE: comprobanteNull,
                ofertaTDPE,
                ofertaMafE,
                estadoFacturacionE: facturacionNull,
                isTestDrive,
                fechaKintoShareS,
                fechaTestDriveS,
                isVentaMenor,
            });
        } else {
            query = await Sale.findByIdAndUpdate(
                itemId,
                {
                    serie_tdp,
                    precio,
                    ubicacion_vehiculo,
                    estatus_vehiculo,
                    fecha_ciguena,
                    fecha_entrega,
                    adelantosE,
                    isToyotaLife,
                    isToyotaValue,
                    arrayToyotaValues,
                    descuento_autonort,
                    acuerdoTDP,
                    herramientas_tdp,
                    herramientas_maf,
                    observacion_adv,
                    condicion_accesorios,
                    nro_comprobante,
                    fecha_comprobante,
                    sucursal_venta,
                    fecha_cancelacion,
                    estatus_venta,
                    fecha_facturacion_tdp,
                    monto_facturado,
                    isReportado,
                    fechaReporte,
                    mesReportado,
                    vendedor: sellerFound._id,
                    cliente: customerFound._id,
                    auto: autoFound._id,
                    estadoVehiculoE: estadoVehicularFound._id,
                    getGPS,
                    importeGPS,
                    tipoOperacionE: operacionFound._id,
                    sucursalE: sucursalFound._id,
                    estadoVentaE: situacionFound._id,
                    colorE: colorNull,
                    anioFabricacionE: anioFNull,
                    anioModeloE: anioMNull,
                    ubicacionVehiculoE: ubicacionNull,
                    financiamientoE: financiamientoNull,
                    bancoE: bancoNull,
                    solicitudMAF: solicitudNull,
                    campaniasTDPE: campaniaTDPFound.map((a) => a.id),
                    campaniasMafE: campaniaMAFFound.map((a) => a._id),
                    accesoriosE: accesoriosFound.map((a) => a._id),
                    condicionAccesorioE: condicionAccNull,
                    tipoComprobanteE: comprobanteNull,
                    ofertaTDPE,
                    ofertaMafE,
                    estadoFacturacionE: facturacionNull,
                    isVentaInterna,
                    isVentaMenor,
                }
                // { new: true }
            );
        }

        // console.log('Query Updated:',query);
        if (!query) return res.status(404).json({ message: `Expediente ${itemId} no encontrado para actualizar` });

        const newLog = await LogFile({
            cod_interno: new Date().getTime(),
            file_id: query._id,
            modifiedBy: userFound._id,
            action: `Usuario ${userFound.username} ha modificado el expediente`,
            objBefore: JSON.stringify(query),
            objAfter: JSON.stringify(req.body),
            timeAt: query.updatedAt,
        });
        // console.log("Query:", newLog);
        const logQuery = await newLog.save();

        res.json({ message: "Expediente actualizado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.deleteOneById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await Sale.findByIdAndDelete(itemId);

        if (query) {
            const newLog = await LogFile({
                cod_interno: new Date().getTime(),
                file_id: query._id,
                modifiedBy: null,
                action: `Usuario admin ha eliminado el expediente ${query.serie_tdp}`,
                timeAt: query.updatedAt,
            });
            // console.log('Query:',newLog);
            const logQuery = await newLog.save();
            res.json({ message: "Expediente eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe Expediente a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesBySucursalyFecha = async (req, res) => {
    const { sucursalE, start, end, entregados } = req.body;
    let query = null;

    try {
        if (entregados) {
            query = await Sale.find({
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                fecha_entrega: {
                    $gte: new Date(start),
                    $lte: new Date(end),
                },
            })
                .sort({ fecha_cancelacion: -1 })
                .populate({
                    path: "vendedor",
                    select: "name sucursal",
                })
                .populate({
                    path: "auto",
                    select: "model version cod_tdp",
                    populate: {
                        path: "model",
                        select: "marca name avatar",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "colorE",
                    select: "name",
                })
                .populate({
                    path: "anioFabricacionE",
                    select: "name",
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "ubicacionVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "estadoVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "financiamientoE",
                    select: "name",
                })
                .populate({
                    path: "bancoE",
                    select: "name",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "tipoOperacionE",
                    select: "name document",
                })
                .populate({
                    path: "tipoComprobanteE",
                    select: "name document",
                })
                .populate({
                    path: "estadoVentaE",
                    select: "name document",
                })
                .populate({
                    path: "estadoFacturacionE",
                    select: "name document",
                })
                .populate("campanias")
                .populate("adicional")
                .populate("accesorios")
                .populate({
                    path: "empleado",
                    select: "name username",
                });
        } else {
            query = await Sale.find({
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
                },
            })
                .sort({ fecha_cancelacion: -1 })
                .populate({
                    path: "vendedor",
                    select: "name sucursal",
                })
                .populate({
                    path: "auto",
                    select: "model version cod_tdp",
                    populate: {
                        path: "model",
                        select: "marca name avatar",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "colorE",
                    select: "name",
                })
                .populate({
                    path: "anioFabricacionE",
                    select: "name",
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "ubicacionVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "estadoVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "financiamientoE",
                    select: "name",
                })
                .populate({
                    path: "bancoE",
                    select: "name",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "tipoOperacionE",
                    select: "name document",
                })
                .populate({
                    path: "tipoComprobanteE",
                    select: "name document",
                })
                .populate({
                    path: "estadoVentaE",
                    select: "name document",
                })
                .populate({
                    path: "estadoFacturacionE",
                    select: "name document",
                })
                .populate("campanias")
                .populate("adicional")
                .populate("accesorios")
                .populate({
                    path: "empleado",
                    select: "name username",
                });
        }

        if (query.length == 0) {
            const message = entregados ? `La sucursal ${sucursalE} no cuenta con entregas` : `La sucursal ${sucursalE} no cuenta con expedientes`;
            return res.status(404).json({ message });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesByVendedor = async (req, res) => {
    const { seller, start, end } = req.body;
    let query = null;

    try {
        const sellerFound = await Seller.findOne({ name: seller });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${seller} no encontrado` });

        if (start == undefined || start == null || start == "") {
            query = await Sale.find({
                vendedor: sellerFound._id,
            })
                .sort({ fecha_cancelacion: -1 })
                .populate({
                    path: "vendedor",
                    select: "name sucursal",
                })
                .populate({
                    path: "auto",
                    select: "model version cod_tdp",
                    populate: {
                        path: "model",
                        select: "marca name avatar",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "colorE",
                    select: "name",
                })
                .populate({
                    path: "anioFabricacionE",
                    select: "name",
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "ubicacionVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "estadoVehiculoE",
                    select: "name",
                })
                .populate({
                    path: "financiamientoE",
                    select: "name",
                })
                .populate({
                    path: "bancoE",
                    select: "name",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "tipoOperacionE",
                    select: "name document",
                })
                .populate({
                    path: "tipoComprobanteE",
                    select: "name document",
                })
                .populate({
                    path: "estadoVentaE",
                    select: "name document",
                })
                .populate({
                    path: "estadoFacturacionE",
                    select: "name document",
                })
                .populate("campanias")
                .populate("adicional")
                .populate("accesorios")
                .populate({
                    path: "empleado",
                    select: "name username",
                });
        } else {
            query = await Sale.aggregate([
                {
                    $match: {
                        vendedor: sellerFound._id,
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$estatus_venta",
                        qty: { $sum: 1 },
                    },
                },
                {
                    $sort: { qty: -1 },
                },
            ]);
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `El vendedor ${seller} no cuenta con expedientes` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.groupFilesByEstado = async (req, res) => {
    const { sucursalE, start, end } = req.body;

    try {
        const query = await Sale.aggregate([
            {
                $match: {
                    sucursal_venta: sucursalE,
                    fecha_cancelacion: {
                        $gte: new Date(start),
                        $lte: new Date(end),
                    },
                },
            },
            {
                $group: {
                    _id: { estado: "$estatus_venta" },
                    num_ventas: { $sum: 1 },
                },
            },
            {
                $sort: {
                    num_ventas: -1,
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(404).json({ message: `No existen expedientes` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.conteoFilesByEstado = async (req, res) => {
    const { estado, ubicacion, isEntregado, sucursalE, start, end } = req.body;
    let query = null;

    try {
        if (isEntregado) {
            query = await Sale.find({
                ubicacion_vehiculo: { $regex: ".*" + ubicacion + ".*" },
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                fecha_entrega: {
                    $gte: new Date(start),
                    $lte: new Date(end),
                },
            }).countDocuments();
        } else {
            query = await Sale.find({
                estatus_venta: { $regex: ".*" + estado + ".*" },
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
                },
            }).countDocuments();
        }
        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.rankingFilesByUbicacion = async (req, res) => {
    const { ubicacion, start, end } = req.body;

    try {
        const query = await Sale.aggregate([
            {
                $match: {
                    ubicacion_vehiculo: ubicacion,
                    fecha_entrega: {
                        $gte: new Date(start),
                        $lte: new Date(end),
                    },
                },
            },
            {
                $group: {
                    _id: "$sucursal_venta",
                    qty: {
                        $sum: 1,
                    },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesByEstado = async (req, res) => {
    const { estado, tramite, sucursalE } = req.body;
    let query = null;
    // console.log(req.body);
    try {
        // if (tramite == null || tramite == undefined || tramite == "") {
        if (tramite === 0) {
            console.log("Tramite 0");
            query = await Sale.find({
                estatus_venta: { $regex: ".*" + estado + ".*" },
                pasoaTramite: tramite,
                sucursal_venta: { $in: sucursalE },
                // sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
            })
                .sort({ fecha_cancelacion: -1 })
                .populate({
                    path: "vendedor",
                    select: "name sucursal avatar",
                })
                .populate({
                    path: "auto",
                    select: "model version cod_tdp",
                    populate: {
                        path: "model",
                        select: "marca name avatar",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "colorE",
                    select: "name",
                })
                .populate({
                    path: "anioFabricacionE",
                    select: "name",
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "ubicacionVehiculoE",
                    select: "name valor",
                })
                .populate({
                    path: "estadoVehiculoE",
                    select: "name valor",
                })
                .populate({
                    path: "financiamientoE",
                    select: "name",
                })
                .populate({
                    path: "bancoE",
                    select: "name",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "tipoOperacionE",
                    select: "name document",
                })
                .populate({
                    path: "tipoComprobanteE",
                    select: "name document",
                })
                .populate({
                    path: "estadoVentaE",
                    select: "name document",
                })
                .populate({
                    path: "estadoFacturacionE",
                    select: "name document",
                })
                .populate("campanias")
                .populate("adicional")
                .populate("accesorios")
                .populate({
                    path: "empleado",
                    select: "name username",
                });
        } else {
            console.log("Tramite null");
            query = await Sale.find({
                estatus_venta: { $regex: ".*" + estado + ".*" },
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
            })
                .sort({ fecha_cancelacion: -1 })
                .populate({
                    path: "vendedor",
                    select: "name sucursal avatar",
                })
                .populate({
                    path: "auto",
                    select: "model version cod_tdp",
                    populate: {
                        path: "model",
                        select: "marca name avatar",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "colorE",
                    select: "name",
                })
                .populate({
                    path: "anioFabricacionE",
                    select: "name",
                })
                .populate({
                    path: "anioModeloE",
                    select: "name",
                })
                .populate({
                    path: "ubicacionVehiculoE",
                    select: "name valor",
                })
                .populate({
                    path: "estadoVehiculoE",
                    select: "name valor",
                })
                .populate({
                    path: "financiamientoE",
                    select: "name",
                })
                .populate({
                    path: "bancoE",
                    select: "name",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "tipoOperacionE",
                    select: "name document",
                })
                .populate({
                    path: "tipoComprobanteE",
                    select: "name document",
                })
                .populate({
                    path: "estadoVentaE",
                    select: "name document",
                })
                .populate({
                    path: "estadoFacturacionE",
                    select: "name document",
                })
                .populate("campanias")
                .populate("adicional")
                .populate("accesorios")
                .populate({
                    path: "empleado",
                    select: "name username",
                });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `Expedientes ${estado} no existen en ${sucursalE}` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.rankingFilesByModelo = async (req, res) => {
    const { sucursalE, seller, estado, start, end } = req.body;
    let query = null;

    try {
        if (seller == null || seller == undefined || seller == "") {
            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                        estatus_venta: estado,
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$auto",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $sort: {
                        num_ventas: -1,
                    },
                },
            ]);
        } else {
            const sellerFound = await Seller.findOne({ name: seller });
            if (!sellerFound) return res.status(404).json({ message: `Asesor ${seller} no encontrado` });

            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                        vendedor: sellerFound._id,
                        estatus_venta: { $regex: ".*" + estado + ".*" },
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$auto",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $sort: {
                        num_ventas: -1,
                    },
                },
            ]);
        }

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.rankingFilesBySeller = async (req, res) => {
    const { sucursalE, estadoE, start, end } = req.body;
    // console.log(req.body);

    try {
        const query = await Sale.aggregate([
            {
                $match: {
                    sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                    estatus_venta: { $regex: ".*" + estadoE + ".*" },
                    fecha_cancelacion: {
                        $gte: new Date(start),
                        $lte: new Date(end),
                    },
                },
            },
            {
                $group: {
                    _id: "$vendedor",
                    num_ventas: {
                        $sum: 1,
                    },
                },
            },
            {
                $sort: {
                    num_ventas: -1,
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen ventas" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesByToyotaValue = async (req, res) => {
    const { sucursalE, isToyotaValue, seller, start, end } = req.body;
    let query = null;

    try {
        if (seller == undefined || seller == null || seller == "") {
            query = await Sale.find({
                sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                isToyotaValue,
                fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) },
            })
                .select("vendedor cliente auto serie_tdp isToyotaValue arrayToyotaValues sucursalE")
                .populate({
                    path: "vendedor",
                    select: "name avatar",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "auto",
                    select: "model cod_tdp",
                    populate: {
                        path: "model",
                        select: "name avatar marca",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                });
        } else {
            const sellerFound = await Seller.findOne({ name: seller });
            if (!sellerFound) return res.status(404).json({ message: `Vendedor ${seller} no encontrado` });

            query = await Sale.find({
                // sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
                vendedor: sellerFound._id,
                isToyotaValue,
                fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) },
            })
                .select("vendedor cliente auto serie_tdp isToyotaValue arrayToyotaValues sucursalE")
                .populate({
                    path: "vendedor",
                    select: "name avatar",
                })
                .populate({
                    path: "cliente",
                    select: "name document",
                })
                .populate({
                    path: "sucursalE",
                    select: "name",
                })
                .populate({
                    path: "auto",
                    select: "model cod_tdp",
                    populate: {
                        path: "model",
                        select: "name avatar marca",
                        populate: {
                            path: "marca",
                            select: "name avatar",
                        },
                    },
                });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen expedientes con toyota value` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesByImporteAccesorios = async (req, res) => {
    const { sucursalE, start, end } = req.body;

    try {
        const query = await Sale.find({
            $expr: { $gt: [{ $size: { $ifNull: ["$accesoriosE", []] } }, 0] },
            sucursal_venta: { $regex: ".*" + sucursalE + ".*" },
            fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) },
        })
            .select("accesoriosE vendedor cliente sucursalE sucursal_venta")
            .populate({
                path: "accesoriosE",
                select: "name precio",
            })
            .populate({
                path: "vendedor",
                select: "name avatar",
            })
            .populate({
                path: "cliente",
                select: "name document",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existe expedientes con accesorios" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getAllLogs = async (req, res) => {
    try {
        const query = await LogFile.find()
            .sort({ timeAt: -1 })
            .populate({
                path: "file_id",
                select: "serie_tdp",
            })
            .populate({
                path: "modifiedBy",
                select: "name username avatar",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen logs de expedientes` });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

fileController.getOneLogByCodigo = async (req, res) => {
    const { cod_interno } = req.body;

    try {
        const query = await LogFile.findOne({ cod_interno })
            .populate({
                path: "file_id",
                select: "serie_tdp",
            })
            .populate({
                path: "modifiedBy",
                select: "name username avatar",
            });

        if (!query) return res.status(404).json({ message: `Registro de Expediente ${cod_interno} no encontrado` });

        res.json({ query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getOneLogById = async (req, res) => {
    const { itemId } = req.params;

    try {
        const query = await LogFile.findById(itemId)
            .populate({
                path: "file_id",
                select: "serie_tdp",
            })
            .populate({
                path: "modifiedBy",
                select: "name username avatar",
            });

        if (!query) return res.status(404).json({ message: `Registro de Expediente ${itemId} no encontrado` });

        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.testSeguimiento = async (req, res) => {
    const { sucursalE, estadoE, start, end, isToyotaValue } = req.body;

    let query = null;
    try {
        if (isToyotaValue) {
            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: {
                            $regex: ".*" + sucursalE + ".*",
                        },
                        estatus_venta: {
                            $regex: ".*" + estadoE + ".*",
                        },
                        isToyotaValue,
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$vendedor",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $sort: {
                        num_ventas: -1,
                    },
                },
                {
                    $lookup: {
                        from: "sellers",
                        localField: "_id",
                        foreignField: "_id",
                        as: "vendedor",
                    },
                },
                {
                    $unwind: {
                        path: "$vendedor",
                    },
                },
                {
                    $project: {
                        "vendedor.name": 1,
                        num_ventas: 1,
                        _id: 0,
                    },
                },
            ]);
        } else {
            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: {
                            $regex: ".*" + sucursalE + ".*",
                        },
                        estatus_venta: {
                            $regex: ".*" + estadoE + ".*",
                        },
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$vendedor",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $lookup: {
                        from: "sellers",
                        localField: "_id",
                        foreignField: "_id",
                        as: "vendedor",
                    },
                },
                {
                    $unwind: {
                        path: "$vendedor",
                    },
                },
                {
                    $project: {
                        "vendedor.name": 1,
                        "vendedor.sucursal": 1,
                        num_ventas: 1,
                        _id: 0,
                    },
                },
            ]);
        }

        if (query.length === 0) {
            return res.status(201).json({ message: `No existen registros` });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesByToyotaLife = async (req, res) => {
    const { sucursalE, estadoE, start, end, isToyotaLife } = req.body;
    let query = null;
    try {
        if (isToyotaLife) {
            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: {
                            $regex: ".*" + sucursalE + ".*",
                        },
                        estatus_venta: {
                            $regex: ".*" + estadoE + ".*",
                        },
                        isToyotaLife,
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$vendedor",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $sort: {
                        num_ventas: -1,
                    },
                },
                {
                    $lookup: {
                        from: "sellers",
                        localField: "_id",
                        foreignField: "_id",
                        as: "vendedor",
                    },
                },
                {
                    $unwind: {
                        path: "$vendedor",
                    },
                },
                {
                    $project: {
                        "vendedor.name": 1,
                        num_ventas: 1,
                        _id: 0,
                    },
                },
            ]);
        } else {
            query = await Sale.aggregate([
                {
                    $match: {
                        sucursal_venta: {
                            $regex: ".*" + sucursalE + ".*",
                        },
                        estatus_venta: {
                            $regex: ".*" + estadoE + ".*",
                        },
                        fecha_cancelacion: {
                            $gte: new Date(start),
                            $lte: new Date(end),
                        },
                    },
                },
                {
                    $group: {
                        _id: "$vendedor",
                        num_ventas: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $lookup: {
                        from: "sellers",
                        localField: "_id",
                        foreignField: "_id",
                        as: "vendedor",
                    },
                },
                {
                    $unwind: {
                        path: "$vendedor",
                    },
                },
                {
                    $project: {
                        "vendedor.name": 1,
                        "vendedor.sucursal": 1,
                        num_ventas: 1,
                        _id: 0,
                    },
                },
            ]);
        }

        if (query.length === 0) {
            return res.status(201).json({ message: `No existen registros` });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.getFilesWithModeloByStock = async (req, res) => {
    const { sucursal, estadoE, start, end } = req.body;

    try {
        const query = await Sale.aggregate([
            {
                $match: {
                    sucursal_venta: { $regex: ".*" + sucursal + ".*" },
                    estatus_venta: { $regex: ".*" + estadoE + ".*" },
                    fecha_cancelacion: {
                        $gte: new Date(start),
                        $lte: new Date(end),
                    },
                },
            },
            {
                $group: {
                    _id: "$auto",
                    qty: { $sum: 1 },
                },
            },
            {
                $lookup: {
                    from: "vehicles",
                    localField: "_id",
                    foreignField: "_id",
                    as: "vehicle",
                },
            },
            {
                $unwind: {
                    path: "$vehicle",
                },
            },
            {
                $lookup: {
                    from: "modelots",
                    localField: "vehicle.model",
                    foreignField: "_id",
                    as: "model",
                },
            },
            {
                $unwind: {
                    path: "$model",
                },
            },
            {
                $project: {
                    _id: 1,
                    qty: 1,
                    "vehicle.cod_tdp": 1,
                    "vehicle.version": 1,
                    "model.name": 1,
                    "model.avatar": 1,
                },
            },
            {
                $sort: { "vehicle.cod_tdp": 1 },
            },
        ]);

        if (query.length === 0) {
            return res.status(201).json({ message: `No existen registros` });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

fileController.testBusquedaXmarcas = async (req, res) => {
    const { codTDP, start, end, sucursalE, estadoE } = req.body;

    let query = null;

    try {
        query = await Sale.find({
            sucursal_venta: {
                $regex: ".*" + sucursalE + ".*",
            },
            estatus_venta: {
                $regex: ".*" + estadoE + ".*",
            },
            fecha_cancelacion: {
                $gte: new Date(start),
                $lte: new Date(end),
            },
        }).populate({
            path: "auto",
            match: { cod_tdp: codTDP },
        });

        if (query.length == 0) return res.status(404).json({ message: `No existen datos` });
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default fileController;
