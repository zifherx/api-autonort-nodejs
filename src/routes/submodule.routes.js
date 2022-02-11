import {Router} from 'express'
import submoduleController from '../controllers/submodule.controller'

const router = Router();

router.get('/', submoduleController.getAll);

router.post('/', submoduleController.createOne);

export default router;