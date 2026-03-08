const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const product = new Product({
    ...req.body,
    user: req.user.id
  });

  await product.save();

  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ user: req.user.id });
  res.json(products);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};