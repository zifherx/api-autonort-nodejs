import { Router } from "express";
import filesCtrl from "../controllers/files.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", filesCtrl.getAll);
router.get("/:itemId", filesCtrl.getOneById);
router.post("/by-estado", filesCtrl.getFilesByEstado);
router.post("/by-seller", filesCtrl.getFilesByVendedor);
router.post("/by-sucursal", filesCtrl.getFilesBySucursalyFecha);
router.post('/by-tvalue', filesCtrl.getFilesByToyotaValue);
router.post('/by-accesorios', filesCtrl.getFilesByImporteAccesorios);
router.post("/count/by-estado", filesCtrl.conteoFilesByEstado);
router.post("/progress", filesCtrl.groupFilesByEstado);
router.post("/ranking/by-modelo", filesCtrl.rankingFilesByModelo);
router.post("/ranking/by-seller", filesCtrl.rankingFilesBySeller);
router.post("/ranking/entregas", filesCtrl.rankingFilesByUbicacion);
router.post("/", [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento], filesCtrl.createOne);
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADVorChiefPlaneamiento], filesCtrl.updateOneById);
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], filesCtrl.deleteOneById);

export default router;
