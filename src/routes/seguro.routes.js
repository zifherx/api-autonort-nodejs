import { Router } from "express";
import * as seguroCtrl from '../controllers/seguro.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

//Conteo Global de Solicitudes
router.get('/count', seguroCtrl.countAll);

//Obtener Seguro
router.get('/', seguroCtrl.getAll);

//Obtener Seguro por ID
router.get('/:seguroId', seguroCtrl.getSeguroById);

//Conteo by Status
router.post('/count/by-status', seguroCtrl.countByStatusySucursal);

//Conteo by Dates
router.post('/count/by-dates', seguroCtrl.countByDates);

//Ranking By Status por mes
router.post('/ranking/by-status', seguroCtrl.getRankingByStatus);

//Ranking By Tipo Seguro por mes
router.post('/ranking/by-type', seguroCtrl.getRankingByTipo);

//Ranking By Vehículo por mes
router.post('/ranking/by-vehicle', seguroCtrl.getRankingByVehicle);

//Ranking By Vendedor por mes
router.post('/ranking/by-seller', seguroCtrl.getRankingBySeller);

//Ranking By Vendedor por mes
router.post('/ranking/by-aseguradora', seguroCtrl.getRankingByAseguradora);

router.post('/status-by-seller', seguroCtrl.getSegurosByVendedor);
router.post('/vehicles-by-seller', seguroCtrl.getSegurosByModelo);

//Crear Seguro
router.post('/', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.createSeguro);

//Actualizar Seguro
router.patch('/:seguroId', [authJwt.verifyToken, authJwt.isConexosAsistant, verifySignup.checkRolesExist], seguroCtrl.updateSeguro);

//Eliminar Seguro
router.delete('/:seguroId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExist], seguroCtrl.deleteSeguro);

export default router;