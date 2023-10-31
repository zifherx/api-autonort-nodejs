import { Router } from "express";
import planillaController from "../controllers/planillaController";

const router = Router();

router.post("/by-period", planillaController.getPlanillaOfPeriod);

router.post("/by-year", planillaController.getPlanillaByYear);

export default router;
