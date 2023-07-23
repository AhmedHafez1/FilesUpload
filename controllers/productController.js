const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  res.send('Get Products');
};
const createProduct = async (req, res) => {
  const product = await Product.create(req.body.product);
  res.status(StatusCodes.CREATED).send({ product });
};

module.exports = { getProducts, createProduct };
