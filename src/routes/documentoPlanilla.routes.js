import { Router } from "express";
import controller from "../controllers/documentoPlanilla.controller";

const router = new Router();

router.get("/", controller.getAll);
router.get("/:itemId", controller.getOneById);
router.post("/", controller.newOne);
router.post("/by-year", controller.getFullByYear);
router.patch("/:itemId", controller.updateOneById);
router.delete("/:itemId", controller.deleteOneById);

export default router;
