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
        const count = await Role.countDocuments();

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'Administrador' }).save(),
            new Role({ name: 'Usuario' }).save(),
        ]);
        console.log(values);
    } catch (err) {
        console.error(err);
    }
}

export const createUserAdmin = async() => {
    try {
        const master = await User.countDocuments();
        if (master > 0) return;

        const roleFound = await Role.findOne({name: 'Administrador'});

        const usuarios = await Promise.all([
            new User({
                name: 'Fernando Rojas',
                username: 'frojasq',
                password: await User.encryptPassword('admin'),
                roles: [roleFound._id],
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
        const count = await Anio.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Anio({ name: '2020', status: true }).save(),
            new Anio({ name: '2021', status: true }).save(),
            new Anio({ name: '2022', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigColor = async() => {
    try {
        const count = await Colores.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Colores({ name: 'ANARANJADO METALICO', status: true }).save(),
            new Colores({ name: 'AZUL METALICO', status: true }).save(),
            new Colores({ name: 'AZUL OSCURO METALICO', status: true }).save(),
            new Colores({ name: 'BEIGE MICA', status: true }).save(),
            new Colores({ name: 'BEIGE OSCURO MICA', status: true }).save(),
            new Colores({ name: 'BEIGE/BLANCO', status: true }).save(),
            new Colores({ name: 'BLANCO', status: true }).save(),
            new Colores({ name: 'BLANCO PERLA', status: true }).save(),
            new Colores({ name: 'GRIS CELESTIAL METALICO', status: true }).save(),
            new Colores({ name: 'GRIS OSCURO METALICO', status: true }).save(),
            new Colores({ name: 'NEGRO', status: true }).save(),
            new Colores({ name: 'NEGRO METALICO', status: true }).save(),
            new Colores({ name: 'NEGRO MICA', status: true }).save(),
            new Colores({ name: 'NEGRO/BLANCO PERLA', status: true }).save(),
            new Colores({ name: 'NEGRO/GRIS OSCURO MET.', status: true }).save(),
            new Colores({ name: 'PLATA GALAXY METALICO', status: true }).save(),
            new Colores({ name: 'PLATA METALICO', status: true }).save(),
            new Colores({ name: 'ROJO', status: true }).save(),
            new Colores({ name: 'ROJO ESCARLATA METALICO', status: true }).save(),
            new Colores({ name: 'ROJO METALICO', status: true }).save(),
            new Colores({ name: 'ROJO MICA', status: true }).save(),
            new Colores({ name: 'ROJO MICA METALICO', status: true }).save(),
            new Colores({ name: 'ROJO OSCURO MICA', status: true }).save(),
            new Colores({ name: 'ROJO SOLIDO', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigChasis = async() => {
    try {
        const count = await Chasis.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Chasis({ name: 'Sedan', status: true }).save(),
            new Chasis({ name: 'Hatchback', status: true }).save(),
            new Chasis({ name: 'Pick-Up', status: true }).save(),
            new Chasis({ name: 'Coupe', status: true }).save(),
            new Chasis({ name: 'SUV', status: true }).save(),
            new Chasis({ name: 'Cabinado', status: true }).save(),
            new Chasis({ name: 'MicroBus', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigMarca = async() => {
    try {
        const count = await Marca.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Marca({ name: 'Toyota', status: true }).save(),
            new Marca({ name: 'Hino', status: 'Inactivo' }).save(),
            new Marca({ name: 'Lexus', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigBanco = async() => {
    try {
        const count = await Banco.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Banco({ name: 'AUTOPLAN', status: true }).save(),
            new Banco({ name: 'BANBIF', status: true }).save(),
            new Banco({ name: 'BANCO FALABELLA', status: true }).save(),
            new Banco({ name: 'BANCO NACION', status: true }).save(),
            new Banco({ name: 'BBVA', status: true }).save(),
            new Banco({ name: 'BCP', status: true }).save(),
            new Banco({ name: 'CAJA PIURA', status: true }).save(),
            new Banco({ name: 'CAJA SULLANA', status: true }).save(),
            new Banco({ name: 'CAJA TRUJILLO', status: true }).save(),
            new Banco({ name: 'CFC', status: true }).save(),
            new Banco({ name: 'CONTADO', status: true }).save(),
            new Banco({ name: 'COOPERATIVA LEON XII', status: true }).save(),
            new Banco({ name: 'COOPERATIVA SAN LORENZO', status: true }).save(),
            new Banco({ name: 'CREDISCOTIA', status: true }).save(),
            new Banco({ name: 'EDIFICAR', status: true }).save(),
            new Banco({ name: 'ENDOSO', status: true }).save(),
            new Banco({ name: 'FINANCIERA COMPARTAMOS', status: true }).save(),
            new Banco({ name: 'FINANCIERO', status: true }).save(),
            new Banco({ name: 'INTERBANK', status: true }).save(),
            new Banco({ name: 'LEASING TOTAL', status: true }).save(),
            new Banco({ name: 'MAF', status: true }).save(),
            new Banco({ name: 'MAQUISTEMAS', status: true }).save(),
            new Banco({ name: 'MI BANCO', status: true }).save(),
            new Banco({ name: 'OPCION TOYOTA', status: true }).save(),
            new Banco({ name: 'PANDERO', status: true }).save(),
            new Banco({ name: 'SANTANDER', status: true }).save(),
            new Banco({ name: 'SCOTIABANK', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigFinanciamiento = async() => {
    try {
        const count = await Financiamiento.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Financiamiento({ name: 'ACTIVO FIJO', status: true }).save(),
            new Financiamiento({ name: 'CONTADO', status: true }).save(),
            new Financiamiento({ name: 'CREDITO COMERCIAL', status: true }).save(),
            new Financiamiento({ name: 'CREDITO PERSONAL', status: true }).save(),
            new Financiamiento({ name: 'CREDITO VEHICULAR', status: true }).save(),
            new Financiamiento({ name: 'EN PARTE DE PAGO', status: true }).save(),
            new Financiamiento({ name: 'ENDOSO', status: true }).save(),
            new Financiamiento({ name: 'LEASING', status: true }).save(),
            new Financiamiento({ name: 'LICITACION', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigModelo = async() => {
    try {
        const count = await Modelo.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Modelo({ name: '4Runner', status: true }).save(),
            new Modelo({ name: 'Agya', status: true }).save(),
            new Modelo({ name: 'Avanza', status: true }).save(),
            new Modelo({ name: 'C-HR', status: true }).save(),
            new Modelo({ name: 'Corolla', status: true }).save(),
            new Modelo({ name: 'Dutro', status: true }).save(),
            new Modelo({ name: 'Etios', status: true }).save(),
            new Modelo({ name: 'FC', status: true }).save(),
            new Modelo({ name: 'FD', status: true }).save(),
            new Modelo({ name: 'FJ Cruiser', status: true }).save(),
            new Modelo({ name: 'FM350', status: true }).save(),
            new Modelo({ name: 'Fortuner', status: true }).save(),
            new Modelo({ name: 'GB', status: true }).save(),
            new Modelo({ name: 'GD', status: true }).save(),
            new Modelo({ name: 'GH', status: true }).save(),
            new Modelo({ name: 'GT86', status: true }).save(),
            new Modelo({ name: 'Hiace', status: true }).save(),
            new Modelo({ name: 'Hilux', status: true }).save(),
            new Modelo({ name: 'Land Cruiser Prado', status: true }).save(),
            new Modelo({ name: 'Prius', status: true }).save(),
            new Modelo({ name: 'RAV4', status: true }).save(),
            new Modelo({ name: 'Rush', status: true }).save(),
            new Modelo({ name: 'Yaris', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSectorista = async() => {
    try {
        const count = await Sectorista.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sectorista({ name: 'ARACELY RIVERA', status: true }).save(),
            new Sectorista({ name: 'OSCAR VERA', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigCondicion = async() => {
    try {
        const count = await Condicion.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Condicion({ name: 'ASIGNADO', status: true }).save(),
            new Condicion({ name: 'BLOQUEADO', status: true }).save(),
            new Condicion({ name: 'CONSEGUIR', status: true }).save(),
            new Condicion({ name: 'EXHIBICIÓN', status: true }).save(),
            new Condicion({ name: 'LIBRE', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSituacion = async() => {
    try {
        const count = await Situacion.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Situacion({ name: 'Anticipo', status: true }).save(),
            new Situacion({ name: 'Cancelado', status: true }).save(),
            new Situacion({ name: 'Cancelado PT', status: true }).save(),
            new Situacion({ name: 'Credito', status: true }).save(),
            new Situacion({ name: 'Devolución', status: true }).save(),
            new Situacion({ name: 'En Espera', status: true }).save(),
            new Situacion({ name: 'Facturado', status: true }).save(),
            new Situacion({ name: 'Libre', status: true }).save(),
            new Situacion({ name: 'Por Desembolsar', status: true }).save(),
            new Situacion({ name: 'Reservado', status: true }).save(),
            new Situacion({ name: 'Reservado C', status: true }).save(),
            new Situacion({ name: 'Reservado L', status: true }).save(),
            new Situacion({ name: 'Stand By', status: true }).save(),
            new Situacion({ name: 'Test Drive', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSucursal = async() => {
    try {
        const count = await Sucursal.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sucursal({ name: 'Jaén', status: true }).save(),
            new Sucursal({ name: 'Tarapoto', status: true }).save(),
            new Sucursal({ name: 'Trujillo', status: true }).save(),
            new Sucursal({ name: 'Chachapoyas', status: 'Inactivo' }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigSustento = async() => {
    try {
        const count = await Sustento.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Sustento({ name: 'BUENA PRO', status: true }).save(),
            new Sustento({ name: 'CARTA APROBACION', status: true }).save(),
            new Sustento({ name: 'CONTADO', status: true }).save(),
            new Sustento({ name: 'ORDEN COMPRA BANCO', status: true }).save(),
            new Sustento({ name: 'ORDEN COMPRA CLIENTE', status: true }).save(),
            new Sustento({ name: 'SOLICITUD COMPRA', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigUbicacion = async() => {
    try {
        const count = await Ubicacion.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new Ubicacion({ name: 'ADUANAS', status: true }).save(),
            new Ubicacion({ name: 'ALMACEN TRANSPESA', status: true }).save(),
            new Ubicacion({ name: 'CIGUEÑA', status: true }).save(),
            new Ubicacion({ name: 'EN TRANSITO', status: true }).save(),
            new Ubicacion({ name: 'ENTREGADO', status: true }).save(),
            new Ubicacion({ name: 'JAÉN', status: true }).save(),
            new Ubicacion({ name: 'NACIONALIZACIÓN', status: true }).save(),
            new Ubicacion({ name: 'PRODUCCIÓN', status: true }).save(),
            new Ubicacion({ name: 'RODADO', status: true }).save(),
            new Ubicacion({ name: 'TARAPOTO', status: true }).save(),
            new Ubicacion({ name: 'TDP', status: true }).save(),
            new Ubicacion({ name: 'TRUJILLO', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}

export const createConfigStatusFile = async() => {
    try {
        const count = await StatusFile.countDocuments();
        if (count > 0) return;

        const poblado = await Promise.all([
            new StatusFile({ name: 'Pendiente de Firma', status: true }).save(),
            new StatusFile({ name: 'Legalizado', status: true }).save(),
            new StatusFile({ name: 'Firmado', status: true }).save(),
        ]);
        console.log(poblado);
    } catch (err) {
        console.error(err)
    }
}
