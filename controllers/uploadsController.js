const path = require('path');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');

const uploadProductImage = (req, res) => {
  if (!req.files?.image) throw new BadRequestError('No files sent');
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith('image'))
    throw new BadRequestError('Please upload image');

  const maxSize = 1024 * 1024 * 10;

  if (productImage.size > maxSize)
    throw new BadRequestError('Max size is 10 MB');

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
