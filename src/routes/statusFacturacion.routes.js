import { Router } from "express";
import statusController from "../controllers/statusFacturacion.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", statusController.getAll);
router.get("/activos", statusController.getAllActivos);
router.get("/:statusId", statusController.getOneById);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateStatusFacturacion], statusController.createOne);
router.patch("/:statusId", [authJwt.verifyToken, authJwt.isAdmin], statusController.updateOneById);
router.delete("/:statusId", [authJwt.verifyToken, authJwt.isAdmin], statusController.deleteOneById);

export default router;
