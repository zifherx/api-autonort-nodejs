import { Router } from 'express'
import saleCtrl from '../controllers/sale.controller'
import { authJwt, verifyDuplicate } from '../middlewares'
const router = Router();

//Obtener Venta
router.get('/', saleCtrl.getAll);

//// Reporte de Canceladas
// router.post('/estado', saleCtrl.UnidadesByStatus);// Usando
// router.post('/progress', saleCtrl.getUnidadesBySucursalFecha)//nueva
// router.post('/count/by-estado', saleCtrl.getConteoUnidadesByEstado)//nuevo
// router.post('/ranking/entregas', saleCtrl.getRankingUnidadesByUbicacion)//nuevo

router.post('/sucursal', saleCtrl.UnidadesBySucursalyFecha);//Usandose

// //Conteo por Sucursal, Situación y Fecha
// router.post('/conteo', saleCtrl.conteoUnidadesBySucursalStatusFecha);

// //Conteo por Sucursal, Situación y Fecha
// router.post('/count-all', saleCtrl.conteoUnidadesBySucursalFecha);

// //Unidades Libres
// router.post('/free', saleCtrl.UnidadesLibres);

// //Conteo de Unidades Entregadas
// router.post('/conteo/entregadas', saleCtrl.conteoUnidadesEntregadasBySucursal); //actualizado
// router.post('/conteo/entregas', saleCtrl.conteoVehiculosEntregadosByFecha); // eliminar

// //Conteo By Status
// router.post('/conteo/by-status', saleCtrl.conteoUnidadesByStatus);

//Obtener Venta por Id
router.get('/:salesId', saleCtrl.getOneById); // Corregido

// //Sales by Vendedor
// router.post('/vehicles-by-seller', saleCtrl.getVehiclesySeller);

// //Ranking By Vendedor
// router.post('/status-by-seller', saleCtrl.getSalesBySeller);

// //Conteo de Ventas By Vendedor
// router.post('/conteo/ventas', saleCtrl.conteoVentasByVendedor);

// //Conteo de Ventas By Modelo Vehicular
// router.post('/ranking/vehicles', saleCtrl.conteoVentasByModelo);
// router.post('/ranking/models', saleCtrl.rankingVentasByModelo);
// router.post('/ranking/financiamiento', saleCtrl.rankingVentasByFinanciamiento);
// router.post('/ranking/entity', saleCtrl.rankingVentasByEntidad);

// router.post('/total/props', saleCtrl.totalAccesoriosBySucursalMes);

// //Ranking de Ventas By Estado
// router.post('/ranking/sales', saleCtrl.getRankingByStatusyFecha);//actualizado

// //Vista de Expedientes Toyota Value
// router.post('/toyota-value', saleCtrl.obtenerToyotaValues);

// router.post('/ranking-anual/ventas', saleCtrl.probandoRanking);
// router.post('/by-marca', saleCtrl.conteoVentasBySucursalyEstadoyMarca);

//Crear Venta
router.post('/', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV, verifyDuplicate.checkDuplicateExpediente], saleCtrl.createOne);

//Actualizar Venta
router.patch('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV], saleCtrl.updateOneById); //Corregido

//Remover Venta
router.delete('/:salesId', [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], saleCtrl.deleteOneById);

export default router;