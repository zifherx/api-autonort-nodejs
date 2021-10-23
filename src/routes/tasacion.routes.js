import { Router } from "express";
import tasacionCtrl from '../controllers/tasacion.controller'
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";

const router = Router();

router.get('/', tasacionCtrl.getAll);

export default router;