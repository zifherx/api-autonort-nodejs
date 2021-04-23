import { Router } from 'express'
const router = Router();

import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import roleRoutes from './roles.routes'
import vehicleRoutes from './vehicle.routes'
import sellerRoutes from './seller.routes'
import campaignRoutes from './campaign.routes'
import adicionalRoutes from './adicional.routes'
import propsRoutes from './props.routes'
import customerRoutes from './customer.routes'
import saleRoutes from './sale.routes'
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

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/roles', roleRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/seller', sellerRoutes);
router.use('/campania', campaignRoutes);
router.use('/adicional', adicionalRoutes);
router.use('/props', propsRoutes);
router.use('/customer', customerRoutes);
router.use('/sale', saleRoutes);
router.use('/record', recordRoutes);
router.use('/modelo', modeloRoutes);
router.use('/banco', bancoRoutes);
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

export default router;