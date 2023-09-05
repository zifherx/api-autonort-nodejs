import { Router } from "express";
import { solicitudMafController } from "../controllers/solicitudMaf.controller";
import multer from "../middlewares/multer";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", solicitudMafController.getAll);
router.get("/:itemId", solicitudMafController.getOneById);
router.get("/by-creator", solicitudMafController.getAllByCreator);

router.post("/by-dates", solicitudMafController.getAllFromDatesSedeByEstado);
router.post("/", [authJwt.verifyToken, authJwt.isVendedorAsesorVenta], multer.array("evidencias", 50), solicitudMafController.createOne);

router.patch(
    "/update/:itemId",
    [authJwt.verifyToken, authJwt.isVendedorAsesorVenta],
    multer.array("evidencias", 50),
    solicitudMafController.updateOneById
);

router.patch("/send-evaluate/:itemId", [authJwt.verifyToken, authJwt.isVendedorAsesorVenta], solicitudMafController.sentApplicationToEvaluate);
router.patch(
    "/send-revaluate/:itemId",
    [authJwt.verifyToken, authJwt.isVendedorAsesorVenta],
    multer.array("adicionales", 30),
    solicitudMafController.sendApplicationToRevaluate
);
router.patch(
    "/rate/:itemId",
    [authJwt.verifyToken, authJwt.isExecutiveMaf],
    multer.fields([
        { name: "docAprobacion", maxCount: 1 },
        { name: "docCronograma", maxCount: 1 },
    ]),
    solicitudMafController.rateOneById
);

router.delete("/:itemId", [authJwt.verifyToken, authJwt.isAdmin], solicitudMafController.deleteOneById);

export default router;
