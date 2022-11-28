// Create a product
export async function createProduct(req, res) {
  try {
    res.send("creating a product route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all products
export async function getProducts(req, res) {
  try {
    res.send("get all products route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Updating a product
export async function updateProduct(req, res) {
  try {
    res.send("update product route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Deleting a product
export async function deleteProduct(req, res) {
  try {
    res.send("deleting a product route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
