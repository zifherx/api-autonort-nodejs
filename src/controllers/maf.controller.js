import nodemailer from 'nodemailer'
import Customer from '../models/Customer'
import Maf from '../models/Maf'
import Seller from '../models/Seller'
import Vehicle from '../models/Vehicle'
import User from '../models/User'
import fs from 'fs';
import path from 'path';
import download from 'download';
import AdmZip from 'adm-zip';
import 'dotenv/config';
import twilio from 'twilio';

export const getAll = async(req, res) => {
    try {
        const query = await Maf.find().populate('customer seller car userCreator userApprove')
            // console.log(query)
        if (query.length > 0) {
            res.json(query)
        } else {
            return res.status(404).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const getOneById = async(req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findById(mafId).populate('customer seller car userCreator userApprove')
            // console.log(query)
        if (query) {
            res.json(query)
        } else {
            return res.status(404).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const getAllByVendedor = async(req, res) => {
    const { vendedor } = req.body;
    try {
        const sellerFound = await Seller.find({ name: vendedor });
        const query = await Maf.find({ seller: sellerFound.map(a => a._id) }).populate('customer seller car userCreator userApprove');
        if (query.length > 0) {
            res.json({ nro_request: query.length, requests: query });
        } else {
            return res.status(404).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const getAllBySucursal = async(req, res) => {
    const { sucursal } = req.body;
    try {
        const query = await Maf.find({ sucursal: sucursal }).populate('customer seller car userCreator userApprove');
        if (query.length > 0) {
            res.json({ nro_request: query.length, requests: query });
        } else {
            return res.status(404).json({ message: 'No existen solicitudes' })
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const obtenerRequestbyStatus = async(req, res) => {
    const { status, pasoaHot, sucursal } = req.body
    try {
        const query = await Maf.find({ primer_status_request: status, pasoaHot: pasoaHot, sucursal: sucursal })
            .populate('car seller customer')
        if (query.length > 0) {
            res.json(query)
        } else {
            return res.status(404).json({ message: `No se encuentran solicitudes en ${status}` })
        }
    } catch (err) {
        console.log(err.response)
        return res.status(503).json({ message: err.message })

    }
}

export const createRequest = async(req, res) => {
    const {
        nro_solicitud,
        fecha_ingreso,
        hora_ingreso,
        sucursal,
        cliente,
        estado_civil,
        lugar_trabajo,
        conyuge,
        document_conyuge,
        fecha_nacimiento_conyuge,
        ingreso_promedio,
        cuota_inicial,
        vendedor,
        vehiculo,
        anio_fab,
        anio_mod,
        pvp,
        plan,
        tipo_uso,
        primer_status_request,
        observaciones_ingreso,
        userCreator
    } = req.body
    const files = req.files;

    let filePaths = [];

    try {

        if (files.length === 0) return res.status(400).json({ message: 'Faltan los documentos' })

        files.map((file) => {
            filePaths.push(file.location);
        })

        const obj = new Maf({
            nro_solicitud,
            fecha_ingreso,
            hora_ingreso,
            sucursal,
            estado_civil,
            lugar_trabajo,
            conyuge,
            document_conyuge,
            fecha_nacimiento_conyuge,
            ingreso_promedio,
            cuota_inicial,
            anio_fab,
            anio_mod,
            pvp,
            plan,
            tipo_uso,
            evidencias: filePaths,
            primer_status_request,
            observaciones_ingreso
        });

        let clienteEncontrado = await Customer.find({ name: cliente });
        obj.customer = clienteEncontrado.map(a => a._id);

        let vendedorEncontrado = await Seller.find({ name: vendedor });
        obj.seller = vendedorEncontrado.map(b => b._id);

        let vehiculoEncontrado = await Vehicle.find({ cod_tdp: vehiculo });
        obj.car = vehiculoEncontrado.map(c => c._id)

        let usuarioCreador = await User.find({ username: userCreator });
        obj.userCreator = usuarioCreador.map(d => d._id);

        const objCreated = await obj.save()

        if (objCreated) {
            res.json({ message: 'Solicitud MAF creada con éxito' })
        }

    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const actualizarRequest = async(req, res) => {
    const { mafId } = req.params;
    const {
        primer_status_request,
        fecha_respuesta,
        observacion,
        motivo,
        userApprove
    } = req.body

    try {

        const userFound = await User.find({ username: userApprove });
        const obj = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            motivo,
            userApprove: userFound.map(a => a._id)
        })
        if (obj) {
            res.json({ message: 'Solicitud MAF actualizada con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe Solicitud a actualizar' });
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ error: err });
    }
}

export const agregarNewDocuments = async(req, res) => {
    const { mafId } = req.params;
    const { reingresado, fecha_ingreso, primer_status_request } = req.body;
    const adicionales = req.files;
    // console.log(req)
    let filePaths = [];

    try {
        if (adicionales.length === 0) return res.status(400).json({ message: 'Falta los Documentos' });

        adicionales.map((file) => {
            filePaths.push(file.location);
        });

        const query = await Maf.findByIdAndUpdate(mafId, {
            isReingresado: reingresado,
            fecha_ingreso,
            primer_status_request,
            files_adicionales: filePaths
        });

        if (query) {
            res.json({ message: 'Documentos agregados con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Solicitud a modificar' })
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message })
    }
}

export const actualizarReqAprobada = async(req, res) => {
    const { mafId } = req.params;
    const {
        primer_status_request,
        fecha_respuesta,
        observacion,
        fecha_aprobacion,
        carta_aprobacion
    } = req.body
    const carta = req.file;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, {
            primer_status_request,
            fecha_respuesta,
            observacion,
            fecha_aprobacion,
            carta_aprobacion,
            carta_evidencia: carta.location
        })

        if (query) {
            res.json({ message: 'Solicitud MAF aprobada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe Solicitud a aprobar' });
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const requestaHot = async(req, res) => {
    const { mafId } = req.params;
    const { pasoaHot } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { pasoaHot });
        if (query) {
            res.json({ message: 'Solicitud MAF se actualizó con éxito' });
        } else {
            return res.status(404).json({ messsage: 'No existe Solicitud a actualizar' });
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ error: err });
    }
}

export const cambioStatusByMaf = async(req, res) => {
    const { mafId } = req.params;
    const { tercer_status_request } = req.body;

    try {
        const query = await Maf.findByIdAndUpdate(mafId, { tercer_status_request });
        if (query) {
            res.json({ message: `Cambio de Status a ${tercer_status_request} con éxito` });
        } else {
            return res.status(404).json({ messsage: 'No existe Solicitud a actualizar' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ error: err });
    }
}

export const deleteRequest = async(req, res) => {
    const { mafId } = req.params;

    try {
        const query = await Maf.findByIdAndRemove(mafId);
        if (query) {
            res.json({ message: 'Solicitud eliminada con éxito' });
        } else {
            return res.status(404).json({ message: 'No existe la solicitud a eliminar' });
        }
    } catch (err) {
        console.log(err)
        return res.status(503).json({ message: err.message })
    }
}

export const enviarCorreoSolicitud = async(req, res) => {
    const { to, cc, subject, text, html } = req.body

    try {
        const transporter = nodemailer.createTransport({
            host: 'mail.autonortnor.com',
            port: '465',
            secure: true,
            auth: {
                user: 'sistemadv@autonortnor.com',
                pass: 'k=q0mdgLo,QS'
            }
        })

        let email = await transporter.sendMail({
            from: '"Sistema ADV 👻" <sistemadv@autonortnor.com>',
            to: to,
            cc: [cc, 'frojas@autonortnor.com.pe'],
            subject: subject,
            text: text,
            html: html
        })

        let respuesta = email.response.split(" ")
            // console.log(respuesta)
            // console.log(respuesta[1])
        if (respuesta[1] == 'OK') {
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email));
            res.json({ message: 'Mensaje enviado', info: email.messageId, retardo: email.envelopeTime, respuesta: email.response })
        } else {
            return res.status(500).json({ message: 'Error al enviar correo' })
        }
    } catch (err) {
        console.log(err.message)
        return res.status(503).json({ message: err.message })
    }
}

export const downloadAndZipeo = async(req, res) => {

    const { files } = req.body;

    try {
        await Promise.all(files
            .map(url => download(url, path.resolve('src/uploads'))));

        console.log('Download completed!')

        var dir = path.resolve('src/uploads');
        var uploadDir = fs.readdirSync(dir);

        const zip = new AdmZip();

        for (var i = 0; i < uploadDir.length; i++) {
            zip.addLocalFile(dir + '/' + uploadDir[i]);
        }

        const downloadName = `${Date.now()}.zip`;

        const data = zip.toBuffer();

        zip.writeZip(dir + '/' + downloadName);

        res.json({ url: downloadName });

        // delFiles();
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const descargaYZip = async(req, res) => {
    const { links } = req.body;
    const fileZip = req.file;

    /* await Promise.all(links
        .map(url => download(url, path.resolve('src/uploads'))));

    console.log('Download completed!'); */
    console.log(fileZip);
}

export const sendMessageWsp = async(req, res) => {
    const { placa, sucursal, servicio, mejora, calificacion, destino } = req.body;
    const accountSid = 'AC5145f2cf5442844fa805e987f09751c6';
    const authToken = '42d0808b60a3917dddcf06879e56ff4e';

    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            /* body: 'Se registró una calificación en la siguiente encuesta.
            Cliente con placa: {{1}} perteneciente a la sucursal: {{2}} que realizó el servicio de: {{3}}, sugiere mejorar en: {{4}}.
            Su calificación es: {{5}}' */
            body: `Se registró una calificación en la siguiente encuesta. \nCliente con placa: *${placa}* perteneciente a la sucursal: *${sucursal}* que realizó el servicio de: *${servicio}*, sugiere mejorar en: *${mejora}*. \nSu calificación es: *${calificacion}*`,
            // to: 'whatsapp:+51924063422', // Fernando Rojas
            to: 'whatsapp:+51' + destino, // Paul holguin
            // to: '+51989927794', // Paul holguin
            // to: '+51924063422',
            from: 'whatsapp:+18482856322', // From a valid Twilio number
            // from: '+18482856322',
        })
        .then((message) => {
            // console.log(message)
            res.json({ ok: 'Message sent', sid: message.sid, status: message.status });
        });
}

export const getCountAll = async(req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getCountByStatus = async(req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const query = await Maf.find({
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        }).countDocuments();

        if (query >= 0) {
            res.json({ count: query });
        }
    } catch (err) {
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByStatus = async(req, res) => {
    const { sucursal, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        };

        const query = await Maf.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$primer_status_request",
                num_solicitudes: { $sum: 1 }
            }
        }, {
            $sort: { num_solicitudes: -1 }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: 'No existen Solicitudes aún' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByVendedor = async(req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        };

        const query = await Maf.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$seller",
                num_solicitudes: { $sum: 1 }
            }
        }, {
            $sort: { num_solicitudes: -1 }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: 'No existen Solicitudes aún' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getRankingByVehicle = async(req, res) => {
    const { sucursal, estado, start, end } = req.body;

    try {
        const filtro = {
            sucursal: sucursal,
            primer_status_request: estado,
            fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) }
        };

        const query = await Maf.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$car",
                num_solicitudes: { $sum: 1 }
            }
        }, {
            $sort: { num_solicitudes: -1 }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, ranking: query });
        } else {
            return res.status(201).json({ message: 'No existen Solicitudes aún' });
        }
    } catch (err) {
        console.log(err);
        return res.status(503).json({ message: err.message });
    }
}

export const getSolicitudesBySeller = async(req, res) => {
    const { vendedor, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: 'No existe el vendedor' });

        const filtro = { seller: sellerFound._id, fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) } };

        const query = await Maf.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: "$primer_status_request",
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'Vendedor no ingresó ninguna solicitud' })
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}

export const getVehiclesBySeller = async(req, res) => {
    const { vendedor, estado, start, end } = req.body;

    try {
        const sellerFound = await Seller.findOne({ name: vendedor });

        if (!sellerFound) return res.status(404).json({ message: 'No existe el vendedor' });

        const filtro = { seller: sellerFound._id, primer_status_request: estado, fecha_ingreso: { $gte: new Date(start), $lte: new Date(end) } };

        const query = await Maf.aggregate([{
            $match: filtro
        }, {
            $group: {
                _id: '$car',
                qty: { $sum: 1 }
            }
        }]);

        if (query.length > 0) {
            res.json({ total: query.length, deploy: query });
        } else {
            return res.status(201).json({ message: 'Vendedor no ingresó ninguna solicitud' })
        }
    } catch (err) {
        console.log(err.message);
        return res.status(503).json({ message: err.message });
    }
}