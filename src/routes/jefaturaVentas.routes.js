import { Router } from 'express'
import jefaturaController from '../controllers/jefaturaVentas.controller'
import { authJwt, verifyDuplicate } from '../middlewares'
const router = Router();

router.get('/', jefaturaController.getAll);
router.get('/activos', jefaturaController.getAllActivos);
router.get('/:jefaturaId', jefaturaController.getOneById);
//Obtener Asesor x Sucursal
router.post('/by-sucursal', jefaturaController.obtenerJefexSucursal)
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], jefaturaController.createOne);
router.patch('/:jefaturaId', [authJwt.verifyToken, authJwt.isAdmin], jefaturaController.updateById);
router.delete('/:jefaturaId', [authJwt.verifyToken, authJwt.isAdmin], jefaturaController.deleteById);


export default router;