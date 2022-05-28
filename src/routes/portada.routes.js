import {Router} from 'express'
import portadaController from '../controllers/portada.controller'
import multer from '../middlewares/multer'

const router = Router();

router.get('/activos', portadaController.getAllActivos);

router.get('/:portadaId', portadaController.getOneById);

router.get('/', portadaController.getAll);

router.post('/', multer.single('avatar'), portadaController.createOne);

router.patch('/:portadaId', multer.single('avatar'), portadaController.updateOneById);

router.delete('/:portadaId', portadaController.deleteOneByID);

export default router;