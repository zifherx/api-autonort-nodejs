import { Router } from 'express';
import nMas2Controller from '../controllers/nMas2.controller';
import { authJwt, verifyDuplicate } from '../middlewares';

const router = Router();

router.get('/', nMas2Controller.getAll);
router.get('/active', nMas2Controller.getAllActive);
router.get('/:itemId', nMas2Controller.getOneById);
router.post('/', [ authJwt.verifyToken, authJwt.isAdmin ] ,nMas2Controller.createOne);
router.patch('/:itemId', [ authJwt.verifyToken, authJwt.isAdmin ] , nMas2Controller.updateOneById);
router.delete('/:itemId', [ authJwt.verifyToken, authJwt.isAdmin ] , nMas2Controller.deleteOneById);

export default router;