import Anio from "../models/Anio";
import Conexos from "../models/Conexos";
import Customer from "../models/Customer";
import EstadoGPS from "../models/EstadoGPS";
import Gps from "../models/Gps";
import MarcaTasaciones from "../models/MarcaTasaciones";
import ModeloTasaciones from "../models/ModeloTasaciones";
import ProductoGps from "../models/ProductoGps";
import Seller from "../models/Seller";
import Sucursal from "../models/Sucursal";
import User from "../models/User";

const controller = {};

controller.getAllItems = async (req, res) => {
    try {
        const query = await Gps.find()
        .sort({ name: 1 })
        .populate({
            path: 'cliente',
            select: 'name document'
        })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        })
        .populate({
            path: 'modeloE',
            select: 'name avatar'
        })
        .populate({
            path: 'anioE',
            select: 'name estado'
        })
        .populate({
            path: 'vendedor',
            select: 'name document email avatar'
        })
        .populate({
            path: 'asesorConexos',
            select: 'name encargadoDe'
        })
        .populate({
            path: 'producto_gps',
            select: 'name precio codigo_interno'
        })
        .populate({
            path: 'estadoGPSE',
            select: 'name valor hex icon'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if (query.length === 0) return res.status(404).json({ message: `No existen registro gps` });
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getOneItem = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Gps.findById(itemId)
        .populate({
            path: 'cliente',
            select: 'name document cellphone email'
        })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        })
        .populate({
            path: 'modeloE',
            select: 'name avatar'
        })
        .populate({
            path: 'anioE',
            select: 'name estado'
        })
        .populate({
            path: 'vendedor',
            select: 'name document email avatar'
        })
        .populate({
            path: 'asesorConexos',
            select: 'name encargadoDe'
        })
        .populate({
            path: 'producto_gps',
            select: 'name precio codigo_interno descuento'
        })
        .populate({
            path: 'estadoGPSE',
            select: 'name valor hex icon'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if (!query) {
            return res.status(404).json({ message: "No existe registro" });
        }
        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOneItem = async (req, res) => {
    const {
        codigo_interno,
        cliente,
        sucursal,
        sucursalE,
        fecha_registro,
        mes_registro,
        serie_placa,
        nro_chasis,
        nro_motor,
        marca,
        marcaE,
        modelo,
        modeloE,
        anio,
        anioE,
        vendedor,
        asesorConexos,
        producto_gps,
        estadoGPS,
        estadoGPSE,
        fechaIngresado,
        createdBy,
        forma_pago,
        instalado
    } = req.body;
    try {
        const obj = new Gps({
            codigo_interno,
            sucursal,
            fecha_registro,
            mes_registro,
            serie_placa,
            nro_chasis,
            nro_motor,
            marca,
            modelo,
            anio,
            fechaIngresado,
            estadoGPS,
            forma_pago,
            instalado
        });

        const clienteFound = await Customer.findOne({ document: cliente });
        if (!clienteFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrado` });
        obj.cliente = clienteFound._id;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });
        obj.sucursalE = sucursalFound._id;

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaE} no encontrado` });
        obj.marcaE = marcaFound._id;

        const modeloFound = await ModeloTasaciones.findOne({ name: modeloE });
        if (!modeloFound) return res.status(404).json({ message: `Modelo ${modeloE} no encontrado` });
        obj.modeloE = modeloFound._id;

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });
        obj.anioE = anioFound._id;

        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${vendedor} no encontrado` });
        obj.vendedor = sellerFound._id;

        const asesorFound = await Conexos.findOne({ name: asesorConexos });
        if (!asesorFound) return res.status(404).json({ message: `Asesor ${asesorConexos} no encontrad@` });
        obj.asesorConexos = asesorFound._id;

        const productoFound = await ProductoGps.findOne({ codigo_interno: producto_gps });
        if (!productoFound) return res.status(404).json({ message: `Producto ${producto_gps} no encontrad@` });
        obj.producto_gps = productoFound._id;

        const estadoFound = await EstadoGPS.findOne({ name: estadoGPSE });
        if (!estadoFound) return res.status(404).json({ message: `Producto ${estadoGPSE} no encontrad@` });
        obj.estadoGPSE = estadoFound._id;

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrad@` });
        obj.createdBy = userFound._id;

        const query = await obj.save();

        if (query) res.json({ message: "Registro creado con éxito" });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateItemById = async (req, res) => {
    const {
        sucursal,
        sucursalE,
        fecha_registro,
        mes_registro,
        serie_placa,
        nro_chasis,
        nro_motor,
        marca,
        marcaE,
        modelo,
        modeloE,
        anio,
        anioE,
        vendedor,
        asesorConexos,
        producto_gps,
        estadoGPS,
        estadoGPSE,
        fechaIngresado,
        isEmitido,
        fechaEmitido,
        isReportado,
        fechaReportado,
    } = req.body;
    const { itemId } = req.params;
    let query = null;

    try {
        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrado` });

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaE} no encontrado` });

        const modeloFound = await ModeloTasaciones.findOne({ name: modeloE });
        if (!modeloFound) return res.status(404).json({ message: `Modelo ${modeloE} no encontrado` });

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Año ${anioE} no encontrado` });

        const sellerFound = await Seller.findOne({ name: vendedor });
        if (!sellerFound) return res.status(404).json({ message: `Vendedor ${vendedor} no encontrado` });

        const asesorFound = await Conexos.findOne({ name: asesorConexos });
        if (!asesorFound) return res.status(404).json({ message: `Asesor ${asesorConexos} no encontrad@` });

        const productoFound = await ProductoGps.findOne({ name: producto_gps });
        if (!productoFound) return res.status(404).json({ message: `Producto ${producto_gps} no encontrad@` });

        const estadoFound = await EstadoGPS.findOne({ name: estadoGPSE });
        if (!estadoFound) return res.status(404).json({ message: `Producto ${estadoGPSE} no encontrad@` });

        if (estadoGPSE == "INGRESADO") {
            query = await Gps.findByIdAndUpdate(itemId, {
                sucursal,
                sucursalE: sucursalFound._id,
                fecha_registro,
                mes_registro,
                serie_placa,
                nro_chasis,
                nro_motor,
                marca,
                marcaE: marcaFound._id,
                modelo,
                modeloE: modeloFound._id,
                anio,
                anioE: anioFound._id,
                vendedor: sellerFound._id,
                asesorConexos: asesorFound._id,
                producto_gps: productoFound._id,
                estadoGPS,
                estadoGPSE: estadoFound._id,
                fechaIngresado,
            });
        } else if (estadoGPSE == "EMITIDO") {
            query = await Gps.findByIdAndUpdate(itemId, {
                sucursal,
                sucursalE: sucursalFound._id,
                fecha_registro,
                mes_registro,
                serie_placa,
                nro_chasis,
                nro_motor,
                marca,
                marcaE: marcaFound._id,
                modelo,
                modeloE: modeloFound._id,
                anio,
                anioE: anioFound._id,
                vendedor: sellerFound._id,
                asesorConexos: asesorFound._id,
                producto_gps: productoFound._id,
                estadoGPS,
                estadoGPSE: estadoFound._id,
                isEmitido,
                fechaEmitido,
            });
        } else if (estadoGPSE == "REPORTADO") {
            query = await Gps.findByIdAndUpdate(itemId, {
                sucursal,
                sucursalE: sucursalFound._id,
                fecha_registro,
                mes_registro,
                serie_placa,
                nro_chasis,
                nro_motor,
                marca,
                marcaE: marcaFound._id,
                modelo,
                modeloE: modeloFound._id,
                anio,
                anioE: anioFound._id,
                vendedor: sellerFound._id,
                asesorConexos: asesorFound._id,
                producto_gps: productoFound._id,
                estadoGPS,
                estadoGPSE: estadoFound._id,
                isReportado,
                fechaReportado,
            });
        }

        if (!query) {
            return res.status(404).json({ message: `No se ha encontrado producto ${itemId}` });
        }
        res.json({ message: `Registro actualizado con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteItemById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Gps.findByIdAndDelete(itemId);

        if (!query) {
            return res.status(404).json({ message: `No se ha encontrado producto ${itemId}` });
        }
        res.json({ message: `Registro eliminado con éxito` });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getGPSBySede = async (req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const query = await Gps.find({
            sucursal: { $regex: ".*" + sucursal + ".*" },
            estadoGPS: { $regex: ".*" + estado + ".*" },
            fecha_registro: { $gte: new Date(start), $lte: new Date(end) },
        })
        .populate({
            path: 'cliente',
            select: 'name document cellphone email'
        })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        })
        .populate({
            path: 'modeloE',
            select: 'name avatar'
        })
        .populate({
            path: 'anioE',
            select: 'name estado'
        })
        .populate({
            path: 'vendedor',
            select: 'name document email avatar'
        })
        .populate({
            path: 'asesorConexos',
            select: 'name encargadoDe'
        })
        .populate({
            path: 'producto_gps',
            select: 'name precio codigo_interno'
        })
        .populate({
            path: 'estadoGPSE',
            select: 'name valor hex icon'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

controller.getGPSByCreator = async(req, res) => {
    const { estado, createdBy } = req.body;

    try {

        const userFound = await User.findOne({ username: createdBy });
        if (!userFound) return res.status(404).json({ message: `Usuario ${createdBy} no encontrado` });

        const query = await Gps.find({
            estadoGPS: { $regex: ".*" + estado + ".*" },
            createdBy: userFound._id,
        })
        .populate({
            path: 'cliente',
            select: 'name document cellphone email'
        })
        .populate({
            path: 'sucursalE',
            select: 'name'
        })
        .populate({
            path: 'marcaE',
            select: 'name avatar'
        })
        .populate({
            path: 'modeloE',
            select: 'name avatar'
        })
        .populate({
            path: 'anioE',
            select: 'name estado'
        })
        .populate({
            path: 'vendedor',
            select: 'name document email avatar'
        })
        .populate({
            path: 'asesorConexos',
            select: 'name encargadoDe'
        })
        .populate({
            path: 'producto_gps',
            select: 'name precio codigo_interno'
        })
        .populate({
            path: 'estadoGPSE',
            select: 'name valor hex icon'
        })
        .populate({
            path: 'createdBy',
            select: 'name username'
        });

        if (query.length >= 0) {
            res.json({ total: query.length, all: query });
        } else {
           return res.status(404).json({ message: `No existen soats ${estadoSoat} de ${createdBy}` });
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}

export default controller;
