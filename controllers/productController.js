const { StatusCodes } = require('http-status-codes');
const Product = require('../models/Product');

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.send({ products });
};
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).send({ product });
};

module.exports = { getProducts, createProduct };
