import nodemailer from 'nodemailer'
import Customer from '../models/Customer'
import Maf from '../models/Maf'
import Seller from '../models/Seller'
import Vehicle from '../models/Vehicle'
import User from '../models/User'

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