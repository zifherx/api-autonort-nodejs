import { Router } from "express";
import * as marcaTCtrl from "../controllers/marcaT.controller";
import { authJwt, verifyDuplicate } from "../middlewares";
import multer from "../middlewares/multer";

const router = Router();

router.get("/activos", marcaTCtrl.getAllActive);

router.get("/:itemId", marcaTCtrl.getOneById);

router.get("/", marcaTCtrl.getAll);

// router.post('/', multer.single('avatar'), marcaTCtrl.createMarca);
router.post("/", [authJwt.verifyToken, authJwt.isAdmin, verifyDuplicate.checkDuplicateMarcaT], multer.single("avatar"), marcaTCtrl.createOne);

router.patch("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], multer.single("avatar"), marcaTCtrl.updateOneById);

router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], marcaTCtrl.deleteOneById);

export default router;
