import { Router } from 'express'
import jefaturaController from '../controllers/jefaturaVentas.controller'
const router = Router();

router.get('/', jefaturaController.getAll);
router.post('/', jefaturaController.createOne);

//Obtener Asesor x Sucursal
router.post('/sucursal', jefaturaController.obtenerJefexSucursal)

export default router;