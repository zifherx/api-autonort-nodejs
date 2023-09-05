import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import config from "../config/config";
import ActividadKaizen from "../models/ActividadKaizen";
import Maf from "../models/Maf";

const helperController = {
    enviarCorreo: async (req, res) => {
        const {
            to,
            cc,
            subject,
            text,
            estadoSolicitudMAF,
            observacion,
            motivo,
            ejecutivo_maf,
            nro_solicitud,
            titular,
            documento,
            estado_civil,
            centro_laboral,
            ingreso_promedio,
            cuota_inicial,
            cod_tdp,
            anio_fabricacion,
            anio_modelo,
            pvp,
            plan_solicitud,
            tipo_uso,
            vendedor,
        } = req.body;

        let transporter = null;
        let optionsTemplate = null;
        let emailOptions = null;
        let emailSent = null;

        try {
            transporter = nodemailer.createTransport({
                host: config.EMAIL_HOST,
                port: config.EMAIL_PORT_SMTP,
                secure: true,
                auth: {
                    user: config.EMAIL_USER,
                    pass: config.EMAIL_PASS,
                },
            });

            if (estadoSolicitudMAF == "INGRESADO") {
                optionsTemplate = {
                    viewEngine: {
                        extname: ".hbs",
                        layoutsDir: "src/views",
                        defaultLayout: "templateEmailMaf",
                    },
                    viewPath: "src/views",
                    extName: ".hbs",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_USER}>`,
                    to,
                    cc,
                    subject,
                    text,
                    template: "templateEmailMaf",
                    context: {
                        ejecutivo_maf,
                        nro_solicitud,
                        titular,
                        documento,
                        estado_civil,
                        centro_laboral,
                        ingreso_promedio,
                        cuota_inicial,
                        cod_tdp,
                        anio_fabricacion,
                        anio_modelo,
                        pvp,
                        plan_solicitud,
                        tipo_uso,
                        vendedor,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            } else {
                optionsTemplate = {
                    viewEngine: {
                        extname: ".hbs",
                        layoutsDir: "src/views",
                        defaultLayout: "templateEmailUpdateMaf",
                    },
                    viewPath: "src/views",
                    extName: ".hbs",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_USER}>`,
                    to,
                    cc: [cc, "frojas@autonortnor.com.pe"],
                    subject,
                    text,
                    template: "templateEmailUpdateMaf",
                    context: {
                        nro_solicitud,
                        estadoSolicitudMAF,
                        ejecutivo_maf,
                        titular,
                        documento,
                        cod_tdp,
                        plan_solicitud,
                        vendedor,
                        observacion,
                        motivo,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            }

            let respuesta = emailSent.response.split(" ");

            if (respuesta[1] == "OK") {
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailSent));
                res.json({ message: "Mensaje enviado", info: emailSent.messageId, delay: emailSent.envelopeTime, response: emailSent.response });
            } else {
                return res.status(500).json({ message: "Error al enviar correo" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    enviarTasaCambio: async (req, res) => {
        const { to, cc, subject, text, fecha, tasa_venta_vehiculos, tasa_venta_repuestos, tasa_licitaciones, departamento_finanzas } = req.body;

        let transporter = null;
        let optionsTemplate = null;
        let emailOptions = null;
        let emailSent = null;

        try {
            transporter = nodemailer.createTransport({
                host: config.EMAIL_HOST,
                port: config.EMAIL_PORT_SMTP,
                secure: true,
                auth: {
                    user: config.EMAIL_FINANZAS_USER,
                    pass: config.EMAIL_FINANZAS_PASS,
                },
            });

            optionsTemplate = {
                viewEngine: {
                    extname: ".hbs",
                    layoutsDir: "src/views",
                    defaultLayout: "templateTipoCambio",
                },
                viewPath: "src/views",
                extName: ".hbs",
            };

            transporter.use("compile", hbs(optionsTemplate));

            emailOptions = {
                from: `"Plataforma SCI 👻" <${config.EMAIL_FINANZAS_USER}>`,
                to,
                cc: [cc],
                subject,
                text,
                template: "templateTipoCambio",
                context: {
                    fecha,
                    tasa_venta_vehiculos,
                    tasa_venta_repuestos,
                    tasa_licitaciones,
                    departamento_finanzas,
                },
            };

            emailSent = await transporter.sendMail(emailOptions);

            let respuesta = emailSent.response.split(" ");

            if (respuesta[1] == "OK") {
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailSent));
                res.json({ message: "Mensaje enviado", info: emailSent.messageId, delay: emailSent.envelopeTime, response: emailSent.response });
            } else {
                return res.status(500).json({ message: "Error al enviar correo" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    enviarEmailForKaizen: async (req, res) => {
        const {
            to,
            cc,
            subject,
            text,
            estadoE,
            cod_interno,
            titulo_actividad,
            responsable,
            ubicacionMejoraE,
            problema,
            area,
            tipoMejoraE,
            createdBy,
            fechaIngreso,
            sucursalE,
            aprobadoBy,
            observaciones_generales,
        } = req.body;

        let transporter = null;
        let optionsTemplate = null;
        let emailOptions = null;
        let emailSent = null;

        const rutaActividad = await ActividadKaizen.findOne({ cod_interno });
        // console.log(rutaActividad._id);
        // console.log(req.body);

        try {
            transporter = nodemailer.createTransport({
                host: config.EMAIL_HOST,
                port: config.EMAIL_PORT_SMTP,
                secure: true,
                auth: {
                    user: config.EMAIL_VK_USER,
                    pass: config.EMAIL_VK_PASSWORD,
                },
            });

            if (estadoE == "BORRADOR") {
                return res.json({ message: "No envía nada" });
            } else if (estadoE == "EN PROCESO") {
                optionsTemplate = {
                    viewEngine: {
                        extname: ".handlebars",
                        // extname: ".hbs",
                        layoutsDir: "src/views",
                        defaultLayout: "templateActivityNew",
                    },
                    viewPath: "src/views",
                    extname: ".handlebars",
                    // extname: ".hbs",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_VK_USER}>`,
                    to,
                    cc,
                    subject,
                    text,
                    template: "templateActivityNew",
                    context: {
                        cod_interno,
                        titulo_actividad,
                        responsable,
                        ubicacionMejoraE,
                        problema,
                        area,
                        tipoMejoraE,
                        createdBy,
                        fechaIngreso,
                        sucursalE,
                        url_kaizen: `https://autonortnor.com/sci/dc/activities/kaizen/view/${rutaActividad._id}`,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            } else if (estadoE == "POR REVISIÓN" || estadoE == "POR MEJORAR" || estadoE == "APROBADO") {
                optionsTemplate = {
                    viewEngine: {
                        extname: ".handlebars",
                        layoutsDir: "src/views",
                        defaultLayout: "templateActivityUpdate",
                    },
                    viewPath: "src/views",
                    extname: ".handlebars",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_VK_USER}>`,
                    to,
                    cc: [cc],
                    subject,
                    text,
                    template: "templateActivityUpdate",
                    context: {
                        cod_interno,
                        titulo_actividad,
                        responsable,
                        ubicacionMejoraE,
                        observaciones_generales,
                        tipoMejoraE,
                        area,
                        createdBy,
                        estadoE,
                        fechaIngreso,
                        sucursalE,
                        aprobadoBy,
                        url_kaizen: `https://autonortnor.com/sci/dc/activities/kaizen/view/${rutaActividad._id}`,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            }

            // console.log(emailSent);

            let respuesta = emailSent.response.split(" ");

            if (respuesta[1] == "OK") {
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailSent));
                res.json({ message: "Mensaje enviado", info: emailSent.messageId, delay: emailSent.envelopeTime, response: emailSent.response });
            } else {
                return res.status(500).json({ message: "Error al enviar correo" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },

    envioEmailForMAF: async (req, res) => {
        const {
            to,
            cc,
            subject,
            text,
            estadoSolicitudMAF,
            observaciones_ingreso,
            observacion,
            motivo,
            ejecutivo_maf,
            nro_solicitud,
            estado_civil,
            centro_laboral,
            ingreso_promedio,
            cuota_percent,
            cuota_inicial,
            anio_modelo,
            pvp,
            descuentos,
            precio_a_financiar,
        } = req.body;
        let transporter,
            optionsTemplate,
            emailOptions,
            emailSent = null;

        const urlSolicitud = await Maf.findOne({ nro_solicitud })
            .populate({
                path: "customer",
                select: "name document",
            })
            .populate({ path: "seller", select: "name" })
            .populate({ path: "planMAF", select: "name" })
            .populate({ path: "tipoUsoE", select: "name" })
            .populate({
                path: "car",
                select: "model cod_tdp version",
                populate: {
                    path: "model",
                    select: "name avatar",
                },
            });

        // console.log(urlSolicitud);

        try {
            transporter = nodemailer.createTransport({
                host: config.EMAIL_HOST,
                port: config.EMAIL_PORT_SMTP,
                secure: true,
                auth: {
                    user: config.EMAIL_MAF_USER,
                    pass: config.EMAIL_MAF_PASS,
                },
            });

            if (estadoSolicitudMAF === "EN EVALUACIÓN") {
                console.log("NUEVA SOLICITUD");
                optionsTemplate = {
                    viewEngine: {
                        extname: ".hbs",
                        layoutsDir: "src/views",
                        defaultLayout: "templateMafNewRequest",
                    },
                    viewPath: "src/views",
                    extName: ".hbs",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_MAF_USER}>`,
                    to,
                    cc,
                    subject,
                    text,
                    template: "templateMafNewRequest",
                    context: {
                        ejecutivo_maf,
                        nro_solicitud,
                        titular: `${urlSolicitud.customer.name}`,
                        documento: `${urlSolicitud.customer.document}`,
                        estado_civil,
                        centro_laboral,
                        ingreso_promedio,
                        cuota_percent,
                        cuota_inicial,
                        cod_tdp: `${urlSolicitud.car.cod_tdp}`,
                        vehicle_version: `${urlSolicitud.car.version}`,
                        anio_modelo,
                        pvp,
                        descuentos,
                        precio_a_financiar,
                        plan_solicitud: `${urlSolicitud.planMAF.name}`,
                        tipo_uso: `${urlSolicitud.tipoUsoE.name}`,
                        vendedor: `${urlSolicitud.seller.name}`,
                        observaciones_ingreso,
                        url_vehicle: `${urlSolicitud.car.model.avatar}`,
                        url_maf: `https://autonortnor.com/sci/commercial/cadena-valor/maf/view2/${urlSolicitud._id}`,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            } else {
                console.log("CAMBIO DE ESTADO");
                optionsTemplate = {
                    viewEngine: {
                        extname: ".hbs",
                        layoutsDir: "src/views",
                        defaultLayout: "templateMafUpdateRequest",
                    },
                    viewPath: "src/views",
                    extName: ".hbs",
                };

                transporter.use("compile", hbs(optionsTemplate));

                emailOptions = {
                    from: `"Plataforma SCI 👻" <${config.EMAIL_MAF_USER}>`,
                    to,
                    cc,
                    subject,
                    text,
                    template: "templateMafUpdateRequest",
                    context: {
                        nro_solicitud,
                        estadoSolicitudMAF,
                        ejecutivo_maf,
                        titular: `${urlSolicitud.customer.name}`,
                        documento: `${urlSolicitud.customer.document}`,
                        cod_tdp: `${urlSolicitud.car.cod_tdp}`,
                        vehicle_version: `${urlSolicitud.car.version}`,
                        cuota_percent,
                        cuota_inicial,
                        anio_modelo,
                        pvp,
                        descuentos,
                        precio_a_financiar,
                        plan_solicitud: `${urlSolicitud.planMAF.name}`,
                        vendedor: `${urlSolicitud.seller.name}`,
                        observacion,
                        motivo,
                        url_vehicle: `${urlSolicitud.car.model.avatar}`,
                        url_maf: `https://autonortnor.com/sci/commercial/cadena-valor/maf/view2/${urlSolicitud._id}`,
                    },
                };

                emailSent = await transporter.sendMail(emailOptions);
            }

            let respuesta = emailSent.response.split(" ");
            // console.log("ANSWER;", emailSent);
            // res.json({ response: emailSent });
            if (respuesta[1] === "OK") {
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(emailSent));
                res.json({
                    message: "Mensaje enviado",
                    envelopeTime: `${emailSent.envelopeTime / 1000} seg`,
                    messageTime: `${emailSent.messageTime / 1000} seg`,
                    messageSize: `${emailSent.messageSize / 1000} Kb`,
                    response: emailSent.response,
                    accepted: emailSent.accepted,
                    messageId: emailSent.messageId,
                });
            } else {
                return res.status(503).json({ message: "Error al enviar correo" });
            }
        } catch (err) {
            console.log(err);
            return res.status(503).json({ message: err.message });
        }
    },
};

export default helperController;
