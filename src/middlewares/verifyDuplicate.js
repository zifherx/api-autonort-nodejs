import User from '../models/User'
import Role from '../models/Role'
import Modelo from '../models/Modelo'
import Color from '../models/Colores'
import Banco from '../models/Banco'
import Sectorista from '../models/Sectorista'
import Condicion from '../models/Condicion'
import Situacion from '../models/Situacion'
import Sucursal from '../models/Sucursal'
import Sustento from '../models/Sustento'
import Financiamiento from '../models/Financiamiento'
import Ubicacion from '../models/Ubicacion'
import Chasis from '../models/Chasis'
import Seller from '../models/Seller'
import Customer from '../models/Customer'
import Campaign from '../models/Campaign'
import Adicional from '../models/Adicional'
import Vehicle from '../models/Vehicle'
import Record from '../models/Record'
import Sale from '../models/Sale'
import Anio from '../models/Anio'
import Marca from '../models/Marca'
import Endoso from '../models/Endoso'
import Conexos from '../models/Conexos'
import Aseguradora from '../models/Aseguradora'
import StatusFile from '../models/StatusFile'
import StatusMafRequest from '../models/StatusMafRequest'
import Tecnico from '../models/Tecnico'
import AServicios from '../models/AServicios'
import StatusAAP from '../models/StatusAAP'
import StatusRP from '../models/StatusRP'
import MarcaTasaciones from '../models/MarcaTasaciones'
import ModeloTasaciones from "../models/ModeloTasaciones";
import Area from '../models/Area';
import StatusTasacion from '../models/StatusTasacion';
import TipoComprobante from '../models/TipoComprobante'
import MotivoRechazo from '../models/MotivoRechazo';
import StatusFacturacion from '../models/StatusFacturacion';
import StatusEntrega from '../models/StatusEntrega';
import TipoCampania from '../models/TipoCampania';
import AccesorioE from '../models/AccesorioE';
import CondicionAccesorio from '../models/CondicionAccesorio';
import EstadoSeguro from '../models/EstadoSeguro';
import TipoUso from '../models/TipoUso';
import EstadoCivil from '../models/EstadoCivil';
import PlanMAF from '../models/PlanMAF';
import FiltroMaf from '../models/FiltroMaf';
import TipoDocumento from '../models/TipoDocumento';
import MenuG from '../models/MenuG';
import ModuloG from '../models/ModuloG'
import SubmoduloG from '../models/SubmoduloG'
import TipoProducto from '../models/TipoProducto';
import Mes from '../models/Mes';
import EstadoListaEspera from '../models/EstadoListaEspera'
import EstadoUsados from '../models/EstadoUsados';
import EstadoTunningAccesorio from '../models/EstadoTunningAccesorio';

export const checkDuplicateRole = async(req, res, next) => {
    const { name } = req.body;
    const roleEncontrado = await Role.findOne({ name: name });

    if (roleEncontrado) return res.status(201).json({ message: 'El rol ya existe' });

    next();
}

export const checkDuplicateUser = async(req, res, next) => {
    const { username } = req.body;
    const usuarioEncontrado = await User.findOne({ username: username });

    if (usuarioEncontrado) return res.status(201).json({ message: 'El usuario ya existe' });

    next();
}

export const checkDuplicateModelo = async(req, res, next) => {
    const { name } = req.body;
    const modeloEncontrado = await Modelo.findOne({ name: name });

    if (modeloEncontrado) return res.status(201).json({ message: 'El Modelo ya existe' });

    next();
}

export const checkDuplicateColor = async(req, res, next) => {
    const { name } = req.body;
    const colorEncontrado = await Color.findOne({ name: name });

    if (colorEncontrado) return res.status(201).json({ message: 'El Color ya existe' });

    next();
}

export const checkDuplicateBanco = async(req, res, next) => {
    const { name } = req.body;
    const bancoEncontrado = await Banco.findOne({ name: name });

    if (bancoEncontrado) return res.status(201).json({ message: 'La entidad Financiera ya existe' });

    next();
}

export const checkDuplicateAseguradora = async(req, res, next) => {
    const { name } = req.body;
    const query = await Aseguradora.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'La Aseguradora ya existe' });

    next();
}

export const checkDuplicateSectorista = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Sectorista.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Sectorista ya existe' });

    next();
}

export const checkDuplicateMarca = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Marca.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Marca ya existe' });

    next();
}

export const checkDuplicateCondicion = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Condicion.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Condición Vehicular ya existe' });

    next();
}

export const checkDuplicateSituacion = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Situacion.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Situación de Venta ya existe' });

    next();
}

export const checkDuplicateSucursal = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Sucursal.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Sucursal ya existe' });

    next();
}

export const checkDuplicateSustento = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Sustento.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Sustento ya existe' });

    next();
}

export const checkDuplicateFinanciamiento = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Financiamiento.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Financiamiento ya existe' });

    next();
}

export const checkDuplicateUbicacion = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Ubicacion.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Ubicacion ya existe' });

    next();
}
export const checkDuplicateEstadoListaEspera = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await EstadoListaEspera.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El estado ya existe' });

    next();
}

export const checkDuplicateChasis = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Chasis.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Chasis ya existe' });

    next();
}

export const checkDuplicateAnio = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Anio.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Año ya existe' });

    next();
}

export const checkDuplicateTipoUso = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await TipoUso.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El tipo de uso ya existe' });

    next();
}

export const checkDuplicateConexo = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Conexos.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Asesor Conexo ya existe' });

    next();
}

export const checkDuplicateEndoso = async(req, res, next) => {
    const { name } = req.body;
    const encontrado = await Endoso.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Endoso ya existe' });

    next();
}

export const checkDuplicateVendedor = async(req, res, next) => {
    const { name, document } = req.body;
    const encontrado = await Seller.findOne({ name: name });
    const encontrado1 = await Seller.findOne({ document: document });

    if (encontrado) return res.status(201).json({ message: 'El Vendedor ya existe' });

    if (encontrado1) return res.status(201).json({ message: 'El DNI ya existe' })

    next();
}

export const checkDuplicateCliente = async(req, res, next) => {
    const { name, document } = req.body;

    const encontrado = await Customer.findOne({ name: name });
    const encontrado1 = await Customer.findOne({ document: document });

    if (encontrado) return res.status(201).json({ message: 'El Cliente ya existe' });

    if (encontrado1) return res.status(201).json({ message: 'El DNI ya existe' })

    next();
}

export const checkDuplicateCampania = async(req, res, next) => {
    const { name } = req.body;

    const encontrado = await Campaign.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'La Campaña ya existe' });

    next();
}

export const checkDuplicateArea = async(req, res, next) => {
    const { name } = req.body;

    const encontrado = await Area.findOne({ name });

    if (encontrado) return res.status(201).json({ message: 'El área ya existe' });

    next();
}

export const checkDuplicateAdicional = async(req, res, next) => {
    const { name } = req.body;

    const encontrado = await Adicional.findOne({ name: name });

    if (encontrado) return res.status(201).json({ message: 'El Adicional ya existe' });

    next();
}

export const checkDuplicateVehiculo = async(req, res, next) => {
    const { cod_tdp, version } = req.body;

    const encontrado = await Vehicle.findOne({ cod_tdp: cod_tdp });
    const encontrado1 = await Vehicle.findOne({ version: version });

    if (encontrado) return res.status(201).json({ message: 'El COD-TDP ya existe' });
    if (encontrado1) return res.status(201).json({ message: 'El vehículo ya existe' });

    next();
}

export const checkDuplicateTramite = async(req, res, next) => {
    const { sales } = req.body;

    const expediente = await Sale.findOne({ nro_comprobante: sales });
    let cod_exp = expediente._id;
    // console.log('Expediente:', cod_exp);

    const encontrado = await Record.findOne({ sales: cod_exp });

    if (encontrado) return res.status(201).json({ message: 'El Trámite ya existe' });

    next();
}

export const checkDuplicateExpediente = async(req, res, next) => {
    const { serie_tdp } = req.body;

    if (serie_tdp.length > 0) {
        const encontrado = await Sale.findOne({ serie_tdp });
        if (encontrado) return res.status(201).json({ message: 'Esta SERIE-TDP ya está asignada' });

        next();
    } else {
        next();
    }
}

export const checkDuplicateStatusFile = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusFile.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Status File ya existe' });

    next();
}

export const checkDuplicateStatusAAP = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusAAP.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Status AAP ya existe' });

    next();
}

export const checkDuplicateStatusRP = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusRP.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Status RP ya existe' });

    next();
}

export const checkDuplicateStatusTasacion = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusTasacion.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Status Tasación ya existe' });

    next();
}

export const checkDuplicateStatusMafRequest = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusMafRequest.findOne({ name });

    if (query) return res.status(201).json({ message: 'El Estado Maf ya existe' });

    next();
}

export const checkDuplicateEstadoTunningAccesorios = async(req, res, next) => {
    const { name } = req.body;
    const query = await EstadoTunningAccesorio.findOne({ name });

    if (query) return res.status(201).json({ message: 'El Estado ya existe' });

    next();
}

export const checkDuplicateTecnico = async(req, res, next) => {
    const { name } = req.body;
    const query = await Tecnico.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Técnico Evaluador ya existe' });

    next();
}

export const checkDuplicateAServicios = async(req, res, next) => {
    const { name } = req.body;
    const query = await AServicios.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El Asesor de Servicios ya existe' });

    next();
}

export const checkDuplicateMarcaT = async(req, res, next) => {
    const { name } = req.body;
    const query = await MarcaTasaciones.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'La marca ya existe' });

    next();
}

export const checkDuplicateModeloT = async(req, res, next) => {
    const { name } = req.body;
    const query = await ModeloTasaciones.findOne({ name: name });

    if (query) return res.status(201).json({ message: 'El modelo ya existe' });

    next();
}

export const checkDuplicateComprobante = async(req, res, next) => {
    const { name } = req.body;
    const query = await TipoComprobante.findOne({ name });

    if (query) return res.status(201).json({ message: 'El comprobante ya existe' });

    next();
}

export const checkDuplicateMotivoRechazo = async(req, res, next) => {
    const { name } = req.body;
    const query = await MotivoRechazo.findOne({ name });

    if (query) return res.status(201).json({ message: 'El motivo ya existe' });

    next();
}

export const checkDuplicateStatusFacturacion = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusFacturacion.findOne({ name });

    if (query) return res.status(201).json({ message: 'El estado de facturación ya existe' });

    next();
}

export const checkDuplicateStatusEntrega = async(req, res, next) => {
    const { name } = req.body;
    const query = await StatusEntrega.findOne({ name });

    if (query) return res.status(201).json({ message: 'El estado de entrega ya existe' });

    next();
}

export const checkDuplicateTipoCampania = async(req, res, next) => {
    const { name } = req.body;

    const query = await TipoCampania.findOne({ name });

    if (query) return res.status(201).json({ message: 'El tipo de campaña ya existe' });

    next();
}

export const checkDuplicateAccesorio = async(req, res, next) => {
    const { name } = req.body;

    const query = await AccesorioE.findOne({ name });

    if (query) return res.status(201).json({ message: 'El accesorio ya existe' });

    next();
}

export const checkDuplicateCondicionAccesorio = async(req, res, next) => {
    const { name } = req.body;

    const query = await CondicionAccesorio.findOne({ name });

    if (query) return res.status(201).json({ message: 'La condición de accesorio ya existe' });

    next();
}

export const checkDuplicateEstadoSeguro = async (req, res, next) => {
    const { name } = req.body;

    const query = await EstadoSeguro.findOne({name});
    if(query) return res.status(201).json({message: 'El estado ya existe'});

    next();
}

export const checkDuplicateEstadoUsado = async (req, res, next) => {
    const { name } = req.body;

    const query = await EstadoUsados.findOne({name});
    if(query) return res.status(201).json({message: 'El estado ya existe'});

    next();
}

export const checkDuplicateEstadoCivil = async (req, res, next) => {
    const { name } = req.body;

    const query = await EstadoCivil.findOne({name});
    if(query) return res.status(201).json({message: 'El estado civil ya existe'});

    next();
}

export const checkDuplicatePlanMAF = async (req, res, next) => {
    const { name } = req.body;

    const query = await PlanMAF.findOne({name});
    if(query) return res.status(201).json({message: 'El plan MAF ya existe'});

    next();
}

export const checkDuplicateFiltroMaf = async (req, res, next) => {
    const { name } = req.body;

    const query = await FiltroMaf.findOne({name});
    if(query) return res.status(201).json({message: 'El estado de filtro ya existe'});

    next();
}

export const checkDuplicateTipoDocumento = async (req, res, next) => {
    const { name } = req.body;

    const query = await TipoDocumento.findOne({name});
    if(query) return res.status(201).json({message: 'El documento de identidad ya existe'});

    next();
}

export const checkDuplicateMenuG = async (req, res, next) => {
    const { name } = req.body;

    const query = await MenuG.findOne({name});
    if(query) return res.status(201).json({message: 'El menú ya existe'});

    next();
}

export const checkDuplicateModuloG = async (req, res, next) => {
    const { name } = req.body;

    const query = await ModuloG.findOne({name});
    if(query) return res.status(201).json({message: 'El módulo ya existe'});

    next();
}

export const checkDuplicateSubmoduloG = async (req, res, next) => {
    const { name } = req.body;

    const query = await SubmoduloG.findOne({name});
    if(query) return res.status(201).json({message: `El submódulo ${name} ya existe`});

    next();
}

export const checkDuplicateTipoProducto = async (req, res, next) => {
    const { name } = req.body;

    const query = await TipoProducto.findOne({name});
    if(query) return res.status(201).json({message: `El tipo de producto ${name} ya existe`});

    next();
}

export const checkDuplicateMes = async (req, res, next) => {
    const { name } = req.body;

    const query = await Mes.findOne({name});
    if(query) return res.status(201).json({message: `El mes ${name} ya existe`});

    next();
}