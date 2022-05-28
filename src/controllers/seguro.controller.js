import Customer from "../models/Customer";
import Seller from "../models/Seller";
import Seguro from "../models/Seguro";
import Sucursal from '../models/Sucursal';
import User from "../models/User";
import EstadoSeguro from "../models/EstadoSeguro";
import Vehicle from "../models/Vehicle";
import Anio from "../models/Anio";
import Conexos from "../models/Conexos";
import Aseguradora from "../models/Aseguradora";
import TipoUso from '../models/TipoUso';

const seguroController = {};

seguroController.getAll = async (req, res) => {
    try {
        const query = await Seguro.find()
            .sort({ fechaRegistro: -1 })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "vendedor",
                select: "name document avatar sucursalE marcaE",
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
            })
            .populate({
                path: "createdBy",
                select: "name",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen Seguros" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getOneById = async (req, res) => {
    const { seguroId } = req.params;
    try {
        const query = await Seguro.findById(seguroId)
            .populate({
                path: "cliente",
                select: "name document cellphone email typeDocument",
            })
            .populate({
                path: "vendedor",
                select: "name document avatar sucursalE",
                populate:{
                    path: 'sucursalE',
                    select: 'name'
                }
            })
            .populate({
                path: "vehicleE",
                select: "model version cod_tdp",
                populate: {
                    path: "model",
                    select: "name avatar marca",
                    populate: {
                        path: 'marca',
                        select: 'name avatar'
                    }
                },
            })
            .populate({
                path: "anioE",
                select: "name",
            })
            .populate({
                path: "sucursalE",
                select: "name",
            })
            .populate({
                path: "aseguradoraE",
                select: "name",
            })
            .populate({
                path: "estadoSeguroE",
                select: "name",
            })
            .populate({
                path: "asesorConexosE",
                select: "name encargadoDe areaE",
                populate: {
                    path: 'areaE',
                    select: 'name'
                }
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query) {
            res.json({ one: query });
        } else {
            return res.status(404).json({ message: "No existe el Seguro" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.createOne = async (req, res) => {
    const {
        cliente,//---
        company,
        sucursal,
        sucursalE,
        status,
        estadoSeguroE,
        tipo_venta,
        area_venta,
        fecha_registro,
        fechaRegistro,
        forma_pago,
        cuotas,
        poliza,//---
        vendedor,//---
        marca,
        modelo,
        version,
        vehicleE,
        anioE,
        placa,
        uso,
        tipoUsoE,
        chasis,
        motor,//---
        asesorConexosE,
        endoso,
        entidad,
        inicio_vigencia,
        fin_vigencia,
        aseguradoraE,
        suma_asegurada,//---
        createdBy,
    } = req.body;

    try {
        const newObj = new Seguro({
            company,
            sucursal,
            status,
            forma_pago,
            cuotas,
            fecha_registro,
            fechaRegistro,
            tipo_venta,
            area_venta,
            poliza,
            placa,
            chasis,
            motor,
            marca,
            modelo,
            version,
            uso,
            endoso,
            entidad,
            inicio_vigencia,
            fin_vigencia,
            suma_asegurada,
        });

        const foundSucursal = await Sucursal.findOne({ name: sucursalE });
        if (!foundSucursal) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });
        newObj.sucursalE = foundSucursal._id;
        
        const foundEstado = await EstadoSeguro.findOne({ name: estadoSeguroE });
        if (!foundEstado) return res.status(404).json({ message: `Estado ${estadoSeguroE} no encontrado` });
        newObj.estadoSeguroE = foundEstado._id;

        const foundCliente = await Customer.findOne({ name: cliente });
        if (!foundCliente) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });
        newObj.cliente = foundCliente._id;

        const foundSeller = await Seller.findOne({ name: vendedor });
        if (!foundSeller) return res.status(404).json({ message: `Vendedor ${vendedor} no encontrado` });
        newObj.vendedor = foundSeller._id;

        const foundVehicle = await Vehicle.findOne({ cod_tdp: vehicleE });
        if (!foundVehicle) return res.status(404).json({ message: `Vehículo ${vehicleE} no encontrado` });
        newObj.vehicleE = foundVehicle._id;

        const foundTUso = await TipoUso.findOne({ name: tipoUsoE });
        if (!foundTUso) return res.status(404).json({ message: `Tipo uso ${tipoUsoE} no encontrado` });
        newObj.tipoUsoE = foundTUso._id;

        const foundAnio = await Anio.findOne({ name: anioE });
        if (!foundAnio) return res.status(404).json({ message: `Año ${anioE} no encontrado` });
        newObj.anioE = foundAnio._id;

        const foundConexos = await Conexos.findOne({ name: asesorConexosE });
        if (!foundConexos) return res.status(404).json({ message: `Asesor conexos ${asesorConexosE} no encontrado` });
        newObj.asesorConexosE = foundConexos._id;

        const foundAseguradora = await Aseguradora.findOne({ name: aseguradoraE });
        if (!foundAseguradora) return res.status(404).json({ message: `Aseguradora ${aseguradoraE} no encontrado` });
        newObj.aseguradoraE = foundAseguradora._id;

        const foundEmployee = await User.findOne({ username: createdBy });
        if (!foundEmployee) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });
        newObj.createdBy = foundEmployee._id;

        const query = await newObj.save();

        if (query) {
            res.json({ message: "Seguro creado con éxito" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.updateOneById = async (req, res) => {
    const { seguroId } = req.params;
    const { status, estadoSeguroE, isProceso, fechaProceso, isEmitido, fechaEmision } = req.body;
    let query = null;

    try {
        const foundEstado = await EstadoSeguro.findOne({ name: estadoSeguroE });
        if (!foundEstado) return res.status(404).json({ message: `Estado ${estadoSeguroE} no encontrado` });

        if(estadoSeguroE == 'EN PROCESO'){
            query = await Seguro.findByIdAndUpdate(seguroId,{
                status,
                estadoSeguroE: foundEstado._id,
                isProceso,
                fechaProceso
            });
        }else if(estadoSeguroE == 'EMITIDO'){
            query = await Seguro.findByIdAndUpdate(seguroId,{
                status,
                estadoSeguroE: foundEstado._id,
                isEmitido,
                fechaEmision,
            });
        }

        if (query) {
            res.json({ message: "Seguro actualizado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe seguro a actualizar" });
        }
    } catch (err) {
        console.error(err);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.deleteOneById = async (req, res) => {
    const { seguroId } = req.params;

    try {
        const query = await Seguro.findByIdAndDelete(seguroId);

        if (query) {
            res.json({ message: "Seguro eliminado con éxito" });
        } else {
            return res.status(404).json({ message: "No existe seguro a eliminar" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getRankingByStatus = async (req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: "$status",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getRankingByTipo = async (req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: "$tipo_venta",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getRankingByVehicle = async (req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
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
            return res.status(201).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getRankingBySeller = async (req, res) => {
    const { sucursal, status, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        status: status,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: "$vendedor",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getRankingByAseguradora = async (req, res) => {
    const { sucursal, start, end } = req.body;

    let filtro = {
        sucursal: sucursal,
        fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
    };

    try {
        const query = await Seguro.aggregate([
            { $match: filtro },
            {
                $group: {
                    _id: "$aseguradora",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "No existen solicitudes" });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getSegurosByVendedor = async (req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        const filtro = {
            vendedor: sellerFound._id,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Seguro.aggregate([
            {
                $match: filtro,
            },
            {
                $group: {
                    _id: "$status",
                    qty: { $sum: 1 },
                },
            },
        ]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: "Vendedor no cuenta con seguros" });
        }
    } catch (err) {
        console.log(err.response);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getSegurosByModelo = async (req, res) => {
    const { vendedor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: "No existe el vendedor" });

        let filtro = {
            vendedor: sellerFound._id,
            status: estado,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
        };

        const query = await Seguro.aggregate([
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
            return res.status(201).json({ message: "Vendedor no cuenta con solicitudes" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getBySucursalFecha = async (req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const query = await Seguro.find({
            sucursal: { $regex: ".*" + sucursal + ".*" },
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end) },
        })
            .sort({ fechaRegistro: -1 })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "estadoSeguroE",
                select: "name",
            })
            .populate({
                path: "vendedor",
                select: "name document",
            })
            .populate({
                path: "asesorConexosE",
                select: "name email",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getSegurosByCreator = async (req, res) => {
    const { status,createdBy } = req.body;

    try {
        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

        const query = await Seguro.find({
            status: {$regex: '.*' + status + '.*'},
            createdBy: userFound._id,
        })
            .sort({ fechaRegistro: -1 })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "estadoSeguroE",
                select: "name",
            })
            .populate({
                path: "vendedor",
                select: "name document",
            })
            .populate({
                path: "asesorConexosE",
                select: "name email",
            })
            .populate({
                path: "aseguradoraE",
                select: "name",
            })
            .populate({
                path: "vehicleE",
                select: "model",
                populate: {
                    path: "model",
                    select: "name avatar marca",
                    populate: {
                        path: 'marca',
                        select: 'name avatar'
                    }
                },
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: `No existen seguros ${status} de ${createdBy}`  });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

seguroController.getSegurosByEstado = async (req, res) => {
    const { estado, start, end } = req.body;
    // console.log(req.body);

    try {
        const estadoFound = await EstadoSeguro.findOne({ name: estado });
        // console.log(estadoFound);
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estado} no encontrado` });

        const query = await Seguro.find({
            estadoSeguroE: estadoFound._id,
            fechaRegistro: { $gte: new Date(start), $lte: new Date(end)}
        })
            .sort({ fechaRegistro: -1 })
            .populate({
                path: "cliente",
                select: "name document",
            })
            .populate({
                path: "estadoSeguroE",
                select: "name",
            })
            .populate({
                path: "vendedor",
                select: "name document",
            })
            .populate({
                path: "asesorConexosE",
                select: "name email",
            })
            .populate({
                path: "createdBy",
                select: "name username",
            });

        if (query.length > 0) {
            res.json({ total: query.length, all: query });
        } else {
            return res.status(404).json({ message: "No existen seguros" });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
};

export default seguroController;
