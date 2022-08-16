import Record from "../models/Record";
import Sale from "../models/Sale";
import StatusAAP from "../models/StatusAAP";
import StatusFile from "../models/StatusFile";
import StatusRP from "../models/StatusRP";
import Sucursal from "../models/Sucursal";
import User from "../models/User";

const recordController = {};

recordController.createOne = async (req, res) => {
     const {
          codigoInterno,
          sucursal_tramite,
          sucursalE,
          statusFile,
          estadoFileE,
          status_tarjeta,
          estadoRPE,
          status_placa,
          estadoAAPE,
          fecha_recepcion,
          hora_recepcion,
          observaciones_file,
          sales,
          fecha_ingreso_file,
          hora_ingreso_file,
          num_titulo,
          codigo_verificacion,
          observaciones_registros,
          motivo_observacion,
          num_placa,
          fecha_entrega_file_recepcion,
          fecha_tramite_placa,
          fecha_entrega_placa_recepcion,
          observaciones_aap,
          empleado,
     } = req.body;

     try {
          const nuevoInmatriculado = new Record({
               codigoInterno,
               sucursal_tramite,
               fecha_recepcion,
               hora_recepcion,
               statusFile,
               observaciones_file,
               fecha_ingreso_file,
               hora_ingreso_file,
               num_titulo,
               codigo_verificacion,
               observaciones_registros,
               motivo_observacion,
               status_tarjeta,
               num_placa,
               fecha_entrega_file_recepcion,
               fecha_tramite_placa,
               status_placa,
               fecha_entrega_placa_recepcion,
               observaciones_aap,
          });

          // Expediente
          const salesFound = await Sale.findOne({ nro_comprobante: sales });
          if (!salesFound) return res.status(404).json({ message: `Expediente ${sales} no tiene comprobante` });
          const salesChanged = await Sale.findByIdAndUpdate(salesFound._id, { pasoaTramite: 1 });
          nuevoInmatriculado.sales = salesFound._id;

          // Sucursal
          const sucursalFound = await Sucursal.findOne({ name: sucursalE });
          if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });
          nuevoInmatriculado.sucursalE = sucursalFound._id;

          // Estado File
          const estadoFileFound = await StatusFile.findOne({ name: estadoFileE });
          if (!estadoFileFound) return res.status(404).json({ message: `Estado File ${estadoFileE} no encontrado` });
          nuevoInmatriculado.estadoFileE = estadoFileFound._id;

          // Estado RP
          if (estadoRPE == null || estadoRPE == undefined || estadoRPE == "") {
               nuevoInmatriculado.estadoRPE = null;
          } else {
               const estadoRPFound = await StatusRP.findOne({ name: estadoRPE });
               if (!estadoRPFound) return res.status(404).json({ message: `Estado RP ${estadoRPE} no encontrado` });
               nuevoInmatriculado.estadoRPE = estadoRPFound._id;
          }

          // Estado AAP
          if (estadoAAPE == null || estadoAAPE == undefined || estadoAAPE == "") {
               nuevoInmatriculado.estadoAAPE = null;
          } else {
               const estadoAAPFound = await StatusAAP.findOne({ name: estadoAAPE });
               if (!estadoAAPFound) return res.status(404).json({ message: `Estado AAP ${estadoAAPE} no encontrado` });
               nuevoInmatriculado.estadoAAPE = estadoAAPFound._id;
          }

          // Empleado
          const foundEmployee = await User.findOne({ username: empleado });
          if (!foundEmployee) return res.status(404).json({ message: `Colaborador ${empleado} no encontrado` });
          nuevoInmatriculado.empleado = foundEmployee._id;

          const query = await nuevoInmatriculado.save();

          if (query) {
               res.json({ message: "Trámite creado con éxito" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.getAll = async (req, res) => {
     try {
          const query = await Record.find()
               .sort({ fecha_recepcion: -1 })
               .populate({
                    path: "sucursalE",
                    select: "name",
               })
               .populate({
                    path: "estadoFileE",
                    select: "name",
               })
               .populate({
                    path: "estadoRPE",
                    select: "name",
               })
               .populate({
                    path: "estadoAAPE",
                    select: "name",
               })
               .populate({
                    path: "sales",
                    select: "auto vendedor cliente",
                    populate: [
                         {
                              path: "auto",
                              select: "cod_tdp version",
                         },
                         {
                              path: "vendedor",
                              select: "name document",
                         },
                         {
                              path: "cliente",
                              select: "name document",
                         },
                    ],
               })
               .populate({
                    path: "empleado",
                    select: "name username",
               });

          if (query.length > 0) {
               res.json({ total: query.length, all: query });
          } else {
               return res.status(404).json({ message: "No existen Trámites" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.getOneById = async (req, res) => {
     const { recordId } = req.params;

     try {
          const query = await Record.findById(recordId)
               .populate({
                    path: "sucursalE",
                    select: "name",
               })
               .populate({
                    path: "estadoFileE",
                    select: "name",
               })
               .populate({
                    path: "estadoRPE",
                    select: "name",
               })
               .populate({
                    path: "estadoAAPE",
                    select: "name",
               })
               .populate({
                    path: "sales",
                    select: "auto vendedor cliente fecha_cancelacion sucursalE sucursal_venta serie_tdp nro_comprobante",
                    populate: [
                         {
                              path: "auto",
                              select: "cod_tdp version model",
                              populate: {
                                   path: "model",
                                   select: "name avatar",
                              },
                         },
                         {
                              path: "vendedor",
                              select: "name document",
                         },
                         {
                              path: "cliente",
                              select: "name document",
                         },
                         {
                              path: "sucursalE",
                              select: "name",
                         },
                    ],
               })
               .populate({
                    path: "empleado",
                    select: "name username",
               });

          if (query) {
               res.json({ one: query });
          } else {
               return res.status(404).json({ message: "No existe el Trámite" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.getAllBySucursal = async (req, res) => {
     const { sucursalE, start, end } = req.body;
     let query = null;

     try {
          const sucursalFound = await Sucursal.find({ name: {$in: sucursalE} });
          // if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrada` });

          if (start == null || start == undefined || start == "") {
               query = await Record.find({
                    $or: [
                         { sucursal_tramite: {$in: sucursalE }},
                         { sucursalE: {$in: sucursalFound.map(a => a._id)} },
                         { sucursal_tramite: { $regex: ".*" + sucursalE + ".*" } }
                    ],
               })
                    .sort({ fecha_recepcion: -1 })
                    .populate({
                         path: "sucursalE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoFileE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoRPE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoAAPE",
                         select: "name",
                    })
                    .populate({
                         path: "sales",
                         select: "auto vendedor cliente serie_tdp",
                         populate: [
                              {
                                   path: "auto",
                                   select: "cod_tdp version model",
                                   populate: {
                                        path: "model",
                                        select: "name avatar",
                                   },
                              },
                              {
                                   path: "vendedor",
                                   select: "name document avatar",
                              },
                              {
                                   path: "cliente",
                                   select: "name document",
                              },
                         ],
                    })
                    .populate({
                         path: "empleado",
                         select: "name username",
                    });
          } else {
               query = await Record.find({
                    sucursal_tramite: { $regex: ".*" + sucursalE + ".*" },
                    fecha_recepcion: { $gte: new Date(start), $lte: new Date(end) },
               })
                    .sort({ fecha_recepcion: -1 })
                    .populate({
                         path: "sucursalE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoFileE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoRPE",
                         select: "name",
                    })
                    .populate({
                         path: "estadoAAPE",
                         select: "name",
                    })
                    .populate({
                         path: "sales",
                         select: "auto vendedor cliente serie_tdp",
                         populate: [
                              {
                                   path: "auto",
                                   select: "cod_tdp version model",
                                   populate: {
                                        path: "model",
                                        select: "name avatar",
                                   },
                              },
                              {
                                   path: "vendedor",
                                   select: "name document avatar",
                              },
                              {
                                   path: "cliente",
                                   select: "name document",
                              },
                         ],
                    })
                    .populate({
                         path: "empleado",
                         select: "name username",
                    });
          }

          if (query.length > 0) {
               res.json({ total: query.length, all: query });
          } else {
               return res.status(404).json({ message: "No existen Trámites" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.updateOneById = async (req, res) => {
     const { recordId } = req.params;
     const {
          statusFile,
          estadoFileE,
          observaciones_file,
          isPendienteFirma,
          fechaPendienteFirma,
          isFirmado,
          fechaFirmado,
          isLegalizado,
          fechaLegalizado,
          isFinalizado,
          fechaFinalizado,
          fecha_ingreso_file,
          hora_ingreso_file,
          num_titulo,
          codigo_verificacion,
          observaciones_registros,
          motivo_observacion,
          num_placa,
          status_tarjeta,
          estadoRPE,
          fecha_entrega_file_recepcion,
          fecha_tramite_placa,
          status_placa,
          estadoAAPE,
          fecha_entrega_placa_recepcion,
     } = req.body;

     let estadoRPNull = null;
     let estadoAAPNull = null;
     let query = null;

     try {
          const estadoFileFound = await StatusFile.findOne({ name: estadoFileE });
          if (!estadoFileFound) return res.status(404).json({ message: `Estado File ${estadoFileE} no encontrado` });

          if (estadoRPE == null || estadoRPE == undefined || estadoRPE == "") {
               estadoRPNull = null;
          } else {
               const estadoRPFound = await StatusRP.findOne({ name: estadoRPE });
               if (!estadoRPFound) return res.status(404).json({ message: `Estado RP ${estadoRPE} no encontrado` });
               estadoRPNull = estadoRPFound._id;
          }

          if (estadoAAPE == null || estadoAAPE == undefined || estadoAAPE == "") {
               estadoAAPNull = null;
          } else {
               const estadoAAPFound = await StatusAAP.findOne({ name: estadoAAPE });
               if (!estadoAAPFound) return res.status(404).json({ message: `Estado AAP ${estadoAAPE} no encontrado` });
               estadoAAPNull = estadoAAPFound._id;
          }

          if (estadoFileE == "Pendiente de Firma") {
               query = await Record.findByIdAndUpdate(recordId, {
                    statusFile,
                    estadoFileE: estadoFileFound._id,
                    observaciones_file,
                    isPendienteFirma,
                    fechaPendienteFirma,
                    fecha_ingreso_file,
                    hora_ingreso_file,
                    num_titulo,
                    codigo_verificacion,
                    observaciones_registros,
                    motivo_observacion,
                    num_placa,
                    status_tarjeta,
                    estadoRPE: estadoRPNull,
                    fecha_entrega_file_recepcion,
                    fecha_tramite_placa,
                    status_placa,
                    estadoAAPE: estadoAAPNull,
                    fecha_entrega_placa_recepcion,
               });
          } else if (estadoFileE == "Firmado") {
               query = await Record.findByIdAndUpdate(recordId, {
                    statusFile,
                    estadoFileE: estadoFileFound._id,
                    observaciones_file,
                    isFirmado,
                    fechaFirmado,
                    fecha_ingreso_file,
                    hora_ingreso_file,
                    num_titulo,
                    codigo_verificacion,
                    observaciones_registros,
                    motivo_observacion,
                    num_placa,
                    status_tarjeta,
                    estadoRPE: estadoRPNull,
                    fecha_entrega_file_recepcion,
                    fecha_tramite_placa,
                    status_placa,
                    estadoAAP: estadoAAPNull,
                    fecha_entrega_placa_recepcion,
               });
          } else if (estadoFileE == "Legalizado") {
               query = await Record.findByIdAndUpdate(recordId, {
                    statusFile,
                    estadoFileE: estadoFileFound._id,
                    observaciones_file,
                    isLegalizado,
                    fechaLegalizado,
                    fecha_ingreso_file,
                    hora_ingreso_file,
                    num_titulo,
                    codigo_verificacion,
                    observaciones_registros,
                    motivo_observacion,
                    num_placa,
                    status_tarjeta,
                    estadoRPE: estadoRPNull,
                    fecha_entrega_file_recepcion,
                    fecha_tramite_placa,
                    status_placa,
                    estadoAAP: estadoAAPNull,
                    fecha_entrega_placa_recepcion,
               });
          } else if (estadoFileE == "Finalizado") {
               query = await Record.findByIdAndUpdate(recordId, {
                    statusFile,
                    estadoFileE: estadoFileFound._id,
                    observaciones_file,
                    isFinalizado,
                    fechaFinalizado,
                    fecha_ingreso_file,
                    hora_ingreso_file,
                    num_titulo,
                    codigo_verificacion,
                    observaciones_registros,
                    motivo_observacion,
                    num_placa,
                    status_tarjeta,
                    estadoRPE: estadoRPNull,
                    fecha_entrega_file_recepcion,
                    fecha_tramite_placa,
                    status_placa,
                    estadoAAP: estadoAAPNull,
                    fecha_entrega_placa_recepcion,
               });
          }

          if (query) {
               res.json({ message: "Trámite actualizado con éxito" });
          } else {
               return res.status(404).json({ message: "No existe trámite a actualizar" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.deleteOneById = async (req, res) => {
     const { recordId } = req.params;

     try {
          const query = await Record.findByIdAndDelete(recordId);

          if (query) {
               res.json({ message: "Inmatriculación eliminada con éxito" });
          } else {
               return res.status(404).json({ message: "No existe Inmatriculación a eliminar" });
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.getAllBySeller = async (req, res) => {
     const { seller, start, end } = req.body;

     try {
          const query = await Record.find({
               fecha_recepcion: { $gte: new Date(start), $lte: new Date(end) },
          }).populate({
               path: "sales",
               select: "vendedor cliente auto serie_tdp ubicacion_vehiculo ubicacionVehiculoE",
               populate: [
                    {
                         path: "cliente",
                         select: "name document",
                    },
                    {
                         path: "auto",
                         select: "cod_tdp model version",
                         populate: {
                              path: "model",
                              select: "name avatar marca",
                              populate: {
                                   path: "marca",
                                   select: "name avatar",
                              },
                         },
                    },
                    {
                         path: "vendedor",
                         select: "name",
                         match: {
                              name: seller,
                         },
                    },
                    {
                         path: "ubicacionVehiculoE",
                         select: "name",
                    },
               ],
          });

          let obj = query.filter((b) => b.sales.vendedor);

          if (obj.length > 0) {
               res.json({ total: obj.length, all: obj });
          }else{
               return res.status(404).json({message: `Asesor ${seller} no cuenta con trámites`});
          }
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

recordController.countAllByStatus = async (req, res) => {
     const { estado, sucursalE, start, end } = req.body;

     try {
          const query = await Record.find({
               statusFile: { $regex: '.*' + estado + '.*'},
               sucursal_tramite: { $regex: ".*" + sucursalE + ".*" },
               fecha_recepcion: { $gte: new Date(start), $lte: new Date(end) },
          }).countDocuments();

          if (query >= 0) res.json({ total: query });
     } catch (err) {
          console.log(err);
          return res.status(503).json({ message: err.message });
     }
};

export default recordController;
