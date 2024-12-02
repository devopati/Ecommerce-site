import express from "express";
import createProductCtrl from "../controllers/products/create-product.js";
import getSingleProductCtrl from "../controllers/products/get-single-product.js";
import getAllProductsCtrl from "../controllers/products/get-all-products.js";
import deleteProductCtrl from "../controllers/products/delete-product.js";
const router = express.Router();

router.route("/").post(createProductCtrl);

router.route("/").get(getAllProductsCtrl);

router.route("/").delete(deleteProductCtrl);

router.route("/single").get(getSingleProductCtrl);

export default router;
