import { Router } from "express";
import comprobanteCtrl from "../controllers/tipoComprobante.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", comprobanteCtrl.getAll);

router.get("/activos", comprobanteCtrl.getAllActivos);

router.get("/:comprobanteId", comprobanteCtrl.getOneById);

router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateComprobante], comprobanteCtrl.createOne);

router.patch("/:comprobanteId", [authJwt.verifyToken, authJwt.isAdmin], comprobanteCtrl.updateOneById);

router.delete("/:comprobanteId", [authJwt.verifyToken, authJwt.isAdmin], comprobanteCtrl.deleteOneById);

export default router;
