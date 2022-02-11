import {Router} from 'express'
import portadaController from '../controllers/portada.controller'
import multer from '../middlewares/multer'

const router = Router();

router.get('/', portadaController.getAll);

router.post('/', multer.single('avatar'),portadaController.createOne);

export default router;