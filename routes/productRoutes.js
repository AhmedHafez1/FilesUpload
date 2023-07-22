const express = require('express');
const {
  getProducts,
  createProduct,
} = require('../controllers/productController');
const { uploadProductImage } = require('../controllers/uploadsController');
const router = express.Router();

router.route('/').get(getProducts).post(createProduct);
router.route('/uploads').post(uploadProductImage);

module.exports = router;
