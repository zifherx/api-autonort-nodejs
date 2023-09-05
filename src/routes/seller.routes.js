import { Router } from "express";
import sellerCtrl from "../controllers/seller.controller";
import { authJwt, verifySignup, verifyDuplicate } from "../middlewares";
import multer from "../middlewares/multer";

const router = Router();

//Obtener Vendedores
router.get("/", sellerCtrl.getAll);

router.get("/activos", sellerCtrl.getAllActive);

//Obtener Vendedor por Id
router.get("/:itemId", sellerCtrl.getSellerById);

//Obtener Vendedor por Sucursal
router.post("/by-sucursal", [authJwt.verifyToken], sellerCtrl.getSellerBySucursal);

// router.post('/brand', sellerCtrl.getSellerByMarcaAndSucursal);

//Obtener Vendedor por Nombre
router.post("/name", sellerCtrl.getSellerByName);

//Crear Vendedor
router.post("/", [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], sellerCtrl.createSeller);

//Actualizar Vendedor
router.patch("/:itemId", [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], multer.single("avatar"), sellerCtrl.updateSellerById);

//Remover Vendedor
router.delete("/:itemId", [authJwt.verifyToken, authJwt.isChiefAdvorAdmin], sellerCtrl.deleteSellerById);

export default router;
