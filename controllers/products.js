import { Product } from "../models/index.js";

// Create a product
export async function createProduct(req, res) {
  try {
    const { name, description, category, quantity, price } = req.body;

    if ((!name, !description, !category, !quantity, !price))
      return res.status(400).json({ message: "Fill all fields" });

    await Product.create({
      name,
      description,
      category,
      quantity,
      price,
    });

    return res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all products
export async function getProducts(req, res) {
  try {
    const products = await Product.find({});

    return res
      .status(200)
      .json({ message: "Products fetched successfully", data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
// Get single product
export async function getProduct(req, res) {
  try {
    const product = await Product.findById(req.params.id);

    return res
      .status(200)
      .json({ message: "Product fetched successfully", data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Updating a product
export async function updateProduct(req, res) {
  try {
    await Product.findByIdAndUpdate(req.params.id, { ...req.body });
    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Deleting a product
export async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
