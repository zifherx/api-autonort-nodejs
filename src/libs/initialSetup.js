import Role from '../models/Role';
import User from '../models/User';
import Anio from '../models/Anio';
import Colores from '../models/Colores';
import Chasis from '../models/Chasis';
import Marca from '../models/Marca';
import Banco from '../models/Banco';
import Financiamiento from '../models/Financiamiento';
import Modelo from '../models/Modelo';
import Sectorista from '../models/Sectorista';
import Condicion from '../models/Condicion';
import Situacion from '../models/Situacion';
import Sucursal from '../models/Sucursal';
import Sustento from '../models/Sustento';
import Ubicacion from '../models/Ubicacion';
import StatusFile from '../models/StatusFile'

export const createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'Administrador' }).save(),
            new Role({ name: 'Jefe-ADV' }).save(),
            new Role({ name: 'Jefe-Tunning' }).save(),
            new Role({ name: 'Jefe-Ventas' }).save(),
            new Role({ name: 'Asistente-Inmatriculaciones' }).save(),
            new Role({ name: 'Usuario' }).save(),
            new Role({ name: 'Vendedor' }).save(),
            new Role({ name: 'Asistente-CS' }).save()
        ]);
        console.log(values);
    } catch (err) {
        console.error(err);
    }
}

export const createUserAdmin = async() => {
    try {
        const master = await User.estimatedDocumentCount();
        if (master > 0) return;

        const usuarios = await Promise.all([
            new User({
                name: 'Fernando Rojas',
                username: 'frojasq',
                password: await User.encryptPassword('admin'),
                roles: '60940f326432ff2be060a423',
                activo: 'Activo',
                sucursal: 'Trujillo'
            }).save()
        ]);
        console.log(usuarios);
    } catch (err) {
        console.error(err);
    }
}

export const createConfigAnios = async() => {
    try {
        const count = await Anio.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Anio({ name: '2020', status: 'Activo' }).save(),
            new Anio({ name: '2021', status: 'Activo' }).save(),
            new Anio({ name: '2022', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigColor = async() => {
    try {
        const count = await Colores.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Colores({ name: 'ANARANJADO METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'AZUL METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'AZUL OSCURO METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'BEIGE MICA', status: 'Activo' }).save(),
            new Colores({ name: 'BEIGE OSCURO MICA', status: 'Activo' }).save(),
            new Colores({ name: 'BEIGE/BLANCO', status: 'Activo' }).save(),
            new Colores({ name: 'BLANCO', status: 'Activo' }).save(),
            new Colores({ name: 'BLANCO PERLA', status: 'Activo' }).save(),
            new Colores({ name: 'GRIS CELESTIAL METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'GRIS OSCURO METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'NEGRO', status: 'Activo' }).save(),
            new Colores({ name: 'NEGRO METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'NEGRO MICA', status: 'Activo' }).save(),
            new Colores({ name: 'NEGRO/BLANCO PERLA', status: 'Activo' }).save(),
            new Colores({ name: 'NEGRO/GRIS OSCURO MET.', status: 'Activo' }).save(),
            new Colores({ name: 'PLATA GALAXY METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'PLATA METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO ESCARLATA METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO MICA', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO MICA METALICO', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO OSCURO MICA', status: 'Activo' }).save(),
            new Colores({ name: 'ROJO SOLIDO', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigChasis = async() => {
    try {
        const count = await Chasis.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Chasis({ name: 'Sedan', status: 'Activo' }).save(),
            new Chasis({ name: 'Hatchback', status: 'Activo' }).save(),
            new Chasis({ name: 'Pick-Up', status: 'Activo' }).save(),
            new Chasis({ name: 'Coupe', status: 'Activo' }).save(),
            new Chasis({ name: 'SUV', status: 'Activo' }).save(),
            new Chasis({ name: 'Cabinado', status: 'Activo' }).save(),
            new Chasis({ name: 'MicroBus', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigMarca = async() => {
    try {
        const count = await Marca.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Marca({ name: 'Toyota', status: 'Activo' }).save(),
            new Marca({ name: 'Hino', status: 'Inactivo' }).save(),
            new Marca({ name: 'Lexus', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigBanco = async() => {
    try {
        const count = await Banco.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Banco({ name: 'AUTOPLAN', status: 'Activo' }).save(),
            new Banco({ name: 'BANBIF', status: 'Activo' }).save(),
            new Banco({ name: 'BANCO FALABELLA', status: 'Activo' }).save(),
            new Banco({ name: 'BANCO NACION', status: 'Activo' }).save(),
            new Banco({ name: 'BBVA', status: 'Activo' }).save(),
            new Banco({ name: 'BCP', status: 'Activo' }).save(),
            new Banco({ name: 'CAJA PIURA', status: 'Activo' }).save(),
            new Banco({ name: 'CAJA SULLANA', status: 'Activo' }).save(),
            new Banco({ name: 'CAJA TRUJILLO', status: 'Activo' }).save(),
            new Banco({ name: 'CFC', status: 'Activo' }).save(),
            new Banco({ name: 'CONTADO', status: 'Activo' }).save(),
            new Banco({ name: 'COOPERATIVA LEON XII', status: 'Activo' }).save(),
            new Banco({ name: 'COOPERATIVA SAN LORENZO', status: 'Activo' }).save(),
            new Banco({ name: 'CREDISCOTIA', status: 'Activo' }).save(),
            new Banco({ name: 'EDIFICAR', status: 'Activo' }).save(),
            new Banco({ name: 'ENDOSO', status: 'Activo' }).save(),
            new Banco({ name: 'FINANCIERA COMPARTAMOS', status: 'Activo' }).save(),
            new Banco({ name: 'FINANCIERO', status: 'Activo' }).save(),
            new Banco({ name: 'INTERBANK', status: 'Activo' }).save(),
            new Banco({ name: 'LEASING TOTAL', status: 'Activo' }).save(),
            new Banco({ name: 'MAF', status: 'Activo' }).save(),
            new Banco({ name: 'MAQUISTEMAS', status: 'Activo' }).save(),
            new Banco({ name: 'MI BANCO', status: 'Activo' }).save(),
            new Banco({ name: 'OPCION TOYOTA', status: 'Activo' }).save(),
            new Banco({ name: 'PANDERO', status: 'Activo' }).save(),
            new Banco({ name: 'SANTANDER', status: 'Activo' }).save(),
            new Banco({ name: 'SCOTIABANK', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigFinanciamiento = async() => {
    try {
        const count = await Financiamiento.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Financiamiento({ name: 'ACTIVO FIJO', status: 'Activo' }).save(),
            new Financiamiento({ name: 'CONTADO', status: 'Activo' }).save(),
            new Financiamiento({ name: 'CREDITO COMERCIAL', status: 'Activo' }).save(),
            new Financiamiento({ name: 'CREDITO PERSONAL', status: 'Activo' }).save(),
            new Financiamiento({ name: 'CREDITO VEHICULAR', status: 'Activo' }).save(),
            new Financiamiento({ name: 'EN PARTE DE PAGO', status: 'Activo' }).save(),
            new Financiamiento({ name: 'ENDOSO', status: 'Activo' }).save(),
            new Financiamiento({ name: 'LEASING', status: 'Activo' }).save(),
            new Financiamiento({ name: 'LICITACION', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigModelo = async() => {
    try {
        const count = await Modelo.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Modelo({ name: '4Runner', status: 'Activo' }).save(),
            new Modelo({ name: 'Agya', status: 'Activo' }).save(),
            new Modelo({ name: 'Avanza', status: 'Activo' }).save(),
            new Modelo({ name: 'C-HR', status: 'Activo' }).save(),
            new Modelo({ name: 'Corolla', status: 'Activo' }).save(),
            new Modelo({ name: 'Dutro', status: 'Activo' }).save(),
            new Modelo({ name: 'Etios', status: 'Activo' }).save(),
            new Modelo({ name: 'FC', status: 'Activo' }).save(),
            new Modelo({ name: 'FD', status: 'Activo' }).save(),
            new Modelo({ name: 'FJ Cruiser', status: 'Activo' }).save(),
            new Modelo({ name: 'FM350', status: 'Activo' }).save(),
            new Modelo({ name: 'Fortuner', status: 'Activo' }).save(),
            new Modelo({ name: 'GB', status: 'Activo' }).save(),
            new Modelo({ name: 'GD', status: 'Activo' }).save(),
            new Modelo({ name: 'GH', status: 'Activo' }).save(),
            new Modelo({ name: 'GT86', status: 'Activo' }).save(),
            new Modelo({ name: 'Hiace', status: 'Activo' }).save(),
            new Modelo({ name: 'Hilux', status: 'Activo' }).save(),
            new Modelo({ name: 'Land Cruiser Prado', status: 'Activo' }).save(),
            new Modelo({ name: 'Prius', status: 'Activo' }).save(),
            new Modelo({ name: 'RAV4', status: 'Activo' }).save(),
            new Modelo({ name: 'Rush', status: 'Activo' }).save(),
            new Modelo({ name: 'Yaris', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSectorista = async() => {
    try {
        const count = await Sectorista.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sectorista({ name: 'ARACELY RIVERA', status: 'Activo' }).save(),
            new Sectorista({ name: 'OSCAR VERA', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigCondicion = async() => {
    try {
        const count = await Condicion.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Condicion({ name: 'ASIGNADO', status: 'Activo' }).save(),
            new Condicion({ name: 'BLOQUEADO', status: 'Activo' }).save(),
            new Condicion({ name: 'CONSEGUIR', status: 'Activo' }).save(),
            new Condicion({ name: 'EXHIBICIÓN', status: 'Activo' }).save(),
            new Condicion({ name: 'LIBRE', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSituacion = async() => {
    try {
        const count = await Situacion.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Situacion({ name: 'Anticipo', status: 'Activo' }).save(),
            new Situacion({ name: 'Cancelado', status: 'Activo' }).save(),
            new Situacion({ name: 'Cancelado PT', status: 'Activo' }).save(),
            new Situacion({ name: 'Credito', status: 'Activo' }).save(),
            new Situacion({ name: 'Devolución', status: 'Activo' }).save(),
            new Situacion({ name: 'En Espera', status: 'Activo' }).save(),
            new Situacion({ name: 'Facturado', status: 'Activo' }).save(),
            new Situacion({ name: 'Libre', status: 'Activo' }).save(),
            new Situacion({ name: 'Por Desembolsar', status: 'Activo' }).save(),
            new Situacion({ name: 'Reservado', status: 'Activo' }).save(),
            new Situacion({ name: 'Reservado C', status: 'Activo' }).save(),
            new Situacion({ name: 'Reservado L', status: 'Activo' }).save(),
            new Situacion({ name: 'Stand By', status: 'Activo' }).save(),
            new Situacion({ name: 'Test Drive', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSucursal = async() => {
    try {
        const count = await Sucursal.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sucursal({ name: 'Jaén', status: 'Activo' }).save(),
            new Sucursal({ name: 'Tarapoto', status: 'Activo' }).save(),
            new Sucursal({ name: 'Trujillo', status: 'Activo' }).save(),
            new Sucursal({ name: 'Chachapoyas', status: 'Inactivo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSustento = async() => {
    try {
        const count = await Sustento.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sustento({ name: 'BUENA PRO', status: 'Activo' }).save(),
            new Sustento({ name: 'CARTA APROBACION', status: 'Activo' }).save(),
            new Sustento({ name: 'CONTADO', status: 'Activo' }).save(),
            new Sustento({ name: 'ORDEN COMPRA BANCO', status: 'Activo' }).save(),
            new Sustento({ name: 'ORDEN COMPRA CLIENTE', status: 'Activo' }).save(),
            new Sustento({ name: 'SOLICITUD COMPRA', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigUbicacion = async() => {
    try {
        const count = await Ubicacion.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Ubicacion({ name: 'ADUANAS', status: 'Activo' }).save(),
            new Ubicacion({ name: 'ALMACEN TRANSPESA', status: 'Activo' }).save(),
            new Ubicacion({ name: 'CIGUEÑA', status: 'Activo' }).save(),
            new Ubicacion({ name: 'EN TRANSITO', status: 'Activo' }).save(),
            new Ubicacion({ name: 'ENTREGADO', status: 'Activo' }).save(),
            new Ubicacion({ name: 'JAÉN', status: 'Activo' }).save(),
            new Ubicacion({ name: 'NACIONALIZACIÓN', status: 'Activo' }).save(),
            new Ubicacion({ name: 'PRODUCCIÓN', status: 'Activo' }).save(),
            new Ubicacion({ name: 'RODADO', status: 'Activo' }).save(),
            new Ubicacion({ name: 'TARAPOTO', status: 'Activo' }).save(),
            new Ubicacion({ name: 'TDP', status: 'Activo' }).save(),
            new Ubicacion({ name: 'TRUJILLO', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigStatusFile = async() => {
    try {
        const count = await StatusFile.estimatedDocumentCount();
        if (count > 0) return;

        const poblado = await Promise.all([
            new StatusFile({ name: 'Pendiente de Firma', status: 'Activo' }).save(),
            new StatusFile({ name: 'Legalizado', status: 'Activo' }).save(),
            new StatusFile({ name: 'Firmado', status: 'Activo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}