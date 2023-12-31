import { Router } from "express";
import filesCtrl from "../controllers/files.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", filesCtrl.getAll);
router.get("/logs", filesCtrl.getAllLogs);
router.get("/logs/:itemId", filesCtrl.getOneLogById);
router.post("/logs/by-codigo", filesCtrl.getOneLogByCodigo);
router.get("/:itemId", filesCtrl.getOneById);
router.post("/by-estado", filesCtrl.getFilesByEstado);
router.post("/by-seller", filesCtrl.getFilesByVendedor);
router.post("/by-sucursal", filesCtrl.getFilesBySucursalyFecha);
router.post("/by-tvalue", filesCtrl.getFilesByToyotaValue);
router.post("/by-accesorios", filesCtrl.getFilesByImporteAccesorios);
router.post("/count/by-estado", filesCtrl.conteoFilesByEstado);
router.post("/progress", filesCtrl.groupFilesByEstado);
router.post("/ranking/by-modelo", filesCtrl.rankingFilesByModelo);
router.post("/ranking/by-seller", filesCtrl.rankingFilesBySeller);
router.post("/ranking/entregas", filesCtrl.rankingFilesByUbicacion);
router.post("/testing", filesCtrl.testSeguimiento);
router.post("/ranking/by-toyota-life", filesCtrl.getFilesByToyotaLife);
router.post("/ranking/stock", filesCtrl.getFilesWithModeloByStock);
router.post("/test/by-marca", filesCtrl.testBusquedaXmarcas);
router.post("/", [authJwt.verifyToken, authJwt.isCoordinadorAdvorAdminorAsistantADVorChiefPlaneamiento], filesCtrl.createOne);
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isCoordinadorAdvorAdminorAsistantADVorChiefPlaneamiento], filesCtrl.updateOneById);
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], filesCtrl.deleteOneById);

export default router;
