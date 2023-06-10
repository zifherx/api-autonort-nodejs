import { Router } from "express";
import estadoController from "../controllers/estadoTDPKaizen.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", estadoController.getall);
router.get("/activos", estadoController.getActive);
router.get("/:itemId", estadoController.getaOneById);
router.post("/", [verifyDuplicate.checkDuplicateEstadoTDPKaizen], estadoController.createOne);
router.patch("/:itemId", estadoController.updateOneById);
router.delete("/:itemId", estadoController.deleteOneById);

export default router;
