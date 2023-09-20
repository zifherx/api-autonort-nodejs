import { Router } from "express";
import planillaController from "../controllers/planillaController";

const router = Router();

router.post("/boletas", planillaController.getPlanillaOfMonth);

router.post("/boletas/by-year", planillaController.getPlanillaByYear);

export default router;
