import { config } from 'dotenv';
config();

export default {
    SECRET: 'ADV_API',
    // OFFLINE
    // mongoSCIdbURL: process.env.MONGO_URI_SCI_OFFLINE,
    // mongoSGLdbURL: process.env.MONGO_URI_SGL_OFFLINE,
    // ONLINE
    mongoSCIdbURL: process.env.MONGO_URI_PUBLIC,
    mongoSGLdbURL: process.env.MONGO_URI_SGL_PUBLIC,
    API_PORT: process.env.PORT,
    //ENVIO CORREOS
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_PORT_SMTP: process.env.EMAIL_PORT,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    //CORREO FINANZAS
    EMAIL_FINANZAS_USER: process.env.EMAIL_FINANZAS_USER,
    EMAIL_FINANZAS_PASS: process.env.EMAIL_FINANZAS_PASS
}
