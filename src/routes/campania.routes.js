import  { Router } from 'express';
import campaniaController from '../controllers/campania.controller';

const router = Router();

router.get('/', campaniaController.getAll);
router.get('/activos', campaniaController.getAllActivos);
router.get('/:campaniaId', campaniaController.getOneById);
router.post('/find', campaniaController.findCampaniaByParams);
router.post('/ofertas', campaniaController.getOfertaByCampania);
router.post('/', campaniaController.createOne);
router.patch('/:campaniaId', campaniaController.updateOneById);
router.delete('/:campaniaId', campaniaController.deleteOneById);

export default router;