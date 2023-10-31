import { Router } from "express";
import controller from "../controllers/viewAuth.controller";


const router = Router();

router.get('/', controller.getAll);
router.post('/by-codigo', controller.findByCodigo);
router.post('/by-submodule', controller.findBySubmodule);
router.post('/', controller.createOne);
router.patch('/:itemId', controller.updateOneById);
router.delete('/:itemId', controller.deleteOneById);


export default router;