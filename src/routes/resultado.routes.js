import { Router } from 'express';
import resultadoCtrl from '../controllers/resultado.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

export default router;