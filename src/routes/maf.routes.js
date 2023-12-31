import { Router } from "express";
import mafCtrl from "../controllers/maf.controller";
import multer from "../middlewares/multer";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/:mafId", mafCtrl.getOneById);

// Create One
router.post("/", [authJwt.verifyToken, authJwt.isVendedorAsesorVenta], multer.array("evidencias", 50), mafCtrl.createOne);

//Listas
router.post("/by-estado", mafCtrl.getAllByEstado);
router.post("/by-sucursal", mafCtrl.getAllBySucursal);
router.post("/by-vendedor", mafCtrl.getAllByCreador);
router.post("/by-customer", mafCtrl.getAllSolicitudesAprobadas);
router.post("/testing", mafCtrl.testSeguimiento);

router.patch("/agree/:mafId", [authJwt.verifyToken, authJwt.isExecutiveMaf], multer.array("docuAprobacion", 2), mafCtrl.approveRequestStateById);
router.patch(
    "/reenroll/:mafId",
    [authJwt.verifyToken, authJwt.isVendedorAsesorVenta],
    multer.array("adicionales", 30),
    mafCtrl.reenrollRequestStateById
);
router.patch("/update/:mafId", [authJwt.verifyToken, authJwt.isExecutiveMaf], mafCtrl.updateRequestStateById);

router.patch("/chief-approve/:itemId", [authJwt.verifyToken, authJwt.isChiefSalesORAdmin], mafCtrl.updateFileOnStatusByChief);

// Delete One By Id
router.delete("/:mafId", [authJwt.verifyToken, authJwt.isAdmin], mafCtrl.deleteOneById);

export default router;
