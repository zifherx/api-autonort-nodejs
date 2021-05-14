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
import Props from '../models/Props'
import Record from '../models/Record'
import Sale from '../models/Sale'
import Anio from '../models/Anio'
import Marca from '../models/Marca'

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

export const checkDuplicateAccesorio = async(req, res, next) => {
    const { name } = req.body;

    const encontrado = await Props.findOne({ name });

    if (encontrado) return res.status(201).json({ message: 'El Accesorio ya existe' });

    next();
}

export const checkDuplicateTramite = async(req, res, next) => {
    const { sales } = req.body;

    const expediente = await Sale.find({ nro_comprobante: { $in: sales } });
    let cod_exp = expediente.map(rs => rs._id)

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