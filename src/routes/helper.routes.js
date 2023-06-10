import { Router } from "express";
import helperCtrl from "../controllers/helper.controller";

const router = Router();

router.post("/send-email", helperCtrl.enviarCorreo);
router.post("/send-tc", helperCtrl.enviarTasaCambio);
router.post("/send-kaizen", helperCtrl.enviarEmailForKaizen);

export default router;
