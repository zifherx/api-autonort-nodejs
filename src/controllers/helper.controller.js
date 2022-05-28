import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";
import config from '../config/config'

const helperController = {};

helperController.enviarCorreo = async (req, res) => {
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
        vendedor
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

        if(estadoSolicitudMAF == 'INGRESADO'){

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
                    vendedor
                },
            };

            emailSent = await transporter.sendMail(emailOptions);

        }else{

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
                    motivo
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
};

export default helperController;
