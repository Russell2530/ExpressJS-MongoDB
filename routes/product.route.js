const exspress = require("express");
const product = require("../models/product.models.js");
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller.js");
const router = exspress.Router();

router.get("/", getProducts)

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

module.exports = router;
