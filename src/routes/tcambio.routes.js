import { Router } from "express";
import controllerT from "../controllers/tcambio.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", controllerT.getAll);
router.get("/:itemId", controllerT.getOneById);
router.post("/by-range", [authJwt.verifyToken, authJwt.isAdminOrResponsableFinanzasOrFinanzas], controllerT.getCambiosByRange);
router.post("/", [authJwt.verifyToken, authJwt.isAdminOrResponsableFinanzasOrFinanzas], controllerT.createOne);

export default router;
