// Create a order
export async function createOrder(req, res) {
  try {
    res.send("create order route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all orders
export async function getAllOrders(req, res) {
  try {
    res.send("get all orders route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get single order
export async function getOrder(req, res) {
  try {
    res.send("get specific order route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get all orders specific to user
export async function getUserOrders(req, res) {
  try {
    res.send("get order for a user route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Update order
export async function updateOrder(req, res) {
  try {
    res.send("update order route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Delete order
export async function deleteOrder(req, res) {
  try {
    res.send("delete order route working");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
