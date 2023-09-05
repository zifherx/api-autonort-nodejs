import { Router } from "express";
import planillaController from "../controllers/planillaController";

const router = Router();

router.post("/boletas", planillaController.getPlanilla);

export default router;
