import { Router } from "express";
import controller from "../controllers/soat.controller";
import { authJwt, verifyDuplicate } from "../middlewares";

const router = Router();

router.get("/", controller.getAll);
router.get("/:itemId", controller.getOneById);
router.post('/by-creator', controller.getSOATByCreator);
router.post('/by-sucursal', controller.getItemsBySede);
router.post("/", [authJwt.verifyToken, authJwt.isConexosAsistantOrAdmin], controller.createOne);
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isConexosAsistantOrAdmin], controller.updateOneById);
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], controller.deleteOneById);

export default router;
