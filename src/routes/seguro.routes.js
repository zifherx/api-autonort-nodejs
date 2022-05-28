import { Router } from "express";
import seguroCtrl from '../controllers/seguro.controller'
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

//Obtener Seguro
router.get('/', seguroCtrl.getAll);

//Obtener Seguro por ID
router.get('/:seguroId', seguroCtrl.getOneById);

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

router.post('/by-sucursal', seguroCtrl.getBySucursalFecha);

router.post('/by-estado', seguroCtrl.getSegurosByEstado);

router.post('/by-creator', seguroCtrl.getSegurosByCreator);

//Crear Seguro
router.post('/', [authJwt.verifyToken, authJwt.isConexosAsistantOrAdmin], seguroCtrl.createOne);

//Actualizar Seguro
router.patch('/:seguroId', [authJwt.verifyToken, authJwt.isConexosAsistantOrAdmin], seguroCtrl.updateOneById);

//Eliminar Seguro
router.delete('/:seguroId', [authJwt.verifyToken, authJwt.isAdmin], seguroCtrl.deleteOneById);

export default router;