import { Router } from "express";
import filesCtrl from "../controllers/files.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", filesCtrl.getAll);
router.get("/:filesId", filesCtrl.getOneById);
router.post("/by-estado", filesCtrl.getFilesByEstado);
router.post("/by-sucursal", filesCtrl.getFilesBySucursalyFecha);
router.post("/count/by-estado", filesCtrl.conteoFilesByEstado);
router.post("/progress", filesCtrl.groupFilesByEstado);
router.post("/ranking/by-modelo", filesCtrl.rankingFilesByModelo);
router.post("/ranking/by-seller", filesCtrl.rankingFilesBySeller);
router.post("/ranking/entregas", filesCtrl.rankingFilesByUbicacion);
router.post("/", [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV], filesCtrl.createOne);
router.patch("/:filesId", [authJwt.verifyToken, authJwt.isChiefAdvorAdminorAsistantADV], filesCtrl.updateOneById);
router.delete("/:filesId", [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], filesCtrl.deleteOneById);

export default router;
