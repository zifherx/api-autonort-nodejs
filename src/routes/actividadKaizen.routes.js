import { Router } from "express";
import activityController from "../controllers/actividadKaizen.controller";
import { authJwt } from "../middlewares";
import multer from "../middlewares/multer";

const router = Router();

router.get("/", activityController.getAll);
router.get("/:itemId", activityController.getOneById);
router.post(
    "/",
    // authJwt.verifyToken,
    multer.fields([
        { name: "graficoProblema", maxCount: 1 },
        { name: "graficoContramedida", maxCount: 1 },
        { name: "graficoResultados", maxCount: 1 },
        { name: "anexos[]", maxCount: 10 },
    ]),
    activityController.createOne
);
router.patch(
    "/:itemId",
    authJwt.verifyToken,
    multer.fields([
        // Problema
        { name: "graficoProblema", maxCount: 1 },
        // Contramedida
        { name: "graficoContramedida", maxCount: 1 },
        // Resultados
        { name: "graficoResultados", maxCount: 1 },
        // Anexos
        { name: "anexos[]", maxCount: 10 },
    ]),
    activityController.updateOneById
);
router.patch("/rate/:itemId", activityController.sendActivityToEvaluate);
router.delete("/:itemId", activityController.deleteOneById);

export default router;
