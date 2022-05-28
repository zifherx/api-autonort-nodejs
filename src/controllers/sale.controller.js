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

const saleController = {};

saleController.createOne = async (req, res) => {
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
          fecha_cancelacion,
          fecha_facturacion_tdp,
          estadoFacturacionE,
          monto_facturado,
          createdBy,
          fechaCreacionS,
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
               observacion_adv,
               condicion_accesorios,
               fecha_facturacion_tdp,
               monto_facturado,
               nro_comprobante,
               fecha_comprobante,
               fecha_cancelacion,
               sucursal_venta,
               fechaCreacionS,
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

          if (query) {
               res.json({ message: "Expediente creado con éxito" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

saleController.getAll = async (req, res) => {
     try {
          const query = await Sale.find()
               .sort({
                    fecha_cancelacion: -1,
               })
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
               })
               .populate({
                    path: "createdBy",
                    select: "name username",
                    strictPopulate: true,
               });

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    all: query,
               });
          } else {
               return res.status(404).json({
                    message: "No Existen Expedientes",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.getOneById = async (req, res) => {
     const { salesId } = req.params;

     try {
          const query = await Sale.findById(salesId)
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
               return res.status(404).json({ message: "No existe el Expediente" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

saleController.updateOneById = async (req, res) => {
     const { salesId } = req.params;
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
          adelantosE,
          campaniasTDPE,
          ofertaTDPE,
          campaniasMafE,
          ofertaMafE,
          isToyotaValue,
          arrayToyotaValues,
          descuento_autonort,
          acuerdoTDP,
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
          estatus_venta,
          fecha_facturacion_tdp,
          estadoFacturacionE,
          monto_facturado,
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

          const query = await Sale.findByIdAndUpdate(salesId, {
               serie_tdp,
               precio,
               ubicacion_vehiculo,
               estatus_vehiculo,
               fecha_ciguena,
               fecha_entrega,
               adelantosE,
               isToyotaValue,
               arrayToyotaValues,
               descuento_autonort,
               acuerdoTDP,
               observacion_adv,
               condicion_accesorios,
               nro_comprobante,
               fecha_comprobante,
               sucursal_venta,
               fecha_cancelacion,
               estatus_venta,
               fecha_facturacion_tdp,
               monto_facturado,
               vendedor: sellerFound._id,
               cliente: customerFound._id,
               auto: autoFound._id,
               estadoVehiculoE: estadoVehicularFound._id,
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
          });

          if (query) {
               res.json({ message: "Expediente actualizado con éxito" });
          } else {
               return res.status(404).json({ message: "No existe expediente a actualizar" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

/* saleController.updateSaleById = async (req, res) => {
     const { salesId } = req.params;

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
          monto_facturado,
          tipo_operacion,
          fecha_inicio_reserva,
          fecha_fin_reserva,
          tipo_comprobante,
          nro_comprobante,
          fecha_comprobante,
          estatus_venta,
          sucursal_venta,
          fecha_cancelacion,
     } = req.body;

     try {
          //Seller
          const foundSeller = await Seller.find({
               name: {
                    $in: vendedor,
               },
          });

          //Vehicle
          const foundVehicle = await Vehicle.find({
               cod_tdp: {
                    $in: auto,
               },
          });

          //Customer
          const foundCustomer = await Customer.find({
               document: {
                    $in: cliente,
               },
          });

          //Campaign
          const foundCampaign = await Campaign.find({
               name: {
                    $in: campanias,
               },
          });

          //Adicional
          const foundAdicional = await Adicional.find({
               name: {
                    $in: adicional,
               },
          });

          //Props
          const foundProps = await Props.find({
               name: {
                    $in: accesorios,
               },
          });

          const ventaActualizada = await Sale.findByIdAndUpdate(salesId, {
               vendedor: foundSeller.map((seller) => seller._id),
               cliente: foundCustomer.map((customer) => customer._id),
               auto: foundVehicle.map((vehicle) => vehicle._id),
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
               campanias: foundCampaign.map((campaign) => campaign._id),
               adicional: foundAdicional.map((adicional) => adicional._id),
               descuento_autonort,
               observacion_adv,
               accesorios: foundProps.map((props) => props._id),
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
               fecha_cancelacion,
          });

          if (ventaActualizada) {
               res.json({
                    message: "Expediente actualizado con éxito",
               });
          } else {
               return res.status(404).json({
                    message: "No existe Expediente a actualizar",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
}; */

saleController.deleteOneById = async (req, res) => {
     const { salesId } = req.params;

     try {
          const query = await Sale.findByIdAndDelete(salesId);

          if (query) {
               res.json({ message: "Expediente eliminado con éxito" });
          } else {
               return res.status(404).json({ message: "No existe Expediente a eliminar" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

// Verificar hacía abajo

/* saleController.getUnidadesBySucursalFecha = async (req, res) => {
     const { sucursalE, start, end } = req.body;

     const filtro = {
          sucursal_venta: sucursalE,
          fecha_cancelacion: {
               $gte: new Date(start),
               $lte: new Date(end),
          },
     };

     try {
          const query = await Sale.aggregate([
               { $match: filtro },
               {
                    $group: {
                         _id: { estado: "$estatus_venta" },
                         num_ventas: { $sum: 1 },
                    },
               },
               { $sort: { num_ventas: -1 } },
          ]);

          if (query.length > 0) {
               res.json({ total: query.length, ranking: query });
          } else {
               return res.status(404).json({
                    message: "No existen ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
}; */

/* saleController.getConteoUnidadesByEstado = async (req, res) => {
     const { estado, ubicacion, isEntregado, start, end } = req.body;
     let query = null;

     try {
          if (isEntregado) {
               query = await Sale.find({
                    ubicacion_vehiculo: { $regex: ".*" + ubicacion + ".*" },
                    fecha_entrega: {
                         $gte: new Date(start),
                         $lte: new Date(end),
                    },
               }).countDocuments();
          } else {
               query = await Sale.find({
                    estatus_venta: { $regex: ".*" + estado + ".*" },
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
}; */

/* saleController.getRankingUnidadesByUbicacion = async (req, res) => {
     const { ubicacion, start, end } = req.body;

     try {
          const filtro = {
               ubicacion_vehiculo: ubicacion,
               fecha_entrega: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };

          const query = await Sale.aggregate([
               {
                    $match: filtro,
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
}; */

/* saleController.UnidadesLibres = async (req, res) => {
     const { estado, tramite } = req.body;
     try {
          const query = await Sale.find({
               estatus_venta: estado,
               pasoaTramite: tramite,
          })
               .populate("vendedor")
               .populate("auto")
               .populate("cliente")
               .populate("campanias")
               .populate("adicional")
               .populate("accesorios")
               .populate("empleado");
          if (query.length > 0) {
               res.json({
                    total: query.length,
                    files: query,
               });
          } else {
               return res.status(404).json({
                    message: `No existen Unidades ${estado}`,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
}; */

/* saleController.UnidadesByStatus = async (req, res) => {
     const { estado, tramite, sucursal } = req.body;
     try {
          const query = await Sale.find({
               estatus_venta: estado,
               pasoaTramite: tramite,
               sucursal_venta: sucursal,
          })
               .sort({
                    fecha_cancelacion: "desc",
               })
               .populate("vendedor")
               .populate("auto")
               .populate("cliente")
               .populate("campanias")
               .populate("adicional")
               .populate("accesorios")
               .populate("empleado");
          if (query.length > 0) {
               res.json({
                    total: query.length,
                    files: query,
               });
          } else {
               return res.status(404).json({
                    message: `No existen Unidades ${estado}`,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
}; */

saleController.UnidadesBySucursalyFecha = async (req, res) => {
     const { sucursal, start, end } = req.body;
     try {
          const query = await Sale.find({
               sucursal_venta: { $regex: ".*" + sucursal + ".*" },
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          })
               .sort({
                    fecha_cancelacion: -1,
               })
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

          if (query.length > 0) {
               res.json({ total: query.length, all: query });
          } else {
               return res.status(404).json({ message: "No Existen Unidades" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

saleController.conteoUnidadesByStatus = async (req, res) => {
     const { estado, start, end } = req.body;
     try {
          const query = await Sale.where({
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          }).countDocuments();
          //console.log(consulta)
          if (query >= 0) {
               res.json({
                    count: query,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.conteoUnidadesBySucursalFecha = async (req, res) => {
     const { sucursal, start, end } = req.body;
     try {
          const query = await Sale.find({
               sucursal_venta: sucursal,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          }).countDocuments();
          if (query >= 0) {
               res.json({
                    count: query,
               });
          } else {
               return res.status(404).json({
                    message: "No existen unidades",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.conteoUnidadesBySucursalStatusFecha = async (req, res) => {
     const { sucursal, status, start, end } = req.body;
     //console.log(start, end);
     try {
          const query = await Sale.find({
               sucursal_venta: sucursal,
               estatus_venta: status,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          }).countDocuments();
          //console.log('Query: ', query);
          if (query >= 0) {
               res.json({
                    count: query,
               });
          } else {
               return res.status(404).json({
                    message: `No existen Unidades ${status} en ${sucursal}`,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.conteoVentasByVendedor = async (req, res) => {
     const { sucursal, estatus, start, end } = req.body;
     // console.log(req.body)
     try {
          const filter = {
               sucursal_venta: sucursal,
               estatus_venta: estatus,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const consulta = await Sale.aggregate([
               {
                    $match: filter,
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
          if (consulta.length > 0) {
               res.json(consulta);
          } else {
               return res.status(201).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.totalAccesoriosBySucursalMes = async (req, res) => {
     const { sucursal, estado, start, end } = req.body;

     try {
          const filter = {
               sucursal_venta: sucursal,
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };

          const query = await Sale.aggregate([
               {
                    $match: filter,
               },
               // {$unwind: {path: '$accesorios'}},
               {
                    $group: {
                         _id: "$accesorios",
                         qty: {
                              $sum: 1,
                         },
                         // totalProps: {$sum: '$accesorios.precio'}
                    },
               },
               // {$addFields: {totalProps: {$sum: '$accesorios.precio'}}}
          ]);

          const arrNoVacios = query.filter((element) => element._id.length > 0);
          // console.log(arrNoVacios);

          let arr = [];
          await arrNoVacios.forEach(async (element) => {
               let abc = {};

               let query = await Props.findById(element._id);

               abc.precio = query.precio;
               abc.qty = element.qty;

               arr.push(abc);
          });

          // await console.log(arr);

          let total = arrNoVacios.reduce((acc, curVal) => {
               return acc + curVal.qty;
               // let prop = await Props.findById(curVal._id);
               // let valor = prop.precio * curVal.qty;
               // let sumatoria = acc + valor;
               // console.log(sumatoria);
               // return sumatoria;
          }, 0);

          // let total = query.map( async (elemento) => {
          //     try {
          //         if(elemento._id.length > 0){
          //             // console.log('Elemento:',elemento);
          //             let id = elemento._id;

          //             let prop = await Props.findById(id);
          //             // console.log(prop);
          //             let sumatoria = 0;

          //             let valor = elemento.qty * prop.precio;

          //             sumatoria += valor;

          //             // console.log('suma:',sumatoria);
          //             return {...sumatoria};
          //         }

          //     } catch (err) {
          //         console.log(err);
          //     }
          // });

          if (query.length >= 0) {
               res.json({
                    total: total,
                    deploy: arrNoVacios,
               });
          } else {
               return res.status(201).json({
                    message: "No existe Importe",
               });
          }
     } catch (err) {
          console.log(err);
     }
};

saleController.conteoVentasByModelo = async (req, res) => {
     const { sucursal, estatus, start, end } = req.body;

     try {
          const filter = {
               sucursal_venta: sucursal,
               estatus_venta: estatus,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filter,
               },
               {
                    $group: {
                         _id: "$auto",
                         num_ventas: {
                              $sum: 1,
                         },
                    },
               },
          ]);
          if (query.length > 0) {
               res.json({
                    ranking: query,
               });
          } else {
               return res.status(404).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.rankingVentasByModelo = async (req, res) => {
     const { estado, start, end } = req.body;

     try {
          const filter = {
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filter,
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

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    ranking: query,
               });
          } else {
               return res.status(404).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.conteoUnidadesEntregadasBySucursal = async (req, res) => {
     const { sucursal, start, end } = req.body;
     try {
          const query = await Sale.where({
               sucursal_venta: { $regex: ".*" + sucursal + ".*" },
               fecha_entrega: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          })
               .find()
               .countDocuments();
          if (query >= 0) {
               res.json({
                    total: query,
               });
          } else {
               return res.status(404).json({
                    message: `No existen Unidades entregadas en ${sucursal}`,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.conteoVehiculosEntregadosByFecha = async (req, res) => {
     const { ubicacion, start, end } = req.body;
     try {
          const filtro = {
               ubicacion_vehiculo: ubicacion,
               fecha_entrega: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filtro,
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
               res.json({
                    total: query.length,
                    deploy: query,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.obtenerToyotaValues = async (req, res) => {
     const { sucursal, statusVenta, start, end } = req.body;
     const objetos = [];
     try {
          // const query = await Sale.where({ sucursal_venta: sucursal, estatus_venta: statusVenta, fecha_cancelacion: { $gte: new Date(start), $lte: new Date(end) }, adicional: { $gte: 1 } }).find();
          const query = await Sale.where({
               sucursal_venta: sucursal,
               estatus_venta: statusVenta,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          })
               .find()
               .populate("adicional vendedor auto");
          // const values = await query.adicional
          // console.log(query)
          query.forEach((element) => {
               console.log(element);
               if (element.adicional.length > 0) {
                    let perra = {};
                    perra.sucursal = element.sucursal_venta;
                    perra.serie = element.serie_tdp;
                    perra.adicional = element.adicional;
                    perra.vendedor = element.vendedor;
                    perra.vehiculo = element.auto;
                    objetos.push(perra);
               }
          });
          if (query >= 0) {
               res.json({
                    nro_adicionales: objetos.length,
                    toyota_values: objetos,
               });
          } else {
               return res.status(404).json({
                    message: `No existen Unidades ${statusVenta} en ${sucursal} con Toyota Value en ese rango de fechas`,
               });
          }
     } catch (err) {
          console.log(err.message);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.getVehiclesySeller = async (req, res) => {
     const { vendedor, start, end } = req.body;

     try {
          const sellerFound = await Seller.findOne({
               name: vendedor,
          });

          const filtro = {
               vendedor: sellerFound._id,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filtro,
               },
               {
                    $group: {
                         _id: "$auto",
                         qty: {
                              $sum: 1,
                         },
                    },
               },
          ]);

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    deploy: query,
               });
          } else {
               return res.staus(201).json({
                    message: "No existen Ventas en este Vendedor",
               });
          }
     } catch (err) {
          console.log(err.message);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.getSalesBySeller = async (req, res) => {
     const { vendedor, start, end } = req.body;

     try {
          const sellerFound = await Seller.findOne({
               name: vendedor,
          });

          const filtro = {
               vendedor: sellerFound._id,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filtro,
               },
               {
                    $group: {
                         _id: "$estatus_venta",
                         qty: {
                              $sum: 1,
                         },
                    },
               },
          ]);

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    deploy: query,
               });
          } else {
               return res.staus(201).json({
                    message: "No existen Ventas en este Vendedor",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.getRankingByStatusyFecha = async (req, res) => {
     const { sucursal, start, end } = req.body;
     try {
          const filter = {
               sucursal_venta: sucursal,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const consulta = await Sale.aggregate([
               {
                    $match: filter,
               },
               {
                    $group: {
                         _id: "$estatus_venta",
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
          if (consulta.length > 0) {
               res.json({
                    total: consulta.length,
                    ranking: consulta,
               });
          } else {
               return res.status(404).json({
                    message: "No existen ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.probandoRanking = async (req, res) => {
     const { sucursal, estado, start, end } = req.body;

     try {
          const filter = {
               sucursal_venta: sucursal,
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filter,
               },
               {
                    $group: {
                         _id: {
                              seller: "$vendedor",
                              month: {
                                   $month: "$fecha_cancelacion",
                              },
                         },
                         count: {
                              $sum: 1,
                         },
                    },
               },
               {
                    $sort: {
                         _id: 1,
                    },
               },
          ]);

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    deploy: query,
               });
          } else {
               return res.status(201).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
     }
};

saleController.conteoVentasBySucursalyEstadoyMarca = async (req, res) => {
     const { sucursal, estado, marca, start, end } = req.body;

     try {
          const query = await Sale.find({
               sucursal_venta: sucursal,
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          }).populate({
               path: "auto",
               select: "cod_tdp model version",
               populate: {
                    path: "model",
                    select: "avatar name marca",
                    populate: {
                         path: "marca",
                         select: "avatar name",
                         match: {
                              name: marca,
                         },
                    },
               },
          });

          // console.log(query.length);
          let obj = query.filter((b) => b.auto.model.marca);

          if (obj.length > 0) {
               // console.log(obj);
               res.json({
                    total: obj.length,
                    deploy: obj,
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.rankingVentasByFinanciamiento = async (req, res) => {
     const { sucursal, estado, start, end } = req.body;

     try {
          const filter = {
               sucursal_venta: {
                    $regex: ".*" + sucursal + ".*",
               },
               estatus_venta: estado,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filter,
               },
               {
                    $group: {
                         _id: "$tipo_financiamiento",
                         qty: {
                              $sum: 1,
                         },
                    },
               },
               {
                    $sort: {
                         qty: -1,
                    },
               },
          ]);

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    ranking: query,
               });
          } else {
               return res.status(404).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

saleController.rankingVentasByEntidad = async (req, res) => {
     const { sucursal, estado, financiamiento, start, end } = req.body;

     try {
          const filter = {
               sucursal_venta: {
                    $regex: ".*" + sucursal + ".*",
               },
               estatus_venta: estado,
               tipo_financiamiento: financiamiento,
               fecha_cancelacion: {
                    $gte: new Date(start),
                    $lte: new Date(end),
               },
          };
          const query = await Sale.aggregate([
               {
                    $match: filter,
               },
               {
                    $group: {
                         _id: "$entidad_bancaria",
                         qty: {
                              $sum: 1,
                         },
                    },
               },
               {
                    $sort: {
                         qty: -1,
                    },
               },
          ]);

          if (query.length > 0) {
               res.json({
                    total: query.length,
                    ranking: query,
               });
          } else {
               return res.status(404).json({
                    message: "No existen Ventas aún",
               });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({
               message: err.message,
          });
     }
};

export default saleController;
