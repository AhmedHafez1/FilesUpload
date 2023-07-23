const path = require('path');
const { StatusCodes } = require('http-status-codes');

const uploadProductImage = (req, res) => {
  const productImage = req.files.image;

  const imagePath = path.join(
    __dirname,
    '../public/uploads/',
    productImage.name
  );

  productImage.mv(imagePath);

  res
    .status(StatusCodes.CREATED)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = { uploadProductImage };
