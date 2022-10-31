import { Router } from "express";
import controller from "../controllers/tunningAccesorios.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", controller.getAll);
router.post("/", [authJwt.verifyToken, authJwt.isAdministradorOrAsistantComercial], controller.createOne);
router.post('/count/by-estado', controller.findByEstado);
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdministradorOrAsistantComercial], controller.updateOneById);

export default router;
