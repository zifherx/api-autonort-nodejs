import { Router } from "express";
import estadoCtrl from "../controllers/estadoKaizen.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", estadoCtrl.getAll);
router.get("/activos", estadoCtrl.getActiveAll);
router.get("/:itemId", estadoCtrl.getOneById);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateEstadoKaizen], estadoCtrl.createOne);
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.updateById);
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], estadoCtrl.deleteById);

export default router;
