import { Router } from "express";
import controller from "../controllers/papeleta.controller";

const router = new Router();

// router.get('/', controller.getAll);
router.get('/:itemId', controller.getOneById);
router.post('/by-sede', controller.getAllBySede);
router.post('/by-creator', controller.getAllByCreator);
router.post('/by-area', controller.getAllByArea);
router.post('/', controller.newOne);
router.patch('/update/:itemId', controller.rateOneById)
// router.patch('/:itemId', controller.updateOneById);
// router.delete('/:itemId', controller.deleteOneById);

export default router;