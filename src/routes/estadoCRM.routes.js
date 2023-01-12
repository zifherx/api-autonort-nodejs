import { Router } from "express";
import controller from "../controllers/estadoCRM.controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/activos", controller.getAllActive);
router.get("/:itemId", controller.deleteOneById);
router.post("/", controller.createOne);
router.patch("/:itemId", controller.updateOneById);
router.delete("/:itemId", controller.deleteOneById);

export default router;
