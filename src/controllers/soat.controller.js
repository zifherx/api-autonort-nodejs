import Soat from "../models/Soat";
import Customer from "../models/Customer";
import Sucursal from "../models/Sucursal";
import MarcaTasaciones from "../models/MarcaTasaciones";
import ModeloTasaciones from "../models/ModeloTasaciones";
import Anio from "../models/Anio";
import TipoUso from "../models/TipoUso";
import TipoSoat from "../models/TipoSoat";
import Conexos from "../models/Conexos";
import EstadoSoat from "../models/EstadoSoat";

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const query = await Soat.find().sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen soats" });
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
        const query = await Soat.findById(itemId);
        if (!query) {
            return res.status(404).json({ message: `No existe soat ${itemId}` });
        }
        res.json({ one: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.getAllByActivo = async (req, res) => {
    try {
        const query = await Soat.find({ estado: true }).sort({ name: 1 });
        if (query.length === 0) {
            return res.status(404).json({ message: "No existen soats activos" });
        }
        res.json({ total: query.length, all: query });
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.createOne = async (req, res) => {
    const {
        codigo_interno,
        cliente,
        fecha_emision,
        anio_emision,
        mes_emision,
        nro_formulario,
        sucursal,
        sucursalE,
        placa,
        marca,
        marcaE,
        modelo,
        modeloE,
        anioE,
        uso,
        usoE,
        tipoSoat,
        tipoSoatE,
        asesorConexos,
        inicio_vigencia,
        fin_vigencia,
        precio,
        estadoSoat,
        estadoSoatE,
        fechaIngresado,
    } = req.body;
    try {
        const obj = new Soat({
            codigo_interno,
            fecha_emision,
            anio_emision,
            mes_emision,
            nro_formulario,
            sucursal,
            placa,
            marca,
            modelo,
            uso,
            tipoSoat,
            inicio_vigencia,
            fin_vigencia,
            precio,
            estadoSoat,
            fechaIngresado,
        });

        const customerFound = await Customer.findOne({ name: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrad@` });
        obj.customer = customerFound._id;

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrad@` });
        obj.sucursalE = sucursalFound._id;

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaE} no encontrad@` });
        obj.marcaE = marcaFound._id;

        const modeloFound = await ModeloTasaciones.findOne({ name: modeloE });
        if (!modeloFound) return res.status(404).json({ message: `Modelo ${modeloE} no encontrad@` });
        obj.modeloE = modeloFound._id;

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Modelo ${anioE} no encontrad@` });
        obj.anioE = anioFound._id;

        const usoFound = await TipoUso.findOne({ name: usoE });
        if (!usoFound) return res.status(404).json({ message: `Tipo de uso ${usoE} no encontrad@` });
        obj.usoE = usoFound._id;

        const tipoSoatFound = await TipoSoat.findOne({ name: tipoSoatE });
        if (!tipoSoatFound) return res.status(404).json({ message: `Tipo Soat ${tipoSoatE} no encontrad@` });
        obj.tipoSoatE = tipoSoatFound._id;

        const asesorFound = await Conexos.findOne({ name: asesorConexos });
        if (!asesorFound) return res.status(404).json({ message: `Asesor ${asesorConexos} no encontrad@` });
        obj.asesorConexos = asesorFound._id;

        const estadoFound = await EstadoSoat.findOne({ name: estadoSoatE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSoatE} no encontrad@` });
        obj.estadoSoatE = estadoFound._id;

        const query = await obj.save();

        if (query) {
            res.json({ message: "Soat creado con éxito" });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.updateOneById = async (req, res) => {
    const {
        codigo_interno,
        cliente,
        fecha_emision,
        anio_emision,
        mes_emision,
        nro_formulario,
        sucursal,
        sucursalE,
        placa,
        marca,
        marcaE,
        modelo,
        modeloE,
        anioE,
        uso,
        usoE,
        tipoSoat,
        tipoSoatE,
        asesorConexos,
        inicio_vigencia,
        fin_vigencia,
        precio,
        estadoSoat,
        estadoSoatE,
        fechaIngresado,
        isEmitido,
        fechaEmitido,
    } = req.body;
    const { itemId } = req.params;
    let query = null;

    try {
        const customerFound = await Customer.findOne({ name: cliente });
        if (!customerFound) return res.status(404).json({ message: `Cliente ${cliente} no encontrad@` });

        const sucursalFound = await Sucursal.findOne({ name: sucursalE });
        if (!sucursalFound) return res.status(404).json({ message: `Sucursal ${sucursalE} no encontrad@` });

        const marcaFound = await MarcaTasaciones.findOne({ name: marcaE });
        if (!marcaFound) return res.status(404).json({ message: `Marca ${marcaE} no encontrad@` });

        const modeloFound = await ModeloTasaciones.findOne({ name: modeloE });
        if (!modeloFound) return res.status(404).json({ message: `Modelo ${modeloE} no encontrad@` });

        const anioFound = await Anio.findOne({ name: anioE });
        if (!anioFound) return res.status(404).json({ message: `Modelo ${anioE} no encontrad@` });

        const usoFound = await TipoUso.findOne({ name: usoE });
        if (!usoFound) return res.status(404).json({ message: `Tipo de uso ${usoE} no encontrad@` });

        const tipoSoatFound = await TipoSoat.findOne({ name: tipoSoatE });
        if (!tipoSoatFound) return res.status(404).json({ message: `Tipo Soat ${tipoSoatE} no encontrad@` });

        const asesorFound = await Conexos.findOne({ name: asesorConexos });
        if (!asesorFound) return res.status(404).json({ message: `Asesor ${asesorConexos} no encontrad@` });

        const estadoFound = await EstadoSoat.findOne({ name: estadoSoatE });
        if (!estadoFound) return res.status(404).json({ message: `Estado ${estadoSoatE} no encontrad@` });

        if (estadoSoatE == "INGRESADO") {
            query = await Soat.findByIdAndUpdate(itemId, {
                codigo_interno,
                cliente: customerFound._id,
                fecha_emision,
                anio_emision,
                mes_emision,
                nro_formulario,
                sucursal,
                sucursalE: sucursalFound._id,
                placa,
                marca,
                marcaEF: marcaFound._id,
                modelo,
                modeloE: modeloFound._id,
                anioE: anioFound._id,
                uso,
                usoE: usoFound._id,
                tipoSoat,
                tipoSoatE: tipoSoatFound._id,
                asesorConexos: asesorFound._id,
                inicio_vigencia,
                fin_vigencia,
                precio,
                estadoSoat,
                estadoSoatE: estadoFound._id,
                fechaIngresado,
            });
        } else if (estadoSoatE == "EMITIDO") {
            query = await Soat.findByIdAndUpdate(itemId, {
                codigo_interno,
                cliente: customerFound._id,
                fecha_emision,
                anio_emision,
                mes_emision,
                nro_formulario,
                sucursal,
                sucursalE: sucursalFound._id,
                placa,
                marca,
                marcaEF: marcaFound._id,
                modelo,
                modeloE: modeloFound._id,
                anioE: anioFound._id,
                uso,
                usoE: usoFound._id,
                tipoSoat,
                tipoSoatE: tipoSoatFound._id,
                asesorConexos: asesorFound._id,
                inicio_vigencia,
                fin_vigencia,
                precio,
                estadoSoat,
                estadoSoatE: estadoFound._id,
                isEmitido,
                fechaEmitido,
            });
        }

        if (query) {
            res.json({ message: "Soat actualizado con éxito" });
        } else {
            return res.status(404).json({ message: `Soat ${itemId} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

controller.deleteOneById = async (req, res) => {
    const { itemId } = req.params;
    try {
        const query = await Soat.findByIdAndDelete(itemId);
        if (query) {
            res.json({ message: "Soat eliminado con éxito" });
        } else {
            return res.status(404).json({ message: `Soat ${itemId} no encontrado` });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
};

export default controller;
