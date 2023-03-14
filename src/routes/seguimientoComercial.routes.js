import { Router } from 'express';
import controllerSeg from '../controllers/seguimientoComercial.controller';
const router = Router();

router.get('/',controllerSeg.getAll);

export default router;
