import { Router } from 'express'
const router = Router();

import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import roleRoutes from './roles.routes'
import vehicleRoutes from './vehicle.routes'
import sellerRoutes from './seller.routes'
// import campaignRoutes from './campaign.routes'
import campaignRoutes from './campania.routes'
import tipoCampaniaRoutes from './tipoCampania.routes'
import adicionalRoutes from './adicional.routes'
import propsRoutes from './props.routes'
import customerRoutes from './customer.routes'
import fileRoutes from './files.routes'
import recordRoutes from './record.routes'
import modeloRoutes from './modelo.routes'
import bancoRoutes from "./banco.routes"
import coloresRoutes from "./colores.routes"
import sectoristeRoutes from "./sectorista.routes"
import situacionRoutes from './situacion.routes'
import condicionRoutes from "./condicion.routes"
import financiamientoRoutes from "./financiamiento.routes"
import sucursalRoutes from "./sucursal.routes"
import sustentoRoutes from "./sustento.routes"
import ubicacionRoutes from "./ubicacion.routes"
import chasisRoutes from './chasis.routes'
import aniosRoutes from './anio.routes'
import marcaRoutes from './marca.routes'
import deliveryRoutes from './delivery.routes'
import seguroRoutes from "./seguro.routes"
import conexoRoutes from './conexos.routes'
import endosoRoutes from './endoso.routes'
import aseguradoraRoutes from './aseguradora.routes'
import operacionRoutes from './operacion.routes'
import statusFileRoutes from './statusFile.routes'
import statusRPRoutes from './statusRP.routes'
import statusAAPRoutes from './statusAAP.routes'
import statusTasacionRoutes from './statusTasacion.routes'
import mafRoutes from './maf.routes'
import jefaturaVentasRoutes from './jefaturaVentas.routes'
import statusMafRequestRoutes from './statusMafRequest.routes'
import tasacionRoutes from './tasacion.routes'
import tecnicoRoutes from './tecnico.routes'
import aserviciosRoutes from './aservicios.routes'
import marcaTRoutes from './marcaT.routes'
import modeloTRoutes from './modeloT.routes'
import accesorioRoutes from './accesorio.routes';
import portadaRoutes from './portada.routes'
import subumoduleRoutes from './submodule.routes';
import areaRoutes from './area.routes';
import comprobanteRoutes from './tipoComprobante.routes';
import rechazoRoutes from './motivo.routes';
import facturacionRoutes from './statusFacturacion.routes';
import statusEntregasRoutes from './statusEntrega.routes';
import entregasRoutes from './entrega.routes';
import condicionARoutes from './condicionAccesorio.routes';
import estadoSeguroRoutes from './estadoSeguro.routes';
import usoRoutes from './tipoUso.routes';
import origenRoutes from './origenConcesionario.routes';
import metodoARoutes from './metodoAtencion.routes';
import civilRoutes from './civil.routes';
import planMafRoutes from './planMaf.routes';
import filtroMafRoutes from './filtroMaf.routes';
import helperRoutes from './helper.routes';
import tDocumentoRoutes from './tipoDocumento.routes';
import permisoRoutes from './permiso.routes';
import menuGRoutes from './menuG.routes';
import moduloGRoutes from './moduloG.routes';
import submoduloGRoutes from './submoduloG.routes';
import tProductoRoutes from './tipoProducto.routes';
import mesRoutes from './mes.routes';

router.get('/', (req, res) => {
    res.send('Api Swagger')
})

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/seller', sellerRoutes);
router.use('/campania', campaignRoutes);
router.use('/tipo-campania', tipoCampaniaRoutes);
router.use('/adicional', adicionalRoutes);
router.use('/props', propsRoutes);
router.use('/customer', customerRoutes);
router.use('/files', fileRoutes);
router.use('/record', recordRoutes);
router.use('/modelo', modeloRoutes);
router.use('/banco', bancoRoutes);
router.use('/asesor-conexo', conexoRoutes);
router.use('/endoso', endosoRoutes);
router.use('/color', coloresRoutes);
router.use('/sectorista', sectoristeRoutes);
router.use('/situacion', situacionRoutes);
router.use('/condicion', condicionRoutes);
router.use('/sucursal', sucursalRoutes);
router.use('/sustento', sustentoRoutes);
router.use('/financiamiento', financiamientoRoutes);
router.use('/ubicacion', ubicacionRoutes);
router.use('/chasis', chasisRoutes);
router.use('/anios', aniosRoutes);
router.use('/marca', marcaRoutes);
router.use('/delivery', deliveryRoutes);
router.use('/seguro', seguroRoutes);
router.use('/aseguradora', aseguradoraRoutes);
router.use('/tipo-operacion', operacionRoutes);
router.use('/status-file', statusFileRoutes);
router.use('/status-rp', statusRPRoutes);
router.use('/status-aap', statusAAPRoutes);
router.use('/maf', mafRoutes)
router.use('/jefatura-ventas', jefaturaVentasRoutes);
router.use('/status-maf', statusMafRequestRoutes);
router.use('/tasacion', tasacionRoutes);
router.use('/tecnico-automotriz', tecnicoRoutes);
router.use('/service-advisor', aserviciosRoutes);
router.use('/brand', marcaTRoutes);
router.use('/models', modeloTRoutes);
router.use('/accesorios', accesorioRoutes);
router.use('/portada', portadaRoutes);
router.use('/submodule', subumoduleRoutes);
router.use('/area', areaRoutes);
router.use('/status-tasacion', statusTasacionRoutes);
router.use('/comprobante', comprobanteRoutes);
router.use('/motivo-rechazo', rechazoRoutes);
router.use('/status-facturacion', facturacionRoutes);
router.use('/status-entrega', statusEntregasRoutes)
router.use('/entregas', entregasRoutes)
router.use('/condicion-accesorio',condicionARoutes);
router.use('/status-seguro', estadoSeguroRoutes);
router.use('/tipo-uso',usoRoutes);
router.use('/origen-concesionario',origenRoutes);
router.use('/metodo-atencion',metodoARoutes);
router.use('/estado-civil', civilRoutes);
router.use('/plan-maf', planMafRoutes);
router.use('/filtro-maf', filtroMafRoutes);
router.use('/helper', helperRoutes);
router.use('/documento-identidad', tDocumentoRoutes);
router.use('/permisos',permisoRoutes);
router.use('/tipo-producto', tProductoRoutes);
router.use('/mes', mesRoutes);
//Modulos
router.use('/menuG', menuGRoutes);
router.use('/moduloG', moduloGRoutes);
router.use('/submoduloG', submoduloGRoutes);

export default router;