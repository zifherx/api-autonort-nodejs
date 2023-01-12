import { Router } from "express";
import metodoCtrl from "../controllers/metodoAtencion.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/activos", metodoCtrl.getAllActivos);
router.get("/:itemId", metodoCtrl.getOneById);
router.get("/", metodoCtrl.getAll);
router.post("/", metodoCtrl.createOne);
router.patch("/:itemId", metodoCtrl.updateOneById);
router.delete("/:itemId", metodoCtrl.deleteOneById);

export default router;
