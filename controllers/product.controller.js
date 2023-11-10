const prisma = require("../db");
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC
// TODO: STORE IMAGES IN FIREBASE, ETC ETC ETC

const getProducts = async (req, res) => {
  const result = await prisma.product.findMany({});
  res.send(result);
};

const addProduct = async (req, res) => {
  const {
    product_price,
    product_description,
    product_quantity,
    product_name,
    product_image,
  } = req.body;

  quantityParsed = parseInt(product_quantity);
  priceParsed = parseFloat(product_price);
  const result = await prisma.product.create({
    data: {
      product_price: priceParsed,
      product_description,
      product_quantity: quantityParsed,
      product_name,
      product_image,
    },
  });

  res.send(result);
};

module.exports = {
  addProduct,
  getProducts,
};
