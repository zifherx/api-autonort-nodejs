import Tasacion from "../models/Tasacion";
import Customer from "../models/Customer";
import User from "../models/User";
import Tecnico from "../models/Tecnico";
import AServicios from "../models/AServicios";
import Seller from "../models/Seller";
import ModeloTasaciones from "../models/ModeloTasaciones";
import Colores from "../models/Colores";
import Anio from "../models/Anio";
import Sucursal from "../models/Sucursal";
import OrigenConcesionario from "../models/OrigenConcesionario";
import MetodoAtencion from "../models/MetodoAtencion";
import StatusTasacion from "../models/StatusTasacion";

const tasacionCtrl = {};

tasacionCtrl.getAll = async (req, res) => {
    try {
        const query = await Tasacion.find()
            .sort({ fecha_operacion: -1 })
            .populate({ path: "cliente", select: "name document" })
            .populate({ path: "colorE", select: "name" })
            .populate({ path: "anioF", select: "name" })
            .populate({ path: "estadoTasacionE", select: "name" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "origenTasacion", select: "name" })
            .populate({ path: "metodoTasacion", select: "name" })
            .populate({ path: "asesor_venta", select: "name" })
            .populate({ path: "asesor_servicio", select: "name" })
            .populate({ path: "tecnico_inspector", select: "name" })
            .populate({ path: "createdBy", select: "name username" });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Tasaciones" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getOneById = async (req, res) => {
    const { tasacionId } = req.params;
    try {
        const query = await Tasacion.findById(tasacionId)
            .sort({ fecha_operacion: -1 })
            .populate({ path: "cliente", select: "name document typeDocument email cellphone representanteLegal" })
            .populate({ path: "colorE", select: "name" })
            .populate({ path: "auto", select: "name avatar marca", populate: { path: "marca", select: "avatar name" } })
            .populate({ path: "anioF", select: "name" })
            .populate({ path: "estadoTasacionE", select: "name" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "origenTasacion", select: "name" })
            .populate({ path: "metodoTasacion", select: "name" })
            .populate({ path: "asesor_venta", select: "name" })
            .populate({ path: "asesor_servicio", select: "name" })
            .populate({ path: "tecnico_inspector", select: "name" })
            .populate({ path: "createdBy", select: "name username" });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe la Tasación" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getAllByTasador = async (req, res) => {
    const { status_tasacion, createdBy } = req.body;
    try {
        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

        const query = await Tasacion.find({
            status_tasacion: { $regex: ".*" + status_tasacion + ".*" },
            createdBy: userFound._id,
        })
            .sort({ name: 1 })
            .populate({ path: "cliente", select: "name document" })
            .populate({ path: "colorE", select: "name" })
            .populate({ path: "anioF", select: "name" })
            .populate({ path: "estadoTasacionE", select: "name" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "origenTasacion", select: "name" })
            .populate({ path: "metodoTasacion", select: "name" })
            .populate({ path: "asesor_venta", select: "name" })
            .populate({ path: "asesor_servicio", select: "name" })
            .populate({ path: "tecnico_inspector", select: "name" })
            .populate({ path: "createdBy", select: "name username" });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen Tasaciones de ${createdBy}` });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getAllByDatesyEstado = async (req, res) => {
    const { estado, pendienteUsado, start, end } = req.body;
    let query = null;

    try {
        // const userFound = await User.findOne({ username: createdBy });
        // if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        if (start == "" || start == undefined || start == null) {
            query = await Tasacion.find({
                status_tasacion: estado,
                pasoUsados: pendienteUsado,
                // fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
            })
                .sort({ fecha_operacion: -1 })
                .populate({ path: "cliente", select: "name document" })
                .populate({ path: "colorE", select: "name" })
                .populate({ path: "anioF", select: "name" })
                .populate({ path: "estadoTasacionE", select: "name" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "origenTasacion", select: "name" })
                .populate({ path: "metodoTasacion", select: "name" })
                .populate({ path: "asesor_venta", select: "name" })
                .populate({ path: "asesor_servicio", select: "name" })
                .populate({ path: "tecnico_inspector", select: "name" })
                .populate({ 
                    path: 'auto',
                    select: 'marca avatar name',
                    populate: {
                        path: 'marca',
                        select: 'name avatar'
                    }
                })
                .populate({ path: "createdBy", select: "name username" });
        } else {
            query = await Tasacion.find({
                status_tasacion: estado,
                fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
            })
                .sort({ fecha_operacion: -1 })
                .populate({ path: "cliente", select: "name document" })
                .populate({ path: "colorE", select: "name" })
                .populate({ path: "anioF", select: "name" })
                .populate({ path: "estadoTasacionE", select: "name" })
                .populate({ path: "sucursalE", select: "name" })
                .populate({ path: "origenTasacion", select: "name" })
                .populate({ path: "metodoTasacion", select: "name" })
                .populate({ path: "asesor_venta", select: "name" })
                .populate({ path: "asesor_servicio", select: "name" })
                .populate({ path: "tecnico_inspector", select: "name" })
                .populate({ 
                    path: 'auto',
                    select: 'marca avatar name',
                    populate: {
                        path: 'marca',
                        select: 'name avatar'
                    }
                })
                .populate({ path: "createdBy", select: "name username" });
        }

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen Tasaciones ${estado}` });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.createOne = async (req, res) => {
    const {
        codigo_interno,
        cliente,
        marca,
        modelo,
        version,
        auto,
        placa,
        colorE,
        anioF,
        kilometraje,
        tipo_transmision,
        num_propietarios,
        precio,
        observacion,
        empresa,
        sucursal,
        sucursalE,
        origenTasacion,
        metodoTasacion,
        fecha_operacion,
        fechaIngresado,
        comentario,
        status_tasacion,
        estadoTasacionE,
        ingresoPor,
        asesor_venta,
        asesor_servicio,
        inspeccion_tecnica,
        tecnico_inspector,
        createdBy,
    } = req.body;
    try {
        const obj = new Tasacion({
            codigo_interno,
            marca,
            modelo,
            version,
            placa,
            kilometraje,
            tipo_transmision,
            num_propietarios,
            precio,
            observacion,
            empresa,
            sucursal,
            fecha_operacion,
            fechaIngresado,
            comentario,
            status_tasacion,
            ingresoPor,
            inspeccion_tecnica,
        });

        const customerFound = await Customer.findOne({ name: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });
        obj.cliente = customerFound._id;

        const colorFound = await Colores.findOne({ name: colorE });
        if (!colorFound) return res.status(404).json({ message: `Color ${colorE} no encontrado` });
        obj.colorE = colorFound._id;

        const anioFound = await Anio.findOne({ name: anioF });
        if (!anioFound) return res.status(404).json({ message: `Año ${anioF} no encontrado` });
        obj.anioF = anioFound._id;

        const autoFound = await ModeloTasaciones.findOne({ name: auto });
        if (!autoFound) return res.status(404).json({ message: `Modelo ${auto} no encontrado` });
        obj.auto = autoFound._id;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });
        obj.sucursalE = sucursalFound._id;

        const origenFound = await OrigenConcesionario.findOne({ name: origenTasacion });
        if (!origenFound) return res.status(404).json({ message: `Origen ${origenTasacion} no encontrado` });
        obj.origenTasacion = origenFound._id;

        const metodoFound = await MetodoAtencion.findOne({ name: metodoTasacion });
        if (!metodoFound) return res.status(404).json({ message: `Método ${metodoTasacion} no encontrado` });
        obj.metodoTasacion = metodoFound._id;

        const estadoFound = await StatusTasacion.findOne({ name: estadoTasacionE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoTasacionE} no encontrado` });
        obj.estadoTasacionE = estadoFound._id;

        if (asesor_venta) {
            const sellerFound = await Seller.findOne({ name: asesor_venta });
            if (!sellerFound) return res.status(404).json({ message: `Asesor venta ${asesor_venta} no encontrado` });
            obj.asesor_venta = sellerFound._id;
        } else {
            obj.asesor_venta = null;
        }

        if (asesor_servicio) {
            const servicesFound = await AServicios.findOne({ name: asesor_servicio });
            if (!servicesFound) return res.status(404).json({ message: `Asesor servicio ${asesor_servicio} no encontrado` });
            obj.asesor_servicio = servicesFound._id;
        } else {
            obj.asesor_servicio = null;
        }

        if (tecnico_inspector) {
            const tecnicoFound = await Tecnico.findOne({ name: tecnico_inspector });
            if (!tecnicoFound) return res.status(404).json({ message: `Técnico ${tecnico_inspector} no encontrado` });
            obj.tecnico_inspector = tecnicoFound._id;
        } else {
            obj.tecnico_inspector = null;
        }

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        obj.createdBy = userFound._id;

        const query = await obj.save();

        if (query) res.json({ message: "Tasación creada con éxito" });
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.updatedOneById = async (req, res) => {
    const { tasacionId } = req.params;
    const {
        status_tasacion,
        estadoTasacionE,
        IsProceso,
        fechaProceso,
        isHot,
        fechaHot,
        IsRechazado,
        fechaRechazado,
        IsCerrado,
        fechaCerrado,
        comentario,
        motivo,
        nro_serie_nuevo_vehiculo,
        modelo_nuevo_vehiculo,
    } = req.body;
    let query = null;

    try {
        const estadoFound = await StatusTasacion.findOne({ name: estadoTasacionE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoTasacionE} no encontrado` });

        if (estadoTasacionE == "EN PROCESO") {
            query = await Tasacion.findByIdAndUpdate(tasacionId, {
                status_tasacion,
                estadoTasacionE: estadoFound._id,
                IsProceso,
                fechaProceso,
                comentario,
            });
        } else if (estadoTasacionE == "HOT") {
            query = await Tasacion.findByIdAndUpdate(tasacionId, {
                status_tasacion,
                estadoTasacionE: estadoFound._id,
                isHot,
                fechaHot,
                comentario,
            });
        } else if (estadoTasacionE == "RECHAZADO") {
            query = await Tasacion.findByIdAndUpdate(tasacionId, {
                status_tasacion,
                estadoTasacionE: estadoFound._id,
                IsRechazado,
                fechaRechazado,
                motivo,
            });
        } else if (estadoTasacionE == "CERRADO") {
            query = await Tasacion.findByIdAndUpdate(tasacionId, {
                status_tasacion,
                estadoTasacionE: estadoFound._id,
                IsCerrado,
                fechaCerrado,
                comentario,
                nro_serie_nuevo_vehiculo,
                modelo_nuevo_vehiculo,
            });
        }

        if (query) {
            res.json({ message: "Tasación actualizada con éxito" });
        } else {
            return res.status(404).json({ messsage: "No existe tasación a actualizar" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.deleteOneById = async (req, res) => {
    const { tasacionId } = req.params;
    try {
        const query = await Tasacion.findByIdAndDelete(tasacionId);
        if (query) {
            res.json({ message: "Tasación eliminada con éxito" });
        } else {
            return res.status(404).json({ message: "No existe la tasación a eliminar" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getBySucursalFecha = async (req, res) => {
    const { sucursal, start, end } = req.body;
    // console.log(req.body);
    try {
        const query = await Tasacion.find({
            sucursal: { $regex: ".*" + sucursal + ".*" },
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        })
            .sort({ fecha_operacion: -1 })
            .populate({ path: "cliente", select: "name document" })
            .populate({ path: "colorE", select: "name" })
            .populate({ path: "anioF", select: "name" })
            .populate({ path: "estadoTasacionE", select: "name" })
            .populate({ path: "sucursalE", select: "name" })
            .populate({ path: "origenTasacion", select: "name" })
            .populate({ path: "metodoTasacion", select: "name" })
            .populate({ path: "asesor_venta", select: "name" })
            .populate({ path: "asesor_servicio", select: "name" })
            .populate({ path: "tecnico_inspector", select: "name" })
            .populate({ path: "createdBy", select: "name username" });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getRankingByStatus = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$status_tasacion",
                    num_tasaciones: { $sum: 1 },
                },
            },
            {
                $sort: { num_tasaciones: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Tasaciones aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getCountByMetodo = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$metodo",
                    num_tasaciones: { $sum: 1 },
                },
            },
            {
                $sort: { num_tasaciones: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Tasaciones aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getCountByOrigen = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$origen_operacion",
                    num_tasaciones: { $sum: 1 },
                },
            },
            {
                $sort: { num_tasaciones: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Tasaciones aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getRankingByIngreso = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$ingresoPor",
                    num_tasaciones: { $sum: 1 },
                },
            },
            {
                $sort: { num_tasaciones: -1 },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Tasaciones aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getRankingByVendedor = async (req, res) => {
    const { sucursal, estado, ingreso, start, end } = req.body;

    let query = null;

    try {
        const filtro = {
            sucursal,
            ingresoPor: ingreso,
            status_tasacion: estado,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        if (filtro.ingresoPor == "VENTAS") {
            query = await Tasacion.aggregate([
                {
                    $match: filtro,
                },
                {
                    $group: {
                        _id: "$asesor_venta",
                        num_tasaciones: { $sum: 1 },
                    },
                },
                {
                    $sort: { num_tasaciones: -1 },
                },
            ]);
        } else {
            query = await Tasacion.aggregate([
                {
                    $match: filtro,
                },
                {
                    $group: {
                        _id: "$asesor_servicio",
                        num_tasaciones: { $sum: 1 },
                    },
                },
                {
                    $sort: { num_tasaciones: -1 },
                },
            ]);
        }

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: "No existen Tasaciones aún" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getTasacionesBySeller = async (req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = {
            asesor_venta: sellerFound._id,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$status_tasacion",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna tasación" });
        }
    } catch (error) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getTasacionesByAdvisor = async (req, res) => {
    const { servicios, start, end } = req.body;

    try {
        const advisorFound = await AServicios.findOne({ name: servicios });
        if (!advisorFound) return res.status(404).json({ message: "No existe el asesor de servicios" });

        const filtro = {
            asesor_servicio: advisorFound._id,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$status_tasacion",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna tasación" });
        }
    } catch (error) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getVehiclesByVentas = async (req, res) => {
    const { asesor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: asesor });
        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        let filtro = {
            asesor_venta: sellerFound._id,
            status_tasacion: estado,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$modelo",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

tasacionCtrl.getVehiclesByServicios = async (req, res) => {
    const { asesor, estado, start, end } = req.body;

    try {
        const advisorFound = await AServicios.findOne({ name: asesor });
        if (!advisorFound) return res.status(404).json({ message: "No existe el asesor de servicios" });

        let filtro = {
            asesor_servicio: advisorFound._id,
            status_tasacion: estado,
            fecha_operacion: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Tasacion.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$modelo",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no ingresó ninguna solicitud" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

//Nuevos
tasacionCtrl.getCounterByEstado = async ( req, res ) => {
    const { estado } = req.body;

    try {
        const query = await Tasacion.find({status_tasacion: estado}).countDocuments();

        if(query >= 0) res.json({total: query});
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}

export default tasacionCtrl;
