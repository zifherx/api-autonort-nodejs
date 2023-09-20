import { Router } from "express";
import controller from "../controllers/estadoPlanilla.controller";

const router = Router();

router.get("/", controller.getall);
router.get("/activos", controller.getActive);
router.get("/:itemId", controller.getaOneById);
router.post("/", controller.createOne);
router.patch("/:itemId", controller.updateOneById);
router.delete("/:itemId", controller.deleteOneById);

export default router;
