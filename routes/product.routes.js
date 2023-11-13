const { Router } = require("express");
const {
  addProduct,
  getProducts,
  getCartProducts,
} = require("../controllers/product.controller");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/getProducts", getProducts);
router.post("/createProduct", upload.single("product_image"), addProduct);
router.get("/getCartProducts/:productId", getCartProducts);

module.exports = router;
