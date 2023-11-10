const { Router } = require("express");
const {
  addProduct,
  getProducts,
} = require("../controllers/product.controller");

const router = Router();

router.get("/getProducts", getProducts);
router.post("/createProduct", addProduct);

module.exports = router;
