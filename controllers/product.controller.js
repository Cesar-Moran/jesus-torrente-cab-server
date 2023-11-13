const prisma = require("../db");
const multer = require("multer");

const getProducts = async (req, res) => {
  const result = await prisma.product.findMany({
    orderBy: {
      id: "desc",
    },
  });
  res.send(result);
};

const addProduct = async (req, res) => {
  console.log("req body", req.body);
  console.log("req file", req.file);
  res.send({});
};

const getCartProducts = async (req, res) => {
  const productId = parseInt(req.params.productId, 10);

  const result = await prisma.product.findMany({
    where: {
      id: productId,
    },
  });

  res.send(result);
};

module.exports = {
  addProduct,
  getProducts,
  getCartProducts,
};
